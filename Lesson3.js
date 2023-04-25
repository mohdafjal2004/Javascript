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

//Calling the function using 2 arguments
sum(3, 5);
