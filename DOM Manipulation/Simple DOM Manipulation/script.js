console.log("Hello console");

//Grabbing the HTML element from index.html
let Gettitle = document.getElementById("title");

//Getting the text-content of that HTML element in the 𝗰𝗼𝗻𝘀𝗼𝗹𝗲
console.log(Gettitle.innerText);

//Setting the text-content of that HTML element in 𝗗𝗢𝗠
const hello = "Hello Javascript innerHTML";

//innerText example
Gettitle.innerText = hello;
console.log(Gettitle.innerText);

//innerHTML example 
Gettitle.innerHTML = `<h1>${hello}</h1>`;
