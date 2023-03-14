// index.js
import platform from "./img/platform.png"
import smallPlatform from "./img/smallPlatform.png"
import smallPlatform2 from "./img/smallPlatform2.png"

import backgroundImg from "./img/greenSpace.png"
import backgroundImg2 from "./img/greenSpaceF.png"
import objectImg from "./img/object.png"
import objectImg2 from "./img/object2.png"
import Background from "./scripts/background";

import spriteRunLeft from "./img/spriteFireFlowerRunLeft.png"
import spriteRunRight from "./img/spriteFireFlowerRunRight.png"
import spriteStandLeft from "./img/spriteFireFlowerStandLeft.png"
import spriteStandRight from "./img/spriteFireFlowerStandRight.png"
import spriteJumpRight from "./img/spriteFireFlowerJumpRight.png"
import spriteJumpLeft from "./img/spriteFireFlowerJumpLeft.png"

import fullHeart from "./img/fullHeart.png"

import Player from "./scripts/player";
import Enemy from "./scripts/enemy";
import Platform from "./scripts/terrain";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

function createImage(imageSrc) {
  const image = new Image()
  image.src = imageSrc
  return image;
}

function createImageAsync(imageSrc) {
  return new Promise( (resolve) => {
    const image = new Image()
    image.onload = () => {
      resolve(image)
    }
    image.src = imageSrc
  })

}

let platformImage
let platforms = [];

let smallPlatformImage
let smallPlatforms = [];

let backgroundImage
let backgroundImage2
let objectImage
let objectImage2

let backgrounds = [];


let enemies = [
  new Enemy( context, canvas,{position: {x: 1200, y: 100}, velocity: {x: 3, y: 0}, distance: {limit: 400, traveled: 0}} ),
  new Enemy( context, canvas, {position: {x: 2300, y: 100}, velocity: {x: 3.5, y: 0}, distance: {limit: 300, traveled: 0}} )
]

let sprites = {
  stand: {
    right: createImage(spriteStandRight),
    left: createImage(spriteStandLeft),
    cropWidth: 177,
    width: 66
  },
  run: {
    right: createImage(spriteRunRight),
    left: createImage(spriteRunLeft),
    cropWidth: 341,
    width: 127.875
  },
  jump: {
    right: createImage(spriteJumpRight),
    left: createImage(spriteJumpLeft),
    cropWidth: 341,
    width: 127.875
  },
  heart: {
    full: createImage(fullHeart),
  }
}

let timeLeft = 400; // set the total time limit of the game

function drawTimerBar() {
  context.fillStyle = "black";
  const barWidth = 220; // Set the width of the timer bar
  const barHeight = 40; // Set the height of the timer bar
  const barX = (canvas.width - barWidth) / 2; // Calculate the x position of the timer bar
  const barY = 30; // Set the y position of the timer bar
  context.fillRect(barX, 15, barWidth, barHeight); // Draw a black bar

  let timerWidth = (timeLeft / 400) * barWidth; // Calculate the width of the timer bar
  context.fillStyle = "red";
  context.fillRect(barX, 15, timerWidth, barHeight); // Draw the timer bar
  
  context.fillStyle = "white";
  context.font = "30px Arial";
  context.fillText(`Time Left: ${timeLeft}`, barX + 10, barY + 15); // Display the time left on the timer bar
}

const timerId = setInterval(() => {
  timeLeft--;
  if (timeLeft <= 0) {
    clearInterval(timerId);
    // location.reload();
  }
}, 1000); // Run the timer function every 1 second (1000 milliseconds)

let score = 0; // initialize the score to zero
let coins = 0; // initialize the number of coins collected to zero

function drawScore() {
  context.font = "bold 20px Arial";
  context.fillStyle = "white";

  // Draw "Score" text
  context.fillText("Score", 20, 40);

  // Draw "Coins" text
  context.fillText("Coins", 150, 40);

  // Draw score and coins values beneath the words
  context.font = "20px Arial";
  context.fillStyle = "yellow";
  context.fillText(score.toString(), 45, 60);
  context.fillText(coins.toString(), 175, 60);
}

function collectCoin() {
  coins++; // increment the number of coins collected
  score += 100; // add 100 to the score for collecting a coin
}

function updateScore() {
  // update the score based on game logic
  // ...

  drawScore(); // redraw the score display
}


const player = new Player(context, canvas, platforms, backgrounds, sprites, enemies);

async function resetMap() {
  
  platformImage = await createImageAsync(platform);
  smallPlatformImage = await createImageAsync(smallPlatform)

  platforms = [
    new Platform(context, canvas, {x: platformImage.width * 4 + 380 + platformImage.width - smallPlatformImage.width, y: 290, image: smallPlatformImage}),
    new Platform(context, canvas, {x: -1, y: 460, image: platformImage}),
    new Platform(context, canvas, {x: platformImage.width - 3, y: 460, image: platformImage}),
    new Platform(context, canvas, {x: platformImage.width * 2 + 200, y: 460, image: platformImage}),
    new Platform(context, canvas, {x: platformImage.width * 3 + 380, y: 460, image: platformImage}),
    new Platform(context, canvas, {x: platformImage.width * 4 + 380, y: 460, image: platformImage}),
    new Platform(context, canvas, {x: platformImage.width * 5 + 810, y: 460, image: platformImage})
  ];
  
  backgroundImage = await createImageAsync(backgroundImg);
  backgroundImage2 = await createImageAsync(backgroundImg2);
  objectImage = await createImageAsync(objectImg);
  objectImage2 = await createImageAsync(objectImg2);
  
  backgrounds = [
    new Background(context, canvas, { x: 0, y: -98, image: backgroundImage }),
    new Background(context, canvas, { x: 1006, y: -98, image: backgroundImage2 }),
    new Background(context, canvas, { x: 2006, y: -89, image: backgroundImage }),
    new Background(context, canvas, { x: 3006, y: -98, image: backgroundImage2 }),
    new Background(context, canvas, { x: 4006, y: -98, image: backgroundImage }),
    new Background(context, canvas, { x: 5006, y: -98, image: backgroundImage2 }),
    // new Background(context, canvas, { x: -100, y: -70, image: objectImage }),
    new Background(context, canvas, { x: 1600, y: -70, image: objectImage }),
    new Background(context, canvas, { x: 3600, y: -70, image: objectImage }),
    // new Background(context, canvas, { x: 300, y: -30, image: objectImage2 })
  ];

  player.reset();
  player.position = { x: 0, y: 250 }; 
  player.platforms = platforms;
  player.backgrounds = backgrounds;
  enemies.forEach(ele => {
    ele.reset();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  resetMap();
  player.animate();
});

export { resetMap, drawTimerBar, drawScore, collectCoin, updateScore };