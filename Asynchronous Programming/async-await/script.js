console.log("Hello async-await");

//Rules for using async-await function
//1. You must create a function
//2. You must use the async keyword before that function
//3. Use the await keyword for the promise for whom you want the function
//execution should paused till the promise returns some value

// Ex-1
const getDog = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json(); //returns Promise
  console.log(data);
};

// getDog();

//Ex-2
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    isReady = [true, false][Math.floor(Math.random() * 2)];
    isReady ? resolve("Soup is ready 🥣") : reject("No soup today ⛔");
  }, 2000);
});

// Resolving the above promise𝟭 using .𝘁𝗵𝗲𝗻() 𝗮𝗻𝗱 .𝗰𝗮𝘁𝗰𝗵() 𝗺𝗲𝘁𝗵𝗼𝗱
console.log(
  promise1
    .then((success) => console.log({ success }))
    .catch((err) => console.log({ err }))
);

//Resolving the above promise using 𝗮𝘀𝘆𝗻𝗰 𝗮𝘄𝗮𝗶𝘁 method
//⁡⁢⁣Remember to use try catch while using async-await

//𝗥𝗘𝗦𝗢𝗟𝗩𝗘𝗗 - if waiter brings you soup
//tip the waiter⁡
//you pay for soup

//𝗥𝗘𝗝𝗘𝗖𝗧𝗘𝗗 - leave a bad review, no tip

const getSoup = async () => {
  const data = { rating: 0, tip: 0, pay: 0, review: 0 };

  try {
    const soup = await promise1;
    data.rating = 5;
    data.tip = 0.2;
    data.pay = 10;
    data.review = 5;
    console.log(soup);

    return data;
  } catch (error) {
    data.tip = 0;
    data.tip = 0;
    data.pay = 0;
    data.review = 1;
    console.log(error);
    console.log("This restaurent is worse");
 
    return data;
  }
};

//Since getSoup() returns a promise, we used  .then() to resolve this promise,
// we can also use the async await to do so
getSoup().then((value) => console.log(value));

//𝗘𝘅-𝟯 E𝘅𝘁𝗿𝗮𝗰𝘁𝗶𝗻𝗴 𝘁𝗵𝗲 𝘃𝗮𝗹𝘂𝗲 𝗼𝗳 𝗮𝘀𝘆𝗻𝗰𝗵𝗿𝗼𝗻𝗼𝘂𝘀 𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻
const sum = async (a, b) => a + b;
console.log(sum(1, 2).then((data) => console.log(data)));
const sum1 = async