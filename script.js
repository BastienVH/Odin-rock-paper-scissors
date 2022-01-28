/*
Runthrough of the program (1 iteration):
- ask user for input (rock, paper, scissors)
- verify input is correct
- let computer randomly select between rock, paper and scissors
- compare user selection and computer selection to return winner
- output chosen weapons and winner
*/


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
  // return selection
  return(computerWeapon);
}

function game() {
  // Briefing: play a 5 round game + keep score + report winner or loser at the end
  // Use console.log to display results of each round and winner
  // Use prompt() to get input from the user

  // Announce game will start
  alert("Get ready to play Rock-Paper-Scissors!");
  // create variable to store points for player and computer
  let computerPoints = 0;
  let playerPoints = 0;
  // Loop the following 5 times:
  for (let i = 0; i < 5; i++) {
    // Prompt user for choice of weapon, store in variable
    let playerSelection = convertToCapitalCase(prompt("Choose your weapon: Rock / Paper / Scissors"));
    // store computerPlay in variable
    let computerSelection = computerPlay();
    // Compare values to play a round playRoundGetWinner
    let winner = playRoundGetWinner(playerSelection, computerSelection);
    // check return value and increment winner points
    if (winner === "Player") { 
      playerPoints++;
    } else if (winner === "Computer") {
      computerPoints++;
    }
    // display current score
    console.log(`Current score: Player ${playerPoints} - Computer ${computerPoints}`);
  }
  // Check who has more points
  (playerPoints > computerPoints) ? console.log("Congratulations, you won!") : console.log("Too bad, you lost!");
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