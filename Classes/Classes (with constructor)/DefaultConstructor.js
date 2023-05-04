//Class with a default constructor which has no argument

class Employee {
  //No parameter so we can call this constructor as 𝗱𝗲𝗳𝗮𝘂𝗹𝘁 𝗰𝗼𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗼𝗿
  constructor() {
    //All values defined in this constructor are also default
    this.name = "Mohd Afjal";
    this.salary = "$100,000";
  }
}

let Afjal = new Employee();
//𝗪𝗲 𝗮𝗿𝗲 𝘀𝗼𝗺𝗲 𝗱𝗲𝗳𝗶𝗻𝗶𝗻𝗴 𝘀𝗼𝗺𝗲 𝘃𝗮𝗹𝘂𝗲 of the property inside the object,
//So value of the 𝗽𝗿𝗼𝗽𝗲𝗿𝘁𝘆 𝗶𝗻𝘀𝗶𝗱𝗲 𝘁𝗵𝗲 𝗼𝗯𝗷𝗲𝗰𝘁 will run
Afjal.name = "Sonu";
console.log(Afjal.name); //Output = Sonu
console.log(Afjal.salary);

//But in case 𝗶𝗳 𝘄𝗲 𝗱𝗼𝗻'𝘁 𝗱𝗲𝗳𝗶𝗻𝗲 𝗮𝗻𝘆 𝘃𝗮𝗹𝘂𝗲 of the property inside the object,
//then default value of the 𝗽𝗿𝗼𝗽𝗲𝗿𝘁𝘆 𝗶𝗻𝘀𝗶𝗱𝗲 𝘁𝗵𝗲 𝗱𝗲𝗳𝗮𝘂𝗹𝘁 𝗰𝗼𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗼𝗿 will run

// let Afjal = new Employee();
// console.log(Afjal.name);//𝗢𝘂𝘁𝗽𝘂𝘁= 𝗠𝗼𝗵𝗱.𝗔𝗳𝗷𝗮𝗹
