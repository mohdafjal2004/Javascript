//This file is for custom javascript methods
// made using classes with methods and objects

//Remember here Array is an class, prototype is used for accessing its methods
//and also used for assigning new methods

//And any array we are creating will be object of the Array class

//1.Push Method
Array.prototype.myPushMethod = function (item) {
  this[this.length] = item; // this = fruits = ["🍌", "🍓", "🍪"];
  return this;
};
const fruits = ["🍌", "🍓", "🍪"];

fruits.myPushMethod("🍎");
fruits.myPushMethod("🍫");
fruits.myPushMethod("🍇");
fruits.myPushMethod("🍐");
// console.log(fruits);

//2. Object as its own class and accessing its own method
Object.prototype.myKeysMethod = function (hello) {
  console.log("Hi I am a method inside the Object Class");
  return hello;
};

//actor is object
actor = { name: "Leo", age: 37, netWorth: "$ 1M" };
console.log(actor.myKeysMethod("hello"));
