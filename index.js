const button = document.querySelectorAll(".drum");

button.forEach((item, index) =>
  item.addEventListener("click", function () {
    let buttonInnerHtml = item.innerHTML;
    console.log(buttonInnerHtml);
    animation(buttonInnerHtml);
    MakeSound(buttonInnerHtml);
  })
);

document.addEventListener("keypress", function (e) {
  let pressKey = e.key;
  MakeSound(pressKey);
  animation(pressKey);
});

function animation(key) {
  const activeK = document.querySelector("." + key);
  if (activeK) {
    activeK.classList.add("pressed");
    setTimeout(() => {
      activeK.classList.remove("pressed");
    }, 100);
  }
}

function MakeSound(params) {
  let audio = new Audio();
  // mouse press
  switch (params) {
    case "w":
      audio.setAttribute("src", "sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      audio.setAttribute("src", "sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      audio.setAttribute("src", "sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      audio.setAttribute("src", "sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      audio.setAttribute("src", "sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      audio.setAttribute("src", "sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      audio.setAttribute("src", "sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      break;
  }
}
