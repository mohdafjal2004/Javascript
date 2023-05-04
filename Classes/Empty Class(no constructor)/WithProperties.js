//Class with no constructor but with  properties

class Car {
  name = "Lambo";
  year = "1999";
  color = "red";
}

//Here also since we have not defined any constructor in class,
//so compiler will add an empty constructor called default constructor
let ferrari = new Car();
ferrari.name;
ferrari.year;
ferrari.color;
console.log(ferrari.name);
console.log(ferrari.year);
console.log(ferrari.color);
