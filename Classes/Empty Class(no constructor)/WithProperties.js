//Class with no constructor but with  properties
//All values the class are default (whether inside the constructor or outside the constructor)
//So when creating the object we can use our own value of the property defined in the class
class Car {
  name = "Lambo";
  year = "1999";
  color = "red";
}

//Here also since we have not defined any constructor in class,
//so compiler will add an empty constructor called default constructor
let ferrari = new Car();
//Here the name is already declared, but still we can use our name
ferrari.name="Ferrari";
ferrari.year;
ferrari.color;
console.log(ferrari.name);
console.log(ferrari.year);
console.log(ferrari.color);
