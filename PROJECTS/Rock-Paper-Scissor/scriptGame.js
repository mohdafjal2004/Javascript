//Get the HTML element content
const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");
const computerChoiceDiv = document.getElementById("computerChoice");
const userChoiceDiv = document.getElementById("userChoice");

//Declaring variables outside is very important,as it used while playing
//Becoz it takes the choice from user and computer and then it updates the DOM
//After updating the DOM we take the value and compare in getResult()

let computerChoice;
let userChoice;

//Get the computer input as random input
// and it should only work on clicking the button in userPlay() function
const computerPlay = () => {
  const random = Math.floor(Math.random() * buttons.length);
  computerChoice = buttons[random].innerText;
  computerChoiceDiv.innerHTML = `<div> Computer Choice ${computerChoice}</div>`;
  return computerChoice;
};

//On clicking the button and updating the DOM with user choice,
// then only we should get random choice from computer
//from computerPlay() function and then only comparison should be made in getResult()
//user-choice function
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
userPlay();

//"let" Variables declared above will now be used for comparing and outputing the result
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
