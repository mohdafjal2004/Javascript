let getSuperHero = document.getElementById("getSuperHero");
let heroDetails = document.getElementById("heroDetails");
let heroCharacter = document.getElementById("heroCharacter");
let heroImage = document.getElementById("heroImage");
let searchButton = document.getElementById("searchButton");
let searchInput = document.getElementById("searchInput");

const getRandomSuperHero = (id) => {
  fetch(`https://superheroapi.com/api.php/3432698397000284/${id}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      //Here += is important, becoz without it every property replaces above property
      const name = `<h1>${data.name}</h1>`;
      heroDetails.innerHTML = ` ${name}  <h1>Relatives: </h1> <p>${data.connections.relatives}</p>`;
      heroImage.innerHTML = `<img src=${data.image.url} height="200px" width="200px" ></img>`;

      heroCharacter.innerHTML = `<p>${showStats(data)}</p>`;
    });
};

const randomNo = () => {
  const randomNum = Math.floor(Math.random() * 731) + 1;
  return randomNum;
};

//For event handling(like onClick here) don't use variable in the argument
//But in the case of dynamic function use variable as input which is output of some another function
getSuperHero.onclick = () => getRandomSuperHero(randomNo());

//From here we will be dealing with 2 conecpts
//Handling DOM input with a button and search functionality
const getSearchSuperHero = (name) => {
  fetch(`https://superheroapi.com/api.php/3432698397000284/search/${name}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      //Here += is important, becoz without it every property replaces above property
      const name = `<h1>${data.results[0].name}</h1>`;
      const relatives = `<h1>Relatives: </h1> <p>${data.results[0].connections.relatives}</p>`;
      heroDetails.innerHTML = `${name} ${relatives} <p>${showStats(
        data.results[0]
      )}</p></p>`;
      heroImage.innerHTML = `<img src=${data.results[0].image.url} height="200px" width="200px" ></img>`;
    });
};

searchButton.onclick = () => getSearchSuperHero(searchInput.value);

//Coverting Objects(powerstats) as an array
const showStats = (character) => {
  const stats = Object.keys(character.powerstats).map((stat) => {
    return `<p> ${statToEmoji[stat]} ${stat.toUpperCase()} : ${
      character.powerstats[stat]
    }</p>`;
  });

  return stats.join("");
};

//Converting stats to Emoji
const statToEmoji = {
  intelligence: "🧠",
  strength: "💪",
  speed: "⚡",
  durability: "🏋️",
  power: "🦸",
  combat: "⚔️",
};
