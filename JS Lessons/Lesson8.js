//This file is for demonstration of Higher Order functions(HOF)
//HOF are Array methods like map(), filter() and reduce()

//Map() method : loops and returns an array
//Implict return for doubling numbers using Map() method

const arr = [1, 2, 3, 4];
const double = arr.map((number) => number * 2);
console.log(double);

//Dynamic function for doubling the number of the elements of the array
const doubleMap = (numbers) => {
  return numbers.map((number) => number * 2);
};
console.log(doubleMap([1, 2, 3]));

//Filter() method : loops and returns an array with matching conditions
//Ex-1: A dynamic function for filtering the numbers in array which are greater than 3
// filterArray([1, 2, 3, 4, 5, 6], 3);
const filterArray = (numbers, greaterThan) => {
  const filtered = numbers.filter((number) => number > greaterThan);
  return filtered;
};
console.log(filterArray([1, 2, 3, 4, 5, 6], 3));

//Ex-2:  filter() method
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(nums.filter((num) => num > 4 || num < 2));

//Ex-3
const actors = [
  { name: "johnny", netWorth: 20 },
  { name: "amber", netWorth: 10 },
  { name: "leonardo", netWorth: 30 },
  { name: "bradd", netWorth: 50 },
];
const filterActor = actors.filter((actor) => actor.netWorth > 10);
const result = filterActor.map((actor) => actor.name).join(" , ");

//Creating a HTML tag in js
const myDiv = document.createElement("div");
myDiv.innerHTML = `${result}`;
document.body.appendChild(myDiv);

//Reduce() method : reduce loops and gives you back the accumulator
//Add all the elements of the array
const array1 = [1, 2, 3, 4, 5];
const final = array1.reduce((a, b) => a + b);
console.log(final);

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Reduce() method with sum() function
const sum = (a, b) => a + b;
const finalSum = array2.reduce(sum);
console.log(finalSum);

//Reduce() method with multiply() function
const multiply = (a, b) => a * b;
const finalMultiply = array2.reduce(multiply);
console.log(finalMultiply);

//Using Reduce() method, create a function that sums all the all the net worths of celebrities
const sumOfWealth = () => {
  const actorsWealth = actors.map((actor) => actor.netWorth);
  console.log(actorsWealth);

  const sumAll = actorsWealth.reduce(sum)
  console.log(sumAll)
};
console.log(sumOfWealth());
