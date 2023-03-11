// index.js

import Player from "./scripts/player";
import Platform from "./scripts/terrain";

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");

  canvas.width = 800;
  canvas.height = 600;

  // const platform = new Platform(this.context, this.canvas);
  const platform = new Platform(context, canvas);
  const player = new Player(context, canvas, platform);
  player.animate();

});
