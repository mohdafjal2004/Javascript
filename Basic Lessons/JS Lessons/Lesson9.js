//This file is for randomly getting an item from the array

const fruits = ["apple", "banana", "grape", "papaya", "orange"];

const randomFruit = (fruits) => {
  const randomNumber = Math.floor(Math.random() * fruits.length);
  console.log(randomNumber);

  const result = fruits[randomNumber];
  return result;
};
console.log(randomFruit(fruits));



