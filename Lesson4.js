// This file is for array demonstration purpose

groceries = ["🍌", "🍎", "🍊", "🍐"];
// console.log(groceries);
// console.log(groceries[0]);
// console.log(groceries[1]);
// console.log(groceries[2]);
// console.log(groceries[3]);

//Array methods
 
//Push() method : Adding element at the end of the array
groceries.push("🍉");
console.log("Push Method " + groceries);

//Slice() method: Returns the portion of the array you want in a new array
console.log("Slice Method " + groceries.slice(0, 2));


//indexOf() method :  Returns the index number as result
console.log(groceries.indexOf("🍊")) //2

//Length
console.log(groceries.length);