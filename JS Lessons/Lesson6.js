//This file is for for-loops demonstartion

const fruits = ["🍌", "🍎", "🍊", "🍐"];

//Printing every single fruit in fruits array
//⁡⁢⁣⁢Not recommended method⁡ for printing all the elements inside the array
for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);
}

//If needed  for-loops, use this method ✔️
for (const fruit of fruits) {
  console.log(fruit);
}

//Another example for printing all the array elements
// const numbers = [1, 2, 3, 4, 5, 6];

//A dynamic function which takes the array as an argument and doubles each element of it
const double = (numbers) => {
  let result = [];
  for (const number of numbers) {
    result.push(number * 2);
  }

  return result;
};

//Getting the double of each element in the array
console.log(double([1, 2, 3, 4, 5, 6]));
