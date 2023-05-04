let depositBtn = document.getElementById("deposit");
let withDrawBtn = document.getElementById("withdraw");
let balanceDiv = document.getElementById("balance");
let amountInput = document.getElementById("amount");

//This file is for practicing the class with methods with constructor
class Bank {
  constructor(balance) {
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (this.balance > 0) {
      this.balance -= amount;
    } else {
      console.log("You cannot withdraw");
    }
  }
}

let Sbi = new Bank(100);

console.log(Sbi.balance);

//After deposit
// Sbi.deposit(200);
console.log(Sbi.balance);

//After Withdraw
// Sbi.withdraw(200);
// Sbi.withdraw(200);
console.log(Sbi.balance);

depositBtn.onclick = () => {
  Sbi.deposit(Number(amountInput.value));
  balanceDiv.innerText = Sbi.balance;
  console.log(amountInput.value);
};

withDrawBtn.onclick = () => {
  Sbi.withdraw(Number(amountInput.value));
  balanceDiv.innerText = Sbi.balance;
  console.log(amountInput.value);
};
