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