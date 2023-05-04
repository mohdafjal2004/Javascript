//Empty Class without constructor
class Person {}


//Here we have not defined constructor,
//so compiler will automatically add an empty construtor called default constructor
let person1 = new Person();
person1.name = "Alice";
person1.age = 30;
console.log(person1.name);
console.log(person1.age);
