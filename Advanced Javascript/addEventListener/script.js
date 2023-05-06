//This file is for eventListener like click and tracking keys
let playDiv = document.getElementById("play");

playDiv.onclick = () => {
  console.log("Clicked");
};

//addEventListener
playDiv.addEventListener("click", function () {
  console.log("Clicked from event listener");
});

//𝗧𝗿𝗮𝗰𝗸𝗶𝗻𝗴 𝘁𝗵𝗲 𝗸𝗲𝘆𝘀 𝘂𝘀𝗶𝗻𝗴 𝗮𝗱𝗱𝗘𝘃𝗲𝗻𝘁𝗟𝗶𝘀𝘁𝗲𝗻𝗲𝗿()
//e is like 𝗸𝗲𝘆𝗯𝗼𝗮𝗿𝗱 𝗲𝘃𝗲𝗻𝘁 when using "keydown" event
document.addEventListener("keydown", function (e) {
  console.log("HI");
});

//𝗧𝗿𝗮𝗰𝗸𝗶𝗻𝗴 𝗼𝗻𝗹𝘆 𝗮 𝘀𝗽𝗲𝗰𝗶𝗳𝗶𝗲𝗱 𝗸𝗲𝘆, 𝗵𝗲𝗿𝗲 𝗶𝘁 𝗶𝘀 "𝗾"
document.addEventListener("keydown", function (e) {
  if (e.key == "q") {
    console.log("Q pressed");
    //Handling audio tag (HTML element)
    document.getElementById("punch").play();

  } else {
    console.log("Q not pressed");
     document.getElementById("victory").play();
  }
});

 