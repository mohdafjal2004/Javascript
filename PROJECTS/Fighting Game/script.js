//Fight game by simply using just 𝗲𝘃𝗲𝗻𝘁𝗛𝗮𝗻𝗱𝗹𝗶𝗻𝗴

let Health1 = document.getElementById("Health1");
let Heal1 = document.getElementById("Heal1");
let Health2 = document.getElementById("Health2");
let Heal2 = document.getElementById("Heal2");
let result = document.getElementById("result");

//sounds
let victory = document.getElementById("victory");
let punch = document.getElementById("punch");
let healSound = document.getElementById("healSound");

//players Health
let Player1health = 10;
let Player2health = 10;

//Player Health
Health1.innerHTML += `<p>${Player1health}</p>`;

//Player1 attacks
let attack1 = document.getElementById("attack1");

document.addEventListener("keydown", function (e) {
  if (e.key == "q") {
    punch.play();
    Player2health -= 1;
    if (Player2health >= 0) {
      Health2.innerHTML = Player2health;
      if (Player2health == 0 && Player1health != 0) {
        result.innerText = "Player 1 wins";
        victory.play();
      }
    }
  }
});

//Player1 Heals
document.addEventListener("keydown", function (e) {
  if (e.key == "a") {
    if (Player1health < 10) {
      Player1health = 10;
      Health1.innerHTML = Player1health;
      healSound.play();
    }
  }
});

//Player2 Health
Health2.innerHTML += `<p>${Player2health}</p>`;

//Player2 attacks
let attack2 = document.getElementById("attack2");
document.addEventListener("keydown", function (e) {
  if (e.key == "p") {
    punch.play();
    Player1health -= 1;
    if (Player1health >= 0) {
      Health1.innerHTML = Player1health;
      if (Player1health <= 0 && Player2health != 0) {
        result.innerText = "Player 2 wins!!! ";
        victory.play();
      }
    }
  }
});

//Player2 Heals
document.addEventListener("keydown", function (e) {
  if (e.key == "l") {
    if (Player2health < 10) {
      Player2health = 10;
      Health2.innerHTML = Player2health;
      healSound.play();
    }
  }
});

let reset = document.getElementById("reset");
reset.onclick = () => {
  Player1health = 10;
  Health1.innerHTML = Player1health;

  Player2health = 10;
  Health2.innerHTML = Player2health;
  Health1.innerHTML = Player1health;
  healSound.play();

  result.innerText = " ";
};
