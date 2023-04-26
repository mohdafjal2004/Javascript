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

//4. function for addition of two parameters with  a return statement
function sum(a, b) {
  return a + b;
}

//Calling the function with a return statement by assigning the function a variable
const add = sum(19, 5);
console.log(add);

// 5. Another example of a function with a return statement i.e Total calculator on food
function calculateFoodTotal(food, tip) {
  const tipPercentage = tip / 100;
  const tipAmount = food * tipPercentage;

  const TotalBill = food + tipAmount;
  return TotalBill;
}

const total = calculateFoodTotal(500, 10);
console.log(total);

// 6. Arrow function with explicit return
const sumArrow = (a, b) => {
  return a + b;
};
const sum1 = sumArrow(1,2)
console.log(sum1)


//Another way of writing the above arrow function with implicit return
//Arrow function with implicit return
const sumArrow2 = (a, b) => a + b;
const sum2 = sumArrow2(2,3);
console.log(sum2)

