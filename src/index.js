import Player from "./scripts/player";


const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;
context.fillRect(30, 30, canvas.width, canvas.height);


document.addEventListener("DOMContentLoaded", () => {
  const player = new Player(context, canvas);
  player.animate();
});
