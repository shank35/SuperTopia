import Player from "./scripts/player";


const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.addEventListener("DOMContentLoaded", () => {
  const player = new Player(context, canvas);
  player.animate();
})
