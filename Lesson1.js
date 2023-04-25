//Introduction file to js

console.log("Hello World");

//Variables
name = "Afjal";
console.log(name);

//User Input = prompt() for input and alert() is for output
// fruit = prompt("What is your favourite fruit");
// console.log(fruit);

food = Number(prompt("Enter food quantity"));
tipPercentage = Number(prompt("Enter Tip percentage")) / 100;
tipAmount = food * tipPercentage;

console.log("Tip Amount", tipAmount);
TotalBill = food + tipAmount;
console.log("Total Bill", TotalBill);
// alert(tipAmount);x
