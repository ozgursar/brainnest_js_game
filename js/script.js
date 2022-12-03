// Global variables for holding score state
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
  if (playerInput) playerInput=playerInput.toLocaleLowerCase().trim()
  if (!(playerInput == 'rock' || playerInput == 'paper' || playerInput == 'scissors')) {
    alert ("Please enter a valid selection!")
    return requestPlayerInput()
  } else {
    return playerInput
  }
}

function playRound(playerSelection, computerSelection) {
  let roundResult
  if (playerSelection == computerSelection) {
    roundResult = `Draw! Player and computer both selected ${playerSelection}.`
  } else if (playerSelection == 'rock' && computerSelection == 'paper') {
    roundResult = `You lose! Computer selected ${computerSelection}. Paper covers rock.`
    scoreComputer++
  } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
    roundResult = `You win! Computer selected ${computerSelection}. Rock crushes scissors.`
    scorePlayer++
  } else if (playerSelection == 'paper' && computerSelection == 'rock') {
    roundResult = `You win! Computer selected ${computerSelection}. Paper covers rock.`
    scorePlayer++
  } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
    roundResult = `You lose! Computer selected ${computerSelection}. Scissors cut paper.`
    scoreComputer++
  } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    roundResult = `You win! Computer selected ${computerSelection}. Scissors cut paper.`
    scorePlayer++
  } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
    roundResult = `You lose! Computer selected ${computerSelection}. Rock crushes scissors.`
    scoreComputer++
  }
  return roundResult
}


function game(rounds) {
  let singleRoundResult
  let finalResult

  // Initialize scores before starting the game
  scorePlayer = 0
  scoreComputer = 0

  // Loop rounds
  for (let i=0; i<rounds; i++) {
    console.log(`***** ROUND ${i+1} *****`)
    singleRoundResult = playRound(requestPlayerInput(), computerPlay())
    console.log (singleRoundResult)
    console.log(`Player: ${scorePlayer} - Computer: ${scoreComputer}`)
  }

  // Calculate final result using signum function
  switch (Math.sign(scorePlayer-scoreComputer)) {
    case 0: {
      finalResult = 'It\'s a Draw!'
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
  console.log(`\n***** FINAL RESULT *****\n${finalResult} (${scorePlayer}-${scoreComputer})`)
}

// Play 5 rounds
game(5)

