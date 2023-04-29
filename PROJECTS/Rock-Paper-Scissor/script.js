//This file is for demonstraion of using the output of 1 function and using that output into another function

console.log("Hello");

let rock = "🪨";
let scissor = "✂️";
let paper = "📄";
let arr = [rock, paper, scissor];

//We want the output from ComputerChoice() and UserChoice() function
const ComputerChoice = (array) => {
  let random = Math.floor(Math.random() * array.length);
  return arr[random];
};

const computer = ComputerChoice(arr);
console.log(computer);

const UserChoice = () => {
  const userChoice = prompt("What is your winning input?");
  return userChoice;
};

const user = UserChoice();
console.log(user);

// So for getting the output of above function, we first declare a variable and put the function in that variable
//and now that variable can be used to get access of both of above function

const PlayGame = (computer, user) => {
  if (computer === user) {
    console.log("Match draw");
  } else if (user === "📄" && computer === "🪨") {
    console.log("You wins");
  } else if (user === "🪨" && computer === "✂️") {
    console.log("You wins");
  } else if (user === "✂️" && computer === "📄") {
    console.log("You wins");
  } else {
    console.log("You lose");
  }
};

//Make sure to put the above variable while calling the main function which is using these variables
PlayGame(computer, user);
