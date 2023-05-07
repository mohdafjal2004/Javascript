//Fight Game using classes with its constructors and methods
// and also using functions and event handling

let Health1 = document.getElementById("Health1");
let Health2 = document.getElementById("Health2");
let Heal1 = document.getElementById("Heal1");
let Heal2 = document.getElementById("Heal2");
let resultDiv = document.getElementById("result");
let p1NameDiv = document.getElementById("p1");
let p2NameDiv = document.getElementById("p2");

//sounds
let victory = document.getElementById("victory");
let punch = document.getElementById("punch");
let healSound = document.getElementById("healSound");

//* Class - 1
//Create a Player class which can create a player with all it's attributes
// and methods
class Player {
  constructor(name, health, attackDamage) {
    this.name = name;
    this.health = health;
    this.attackDmg = attackDamage;
  }
  //Attack an enemy with a random number from 0 to YOUR attack bonus
  strike(player, enemy, attackDmg) {
    //Get the random number between 1-10 and that is damageAmount
    let damageAmount = Math.ceil(Math.random() * attackDmg);

    //Substact the enemy health with the damageAmount
    enemy.health -= damageAmount;

    //Update the game and DOM with updateGame()
    updateGame(p1, p2, game.isOver);

    //Return a message of player name attack enemy name for damageAmount
    return `${player.name} attacks ${enemy.name} for ${damageAmount}`;
  }

  // Heal the player for random number from 1 to 5
  heal(player) {
    let hpAmount = Math.ceil(Math.random() * 5);

    //Add hpAmount to players health
    player.health += hpAmount;

    //Update thr game and DOM with updateGame()
    updateGame(player, p2, game.isOver);

    //Return a message of "player name heals for hpAmount HP"
    return `${player.name} heals for ${hpAmount} HP`;
  }
}

//Create 2 players using the player class
let Player1 = new Player("Player1", 100, 10);
let Player2 = new Player("Player2", 100, 10);

//* Class - 2
//Create a Game Class with all it's attributes and methods to run a match
class Game {
  constructor() {
    this.isOver = false;
  }

  // if the game is over and a player has 0 health declare the winner
  declareWinner(isOver, p1, p2) {
    //Create a message variable that will hold a message based on the conditon
    let message;

    //If isOver is true and p1 health is <= 0 then update message variable to
    //'p2 WINS'
    if (isOver == true && p1.health <= 0) {
      message = `${p2.name} WINS`;

      //If isOver is true and p2 health is <= 0 then update message variable to
      //'p1 WINS
    } else if (isOver == true && p2.health <= 0) {
      message = `${p1.name} WINS`;
    }

    //Play the victory sound
    victory.play();

    //Return the message variable
    return message;
  }

  
  reset(p1, p2) {
    p1.health = 100;
    p2.health = 100;
    this.isOver = false;
    resultDiv.innerText = "";
    updateGame(p1, p2, this.isOver);
  }

  play(p1, p2) {}
}

//Create a game object using the Game class
let game = new Game();

//Save the original Player Data into a varibale in order to reset
let p1 = Player1;
let p2 = Player2;

//* Classes and Object creation ends here
//* From here function here and event handling starts

//𝗔 𝗙𝘂𝗻𝗰𝘁𝗶𝗼𝗻 which Checks if either players health is 0 and if it is,
//then update "𝗶𝘀𝗢𝘃𝗲𝗿" to true
const updateGame = (p1, p2, gameState) => {
  //Player1 == p1
  //Player2 == p2
  p1NameDiv.innerText = p1.name;
  p2NameDiv.innerText = p2.name;
  Health1.innerText = p1.health;
  Health2.innerText = p2.health;

  //Condition IF either player health is <= 0 then set isOver to true and decakreWinner()
  if (p1.health <= 0 || p2.health <= 0) {
    game.isOver = true;
    gameState = game.isOver;
    result.innerText = game.declareWinner(game.isOver, p1, p2);
    return gameState;
  }
};
updateGame(p1, p2, game.isOver);

//Add functionality where players can press a button to attack OR heal

// Player 1 Controls
// Player 1 attacks
document.addEventListener("keydown", function (e) {
  //if you press "l" and player health is greater then 0 means game is still not over yet
  //that is "isOver" is still false then heal()

  if (e.key == "q" && p2.health > 0 && game.isOver == false) {
    // After striking then play the attack sound
    p1.strike(p1, p2, p1.attackDmg);
    punch.play();
  }
});

//Player 1 heals himself
document.addEventListener("keydown", function (e) {
  //if you press "l" and player health is greater then 0 means game is still not over yet
  //that is "isOver" is still false then heal()
  if (e.key == "a" && p2.health > 0) {
    //After healing then play heals sound
    p1.heal(p1);
    healSound.play();
  }
});

// Player 2 Controls
//Player 2 attacks
document.addEventListener("keydown", function (e) {
  //if you press "l" and player health is greater then 0 means game is still not over yet
  //that is "isOver" is still false then heal()

  if (e.key == "p" && p1.health > 0 && game.isOver == false) {
    // After striking then play the attack sound
    p2.strike(p2, p1, p2.attackDmg);
    punch.play();
  }
});

//Player 2 heals himself
document.addEventListener("keydown", function (e) {
  //if you press "l" and player health is greater then 0 means game is still not over yet
  //that is "isOver" is still false then heal()
  if (e.key == "l" && p1.health > 0) {
    //After healing then play heals sound
    p2.heal(p2);
    healSound.play();
  }
});
