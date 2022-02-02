// Make global variable for playerSelection
let playerSelection;

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

function game() {
  console.log("Get ready to play Rock-Paper-Scissors!");
  let computerPoints = 0;
  let playerPoints = 0;
  let computerSelection = computerPlay();
  playerSelection = prompt("Choose your weapon: Rock / Paper / Scissors");
  while (verifyInput(playerSelection) == false) {
    playerSelection = prompt("Please enter Rock, Paper or Scissors");
  }
  let winner = playRoundGetWinner(playerSelection, computerSelection);
  if (winner === "Player") { 
    playerPoints++;
  } else if (winner === "Computer") {
    computerPoints++;
  }
  console.log(`Current score: Player ${playerPoints} - Computer ${computerPoints}`);
  if (playerPoints > computerPoints) {
    console.log("Congratulations, you won!");
  } else if (playerPoints === computerPoints) {
    console.log("The game ended in a tie.");
  } else {
    console.log("Too bad, you lost!");
  }
}

function playRoundGetWinner(playerSelection, computerSelection) {
  // if playerSelection === computerSelection, return that game ended in a tie
  if (playerSelection === computerSelection) {
    console.log(`It's a tie, you both played ${playerSelection}!`);
    return("tie");
  } else if ((playerSelection === "Rock" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Scissors") || (playerSelection === "Scissors" && computerSelection === "Rock")) {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
    return("Computer");
  } else {
    console.log(`You won! ${playerSelection} beats ${computerSelection}.`);
    return("Player");
  }
}

function convertToCapitalCase(string) {
    return string[0].toUpperCase() + string.toLowerCase().slice(1);
}

function verifyInput(string) {
  if (!string) {
    return false;
  }
  playerSelection = convertToCapitalCase(string);
  if ((playerSelection === "Rock") || (playerSelection === "Paper") || (playerSelection === "Scissors")) {
    return true;
  } else {
    return false;
  }
}