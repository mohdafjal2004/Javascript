let dogImageDiv = document.getElementById("dogImage");
let getButtonDiv = document.getElementById("getImg");

const imgDog = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      dogImageDiv.innerHTML = `<img src=${data.message} height="200px" width="200px" ></img>`;
    });
};

//Only on clicking the button then only we should fetch some data
getButtonDiv.onclick = () => imgDog();
