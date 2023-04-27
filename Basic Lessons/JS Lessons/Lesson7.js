//This file is for Array & Object Exercises

//Ex-1: Letter counter in the phrase
const letterCounter = (phrase) => {
  //index counter of each letter in the phrase
  let result = 0;
  for (const index in phrase) {
    console.log(Number(index) + 1);
    result = Number(index) + 1;
  }

  return { result };
};

// const phrase = prompt("Write the phrase for counting letters");
// console.log(letterCounter(phrase));

//Ex-2
const cars = ["scorpio", "safari", "nexon", "verna", "XUV700"];
for (const car of cars) {
  console.log(car);
}

//Ex-3 : Create a function that adds all the numbers in the Array

const sumArray = (numbers) => {
  let result = 0;

  //for loop
  for (const num of numbers) {
    result += num;
  }

  return { result };
};

const arr = [1, 2, 3, 4];
console.log(sumArray(arr));

//Ex-4 : Find max element in the array using dynamic function
const max = (numbers) => {
  let result = numbers[0];
  for (const number of numbers) {
    if (number > result) {
      result = number;
    }
  }

  return { result };
};

const arr3 = [1, 2, 3, 4, 5, 144, 646, , -1, 22323, 2, 77];
console.log(max(arr3));

//Ex-5: Calculate frequency of the letter in the phrase
const letterFrequency = (phrase) => {
  console.log(phrase);

  //make a frequency object {}
  let frequency = {};

  for (const letter of phrase) {
    //check if letter exists in the frequency
    //if it exists, increment the value by +1
    //otherwise,set the value to 1
    if (letter in frequency) {
      //fill the object with the properties
      frequency[letter] += 1; // <= It also gives same result
    } else {
      frequency[letter] = 1; // <= It also gives same result
    }
  }
  return frequency;
};
const sentence = "I am the best javascript developer in entire world";
console.log(letterFrequency(sentence));

//Incremental operators
//  ++ , -- , += ,

//Ex-6 Calculate word frequency in the statement/phrase

//Method-1
const wordFrequency = (phrase) => {
  const frequency = {};
  const words = phrase.split(" "); //split method return substring array

  for (const word of words) {
    if (word in frequency) {
      frequency[word] += 1;
    } else {
      frequency[word] = 1;
    }
  }
  console.log(words);
  return frequency;
};
const statement = "Afjal Khan Afjal Khan sonu";
console.log(wordFrequency(statement));

//Method -2
const wordFrequency2 = (phrase) => {
  //Using the letterFrequency function
  const words = phrase.split(" ");
  return letterFrequency(words);
};

const userInput = prompt("Write your sentence");
console.log(wordFrequency2(userInput));
