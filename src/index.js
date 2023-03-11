// index.js

import Player from "./scripts/player";
import Platform from "./scripts/terrain";

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");

  canvas.width = 800;
  canvas.height = 600;

  
  const platforms = [
    new Platform(context, canvas, 
    {x: 200, y: 100}),
    new Platform(context, canvas,
      {x: 500, y: 200})
  ];
  const player = new Player(context, canvas, platforms);
  player.animate();

});
