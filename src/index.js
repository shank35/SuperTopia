// index.js
import platform from "./img/platform.png"
console.log(platform);
import Player from "./scripts/player";
import Platform from "./scripts/terrain";

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");

  canvas.width = 1024;
  canvas.height = 576;

  const image = new Image()
  image.src = platform
  console.log(image)
  const platforms = [
    new Platform(context, canvas, 
    {x: -1, y: 410, image: image}),
    new Platform(context, canvas,
      {x: image.width - 2, y: 410, image: image})
  ];
  const player = new Player(context, canvas, platforms);
  player.animate();

});
