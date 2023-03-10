import Player from "./scripts/player";
import Platform from "./scripts/terrain";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;
context.fillRect(30, 30, canvas.width, canvas.height);

document.addEventListener("DOMContentLoaded", () => {
  const player = new Player(context, canvas);
  const platform = new Platform(context, canvas)
  platform.draw();
  player.animate();
});
