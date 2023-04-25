//This file is for demonstration of Objects {}
//key: value pair
const person = {
  name: "Mohd Afjal",
  shirt: "white",
};

//accessing the properties:dot notation vs bracket notation
//1. dot notation
console.log(person.name);
console.log(person.shirt);

//2. bracket notation
console.log(person["name"]);
console.log(person["shirt"]);

//assign new property to the object
person.phone = "89238928332";
console.log(person.phone);
console.log(person);

//Object in dynamic function, passing the arguments and using them in the person object
const introducer = (name, shirt) => {
  const person = {
    name: name,
    shirt: shirt,
    assets: 1000000,
    liabilities: 5000,
    netWorth: function () {
      return this.assets - this.liabilities;
    },
  };

  const intro = `Hi my name is ${person.name} and color of my shirt is ${person.shirt} and my net-worth is $${person.netWorth()} USD`;
  return intro;
};

console.log(introducer("Mohd Afjal", "black"));
