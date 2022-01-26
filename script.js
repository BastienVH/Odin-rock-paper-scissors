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

const computerSelection = computerPlay();
const playerSelection = "Rock";

function playRound(playerSelection, computerSelection) {
  // if playerSelection === computerSelection, return that game ended in a tie
  if (playerSelection === computerSelection) {
    return(`It's a tie, you both played ${playerSelection}!`)
  } else if ((playerSelection === "Rock" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Scissors") || (playerSelection === "Scissors" && computerSelection === "Rock")) {
    return(`You lose! ${computerSelection} beats ${playerSelection}.`);
  } else {
    return(`You won! ${playerSelection} beats ${computerSelection}.`);
  }
}

function convertToCapitalCase(string) {
  // convert string to all lowercase
  // store length of string in variable
  // put first letter.toUpperCase in new variable
  // return firstletter-capitalized concattenated with string in lowercase starting from the second character to the end
}