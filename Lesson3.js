//This file is for demonstration of functions/methods

//1. simple function with no paramters
function MyName() {
  console.log("My name is Afjal");
}

//Calling the simple function with no arguments
MyName();

//2. Dynamic function with an parameter in the definiton
function sayMyName(name) {
  console.log("Hello " + name);
}

//Calling the dynamic function with an argument
sayMyName("Afjal");
sayMyName("Sonu");
sayMyName("Khan");

//3. Dynamic function with a parameter and using template literal using backtags
function sayMyName(name) {
  console.log(`Hello ${name}`);
}

sayMyName("Afjal Bro");

//4. function for addition of two numbers with  a return statement
function sum(a, b) {
  return a + b;
}

//Calling the function with a return statement by assigning the function a variable
const add = sum(19, 5);
console.log(add);

// 5. Total calculator on food using a function with a return statement
function calculateFoodTotal(food, tip) {
  tipPercentage = tip / 100;
  tipAmount = food * tipPercentage;

  TotalBill = food + tipAmount;
  return TotalBill;
}

const calculate = calculateFoodTotal(100, 20);
console.log(calculate);
