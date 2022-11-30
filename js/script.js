let scorePlayer
let scoreComputer

function computerPlay() {
  let computerMove
  let randomNumber = Math.floor(Math.random() * 3 + 1) //Generate a random number between 1 and 3
  switch (randomNumber) {
    case 1:
      computerMove = 'rock'
      break;
    case 2:
      computerMove = 'paper'
      break;
    case 3:
      computerMove = 'scissors'
  }
  return computerMove
}

function requestPlayerInput() {
  let playerInput = prompt("What's your selection? (Rock, Paper or Scissors)")
  if (playerInput) playerInput=playerInput.toLocaleLowerCase()
  if (!(playerInput == 'rock' || playerInput == 'paper' || playerInput == 'scissors')) {
    alert ("Please enter a valid selection!")
    return requestPlayerInput()
  } else {
    return playerInput
  }
}

function playRound(playerSelection, computerSelection) {
  let message
  if (playerSelection == computerSelection) {
    message = `Draw! Player and computer both selected ${playerSelection}`
  }
  if (playerSelection == 'rock' && computerSelection == 'paper') {
    message = 'You lose! Paper beats Rock'
    scoreComputer++
  }
  if (playerSelection == 'rock' && computerSelection == 'scissors') {
    message = 'You win! Rock beats Scissors'
    scorePlayer++
  } 
  if (playerSelection == 'paper' && computerSelection == 'rock') {
    message = 'You win! Paper beats Rock'
    scorePlayer++
  }
  if (playerSelection == 'paper' && computerSelection == 'scissors') {
    message = 'You lose! Scissors beats Paper'
    scoreComputer++
  }
  if (playerSelection == 'scissors' && computerSelection == 'paper') {
    message = 'You win! Scissors beats Paper'
    scorePlayer++
  }
  if (playerSelection == 'scissors' && computerSelection == 'rock') {
    message = 'You lose! Rock beats Scissors'
    scoreComputer++
  }
  console.log(message)
}


function game(rounds) {
  // Initialize scores and final result
  scorePlayer = 0
  scoreComputer = 0
  let finalResult

  // Loop rounds
  for (let i=0; i<rounds; i++) {
    console.log(`***** ROUND ${i+1} *****`)
    playRound(requestPlayerInput(), computerPlay())
    console.log(`Player: ${scorePlayer} - Computer: ${scoreComputer}`)
  }

  // Calculate final result using signum function
  switch (Math.sign(scorePlayer-scoreComputer)) {
    case 0: {
      finalResult = 'Draw!'
      break
    }
    case 1: {
      finalResult = 'Player wins!'
      break
    }
    case -1: {
      finalResult = 'Computer wins!'
    }
  }
  console.log(`\n***** FINAL RESULT *****\n${finalResult}`)
}

// Play 5 rounds
game(5)

