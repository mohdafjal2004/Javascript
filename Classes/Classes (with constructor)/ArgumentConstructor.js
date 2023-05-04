//Class with an argument constructor and  methods

class Car {
  constructor(name, color, speed) {
    //properties
    this.name = name;
    this.color = color;
    this.speed = speed;
    this.currentSpeed = 0;
  }

  getCurrentSpeed() {
    return currentSpeed;
  }

  zeroToSixty() {
    setTimeout(() => {
      console.log("That was fast");
      this.currentSpeed = 60;
      console.log(this.currentSpeed);
    }, 3000);
  }

  drive(speed) {
    this.currentSpeed += speed;
    console.log(`Driving at ${this.currentSpeed} kmph`);
  }

  brake() {
    this.currentSpeed -= 10;
    console.log(this.currentSpeed);
    console.log("Brake done");
  }

  stop() {
    this.currentSpeed = 0;
    console.log(this.currentSpeed);
    console.log("Car stopped");
  }
}

const Ferrari = new Car("Ferrari", "red", "250kmph");
// console.log(Ferrari.name);
// console.log(Ferrari.speed);
// console.log(Ferrari.currentSpeed); //0
Ferrari.drive(10); //10
Ferrari.drive(40); //20
Ferrari.drive(20); //30
Ferrari.drive(20); //40
Ferrari.drive(30); //50

const nums = [1, 2, 3, 4, 5];
nums.forEach((_) => Ferrari.drive(10)); //60,70,80,90,100

console.log(Ferrari.currentSpeed);
Ferrari.zeroToSixty();

Ferrari.brake();
Ferrari.stop(); //0
