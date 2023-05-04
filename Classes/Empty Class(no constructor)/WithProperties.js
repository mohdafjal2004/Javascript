//Class with no constructor but with  properties
class Car {
  name;
  year;
  color;
}

//Here also since we have not defined any constructor in class,
//so compiler will add an empty constructor called default constructor
let ferrari = new Car();
ferrari.name = "Ferrari";
ferrari.year = "1999";
ferrari.color = "red";
console.log(ferrari.name);
console.log(ferrari.year);
console.log(ferrari.color);
