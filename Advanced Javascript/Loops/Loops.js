// This file is for demonstration of All Loops types

//for-loops : When you 𝗸𝗻𝗼𝘄 how many times you want to loop
//while loop => when you are 𝗡𝗢𝗧 𝗦𝗨𝗥𝗘 how many times you want to loop

//While loop
let num = 0;

let num2 = 10;
while (num < num2) {
  console.log("While looping", num);
  num++;
}

//𝗜𝗻𝗳𝗶𝗻𝗶𝘁𝗲 𝗹𝗼𝗼𝗽𝗶𝗻𝗴,
// when condition is always true inside the while loop, it will not stop

// let finished = true;
// while (finished == true) {
// console.log("infinite looping");
// }

//Single loop,  when condition is true once becoz inside it is made false
let finished = true;
while (finished == true) {
  console.log("single looping");
  finished = false;
}
