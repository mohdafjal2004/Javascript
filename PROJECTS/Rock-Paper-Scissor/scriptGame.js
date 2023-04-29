//Get the HTML element content
const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");
const computerChoiceDiv = document.getElementById("computerChoice");
const userChoiceDiv = document.getElementById("userChoice");

//Declaring variables outside is very important
let computerChoice;
let userChoice;

//Get the computer input as random number input
const computerPlay = () => {
  const random = Math.floor(Math.random() * buttons.length);
  computerChoice = buttons[random].innerText;
  computerChoiceDiv.innerHTML = `<div> Computer Choice ${computerChoice}</div>`;
  return computerChoice;
};

//user-choice
const userPlay = () => {
  buttons.forEach(
    (btn) =>
      (btn.onclick = () => {
        userChoice = btn.innerText;
        userChoiceDiv.innerHTML = `<div> User Choice ${userChoice}</div>`;
        computerPlay();
        getResult();
      })
  );
};
let user = userPlay();

const getResult = () => {
  if (userChoice === computerChoice) {
    result.innerHTML = " <h1>Result: Its a draw 🤷</h1>  <p>Keep Going</p>";
  } else if (userChoice === "✊" && computerChoice === "📄") {
    result.innerHTML =
      "<h1> Result: Computer win 🤦</h1> <p>You are Pathetic </p>";
  } else if (userChoice === "📄" && computerChoice === "✂️") {
    result.innerHTML =
      "<h1> Result: Computer win 🤦</h1> <p>You are Pathetic </p>";
  } else if (userChoice === "✂️" && computerChoice === "✊") {
    result.innerHTML =
      "<h1>Result: Computer wins </h1> You are Pathetic       ";
  } else {
    result.innerHTML = "<h1>Result: You wins  🫵</h1> Celebrate";
  }
};

//Reset the game
const reset = () => {
  userChoiceDiv.innerHTML = " ";
  computerChoiceDiv.innerHTML = " ";
  result.innerHTML = " ";
};
