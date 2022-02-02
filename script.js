// initialize variables
let playerSelection;
let computerPoints = 0;
let playerPoints = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", playRoundGetWinner));

// target div to display results
const resultOutput = document.querySelector("#results");
const playOutput = document.querySelector("#play");

function updateScore(winner) {
  // add points to whomever is the winner
  if (winner === "Player") { 
    playerPoints++;
  } else if (winner === "Computer") {
    computerPoints++;
  }
  if (playerPoints === 5) {
    resultOutput.textContent = "Congratulations, you won!";
    return;
  } else if (computerPoints === 5) {
    resultOutput.textContent = "Too bad, you lost!"
    return;
  } else {
    resultOutput.textContent = `Current score: Player ${playerPoints} - Computer ${computerPoints}`;
  }
}

function computerPlay() {
  // generate random number between 1 and 3
  let randomNum = Math.floor(Math.random()*3) + 1;
  // create a variable that will hold the computers selection 
  let computerWeapon = ""
  // switch 1 = rock, 2 = paper, 3 = scissors
  switch (randomNum) {
    case 1:
      computerWeapon = "Rock";
      break;
    case 2:
      computerWeapon = "Paper";
      break;
    case 3:
      computerWeapon = "Scissors";
      break;
  }
  return(computerWeapon);
}

function playRoundGetWinner(e) {
  // get id from clicked button to store in playerSelection
  const playerSelection = e.target.id;
  const computerSelection = computerPlay();
  // if playerSelection === computerSelection, return that game ended in a tie
  if (playerSelection === computerSelection) {
    playOutput.textContent = `It's a tie, you both played ${playerSelection}!`;
  } else if ((playerSelection === "Rock" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Scissors") || (playerSelection === "Scissors" && computerSelection === "Rock")) {
    playOutput.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
    return("Computer");
    updateScore("Computer");
  } else {
    playOutput.textContent = `You won! ${playerSelection} beats ${computerSelection}.`;
    updateScore("Player");
  }
}