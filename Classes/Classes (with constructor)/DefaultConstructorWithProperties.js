//CLass with properties outside the constuctor(instance variable) and inside the constructor

//Remember all the values of the properties inside the class(whether outside or inside the constructor) are considered default
//So when creating object we can use our own desirable value of the properties defined the class

class Car {
  name = "Lambo";
  constructor() {
    this.model = "1999";
    this.color = "white";
  }
}

let Ferrari = new Car();
Ferrari.name = "Ferrari";
Ferrari.model = "2023";
Ferrari.color = "red";

console.log(Ferrari.name);
console.log(Ferrari.model);
console.log(Ferrari.color);