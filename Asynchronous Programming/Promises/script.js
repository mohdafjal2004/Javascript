//This file is for demonstration of Promises(Asynchronous programming)

//Ex of Asynchronous Programmming
//You order 🍅 tomato soup
//Meanwhile you continue your convo with a friend
//Resolved - 🥣 Your server brings you soup
//Rejected - 👎 No soup today

// const orderSoup = () => console.log("soup is ready"); //1
// setTimeout(orderSoup, 2000); //3
// console.log("Still Speaking"); //2

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    isReady = [true, false][Math.floor(Math.random() * 2)];
    isReady ? resolve("Soup is ready 🥣") : reject("No soup today ⛔");
  }, 2000);
});

// Resolving the above promise using .𝘁𝗵𝗲𝗻() 𝗮𝗻𝗱 .𝗰𝗮𝘁𝗰𝗵() 𝗺𝗲𝘁𝗵𝗼𝗱
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
  try {
    const soup = await promise1;
    console.log(soup);
  } catch (error) {
    console.log(error);
  }
};

console.log(getSoup());
