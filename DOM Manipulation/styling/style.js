//𝗧𝗵𝗶𝘀 𝗳𝗶𝗹𝗲 𝗶𝘀 𝗱𝗲𝗺𝗼𝗻𝘀𝘁𝗿𝗮𝘁𝗶𝗼𝗻 𝗼𝗳 𝗯𝗮𝘀𝗶𝗰 𝘀𝘁𝘆𝗹𝗶𝗻𝗴 𝗼𝗳 𝗛𝗧𝗠𝗟 𝗲𝗹𝗲𝗺𝗲𝗻𝘁𝘀
// 𝗮𝗻𝗱 𝗲𝘃𝗲𝗻𝘁𝘀 𝗵𝗮𝗻𝗱𝗹𝗶𝗻𝗴 𝗶𝗻 𝗷𝘀

let Gettitle = document.getElementById("title");

//changing the color of html element using its id

//Grabbing all the color elements from HTML ⁡⁣⁢⁢using Id ⁡
let redDiv = document.getElementById("redColor");
let yellowDiv = document.getElementById("yellowColor");
let greenDiv = document.getElementById("greenColor");

const red = redDiv.style;
const yellow = yellowDiv.style;
const green = greenDiv.style;

//styling the background of  the color elements
red.backgroundColor = "red";
yellow.backgroundColor = "yellow";
green.backgroundColor = "green";

//Method 1 of logging the content of the color element
redDiv.onclick = () => {
  console.log("You clicked Red");
  //getComputerChoice 👉 ex - "rock"
  //userChoice vs computerChoice 👉 result
  //-1,0,1
  //show everything on the screen(DOM)
};
yellowDiv.onclick = () => {
  console.log("You clicked Yellow");
};
greenDiv.onclick = () => {
  console.log("You clicked Green");
};

//Method 2 of logging the value attribute of the color element
//querySelectorAll() method to select mulitple elements ⁡⁣⁢⁢using class⁡
const squares = document.querySelectorAll(".colorButton");

//After selecting mutliple elements, we use 𝗳𝗼𝗿𝗘𝗮𝗰𝗵 𝗹𝗼𝗼𝗽 for iterating
//over each HTML element using value attribute to log the value attribute
squares.forEach((square) => {
  square.onclick = () => console.log(square.value);
});

//Function for counting the number of clicks on each color element
//and then displaying all the number on the screen
const timesClicked = { red: 0, yellow: 0, green: 0 };
squares.forEach((square) => {
  square.onclick = () => {
    timesClicked[square.value] += 1;
    square.innerText = timesClicked[square.value];
  };
});

//Clearing all the number count
//Grabbing the button
const clearGamesBtn = document.getElementById("clear-game");

//function for clearing the count value to zero
const clearScore = () => {
  squares.forEach((square) => (square.innerText = ""));
};

//Event to handle the button and function
clearGamesBtn.onclick = () => clearScore();
