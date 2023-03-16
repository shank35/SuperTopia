// index.js
import platform from "./img/platform.png"
import smallPlatform from "./img/smallPlatform.png"

import backgroundImg from "./img/greenSpace.png"
import backgroundImg2 from "./img/greenSpaceF.png"
import objectImg from "./img/object.png"
import objectImg2 from "./img/greenMario.png"
import objectImg3 from "./img/luigi.png"
import objectImg4 from "./img/greenToad.png"
import Background from "./scripts/background";

import block from "./img/block.png"
import blockTri from "./img/blockTri.png"

import pole from "./img/flagPole.png"

import spriteRunLeft from "./img/spriteRunLeft.png"
import spriteRunRight from "./img/spriteRunRight.png"
import spriteStandLeft from "./img/spriteStandLeft.png"
import spriteStandRight from "./img/spriteStandRight.png"
import spriteJumpRight from "./img/spriteJumpRight.png"
import spriteJumpLeft from "./img/spriteJumpLeft.png"

import spriteFireFlowerRunLeft from "./img/spriteFireFlowerRunLeft.png"
import spriteFireFlowerRunRight from "./img/spriteFireFlowerRunRight.png"
import spriteFireFlowerStandLeft from "./img/spriteFireFlowerStandLeft.png"
import spriteFireFlowerStandRight from "./img/spriteFireFlowerStandRight.png"
import spriteFireFlowerJumpRight from "./img/spriteFireFlowerJumpRight.png"
import spriteFireFlowerJumpLeft from "./img/spriteFireFlowerJumpLeft.png"

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

let blockImage
let blockTriImage

let smallPlatformImage

let backgroundImage
let backgroundImage2
let objectImage
let objectImage2
let objectImage3
let objectImage4

let backgrounds = [];


let enemies = [
  new Enemy( context, canvas,{position: {x: 1200, y: 100}, velocity: {x: 3, y: 0}, distance: {limit: 400, traveled: 0}}),
  new Enemy( context, canvas, {position: {x: 2300, y: 100}, velocity: {x: 3.5, y: 0}, distance: {limit: 300, traveled: 0}}),
  new Enemy( context, canvas,{position: {x: 4000, y: 100}, velocity: {x: 3, y: 0}, distance: {limit: 800, traveled: 0}}),
  new Enemy( context, canvas,{position: {x: 6350, y: 100}, velocity: {x: 3, y: 0}, distance: {limit: 500, traveled: 0}}),
  new Enemy( context, canvas,{position: {x: 7850, y: 100}, velocity: {x: 3, y: 0}, distance: {limit: 300, traveled: 0}}),
  new Enemy( context, canvas,{position: {x: 10450, y: 100}, velocity: {x: 3, y: 0}, distance: {limit: 400, traveled: 0}}),
  new Enemy( context, canvas,{position: {x: 12020, y: 100}, velocity: {x: 3, y: 0}, distance: {limit: 300, traveled: 0}})
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
    cropWidth: 340,
    width: 127.875
  },
  jump: {
    right: createImage(spriteJumpRight),
    left: createImage(spriteJumpLeft),
    cropWidth: 340,
    width: 127.875
  },
  heart: {
    full: createImage(fullHeart),
  }
}

let timeLeft = 400; // set the total time limit of the game

function drawTimerBar() {
  const barWidth = 220;
  const barX = (canvas.width - barWidth) / 2;
  const barY = 30;
  context.fillStyle = "bold white Arial";
  context.font = "30px Arial";
  context.fillText(`Time Left`, barX + 10, barY + 15);

  context.fillStyle = "bold white Arial";
  context.font = "30px Arial";
  context.fillText(timeLeft, barX + 55, barY + 50);
}

const timerId = setInterval(() => {
  timeLeft -= 1;
  if (timeLeft <= 0) {
    clearInterval(timerId);
    location.reload();
  }
}, 1000);

let score = 0;
let coins = 0;

function drawScore() {
  context.font = "bold 28px Arial";
  context.fillStyle = "white";

  // Draw "Score" text
  context.fillText("Score", 20, 40);

  // Draw "Coins" text
  context.fillText("Coins", 150, 40);

  // Draw score and coins values beneath the words
  context.font = "28px Arial";
  context.fillStyle = "yellow";
  context.fillText(score.toString(), 55, 70);
  context.fillText(coins.toString(), 185, 70);
}

function collectCoin() {
  coins++;
  score += 100;
}

function updateScore() {
  drawScore();
}

const player = new Player(context, canvas, platforms, backgrounds, sprites, enemies);

player.removeEventListeners();

const menu = document.getElementById("menu");
const sprite1Button = document.getElementById("whiteSprite");
const sprite2Button = document.getElementById("redSprite");

sprite1Button.addEventListener("click", () => {
  // Set the player's sprite to the white sprite
  sprites = {
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
  // Hide the menu
  menu.style.display = "none";
  player.addEventListeners();
});

sprite2Button.addEventListener("click", () => {
  // Set the player's sprite to the red sprite
  sprites = {
    stand: {
      right: createImage(spriteFireFlowerStandRight),
      left: createImage(spriteFireFlowerStandLeft),
      cropWidth: 177,
      width: 66
    },
    run: {
      right: createImage(spriteFireFlowerRunRight),
      left: createImage(spriteFireFlowerRunLeft),
      cropWidth: 341,
      width: 127.875
    },
    jump: {
      right: createImage(spriteFireFlowerJumpRight),
      left: createImage(spriteFireFlowerJumpLeft),
      cropWidth: 341,
      width: 127.875
    },
    heart: {
      full: createImage(fullHeart),
    }
  }
  player.setSprite(sprites)
  // Hide the menu
  menu.style.display = "none";
  player.addEventListeners();
});

document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu");
  menu.style.display = "block";
  resetMap();
  player.animate();
});

let flagPoleImage

async function resetMap() {
  
  platformImage = await createImageAsync(platform);
  smallPlatformImage = await createImageAsync(smallPlatform)
  blockImage = await createImageAsync(block)
  blockTriImage = await createImageAsync(blockTri)
  flagPoleImage = await createImageAsync(pole)


  platforms = [
    new Platform(context, canvas, {x: 16800, y: 92, image: flagPoleImage}),
    new Platform(context, canvas, {x: platformImage.width * 4 + 380 + platformImage.width - smallPlatformImage.width, y: 290, image: smallPlatformImage}),
    new Platform(context, canvas, {x: -1, y: 460, image: platformImage}),
    new Platform(context, canvas, {x: platformImage.width - 3, y: 460, image: platformImage}),
    new Platform(context, canvas, {x: platformImage.width * 2 + 200, y: 460, image: platformImage}),
    new Platform(context, canvas, {x: platformImage.width * 3 + 380, y: 460, image: platformImage}),
    new Platform(context, canvas, {x: platformImage.width * 4 + 380, y: 460, image: platformImage}),
    new Platform(context, canvas, {x: platformImage.width * 5 + 780, y: 460, image: platformImage}),
    new Platform(context, canvas, {x: platformImage.width * 6 + 780, y: 460, image: platformImage}),
    new Platform(context, canvas, {x: platformImage.width * 7 + 1100, y: 460, image: platformImage}),
    new Platform(context, canvas, {x: platformImage.width * 8 + 1600, y: 460, image: platformImage}),
    new Platform(context, canvas, {x: platformImage.width * 9 + 2000, y: 460, image: platformImage}),
    new Platform(context, canvas, {x: platformImage.width * 10 + 2550, y: 460, image: platformImage}),
    new Platform(context, canvas, {x: platformImage.width * 11 + 3000, y: 460, image: platformImage}),
    new Platform(context, canvas, {x: platformImage.width * 12 + 3850, y: 460, image: platformImage}),
    new Platform(context, canvas, {x: platformImage.width * 13 + 3850, y: 460, image: platformImage}),
    new Platform(context, canvas, {x: platformImage.width * 14 + 3850, y: 460, image: platformImage}),
    new Platform(context, canvas, {x: 3080, y: 290, image: smallPlatformImage}),
    new Platform(context, canvas, {x: 5655, y: 290, image: smallPlatformImage}),
    new Platform(context, canvas, {x: 6740, y: 290, image: smallPlatformImage}),
    new Platform(context, canvas, {x: 9060, y: 290, image: smallPlatformImage}),
    new Platform(context, canvas, {x: 10100, y: 290, image: smallPlatformImage}),

    new Platform(context, canvas, {x: 400, y: 240, image: blockTriImage, block: true}),
    new Platform(context, canvas, {x: 550, y: 240, image: blockTriImage, block: true}),
    new Platform(context, canvas, {x: 900, y: 240, image: blockTriImage, block: true}),

    new Platform(context, canvas, {x: 1700, y: 300, image: blockImage, block: true}),
    new Platform(context, canvas, {x: 1850, y: 240, image: blockImage, block: true}),
    new Platform(context, canvas, {x: 2050, y: 240, image: blockImage, block: true}),

    new Platform(context, canvas, {x: 2300, y: 240, image: blockTriImage, block: true}),
    new Platform(context, canvas, {x: 3700, y: 240, image: blockTriImage, block: true}),
    new Platform(context, canvas, {x: 4000, y: 240, image: blockTriImage, block: true}),

    new Platform(context, canvas, {x: 5000, y: 240, image: blockImage, block: true}),
    new Platform(context, canvas, {x: 5200, y: 240, image: blockImage, block: true}),
    new Platform(context, canvas, {x: 5400, y: 220, image: blockImage, block: true}),

    new Platform(context, canvas, {x: 6300, y: 240, image: blockTriImage, block: true}),

    new Platform(context, canvas, {x: 7500, y: 240, image: blockTriImage, block: true}),
    new Platform(context, canvas, {x: 7900, y: 240, image: blockTriImage, block: true}),

    new Platform(context, canvas, {x: 8200, y: 320, image: blockImage, block: true}),
    new Platform(context, canvas, {x: 8300, y: 220, image: blockImage, block: true}),
    new Platform(context, canvas, {x: 8500, y: 220, image: blockImage, block: true}),
    new Platform(context, canvas, {x: 8700, y: 220, image: blockImage, block: true}),

    new Platform(context, canvas, {x: 9200, y: 80, image: blockTriImage, block: true}),
    new Platform(context, canvas, {x: 9700, y: 340, image: blockImage, block: true}),
    new Platform(context, canvas, {x: 9850, y: 290, image: blockImage, block: true}),
    new Platform(context, canvas, {x: 10000, y: 220, image: blockImage, block: true}),

    new Platform(context, canvas, {x: 11200, y: 340, image: blockTriImage, block: true}),
    new Platform(context, canvas, {x: 11000, y: 360, image: blockImage, block: true}),

    new Platform(context, canvas, {x: 12200, y: 310, image: blockTriImage, block: true}),
    new Platform(context, canvas, {x: 12500, y: 270, image: blockImage, block: true}),
    new Platform(context, canvas, {x: 12700, y: 280, image: blockImage, block: true}),
    new Platform(context, canvas, {x: 12800, y: 300, image: blockImage, block: true}),

    new Platform(context, canvas, {x: 13200, y: 240, image: blockTriImage, block: true}),
    new Platform(context, canvas, {x: 13800, y: 320, image: blockImage, block: true}),
    new Platform(context, canvas, {x: 14000, y: 290, image: blockImage, block: true}),
    new Platform(context, canvas, {x: 14200, y: 270, image: blockImage, block: true}),
    new Platform(context, canvas, {x: 14400, y: 260, image: blockImage, block: true}),
    new Platform(context, canvas, {x: 14500, y: 240, image: blockImage, block: true}),

    new Platform(context, canvas, {x: 16000, y: 410, image: blockTriImage, block: true}),
    new Platform(context, canvas, {x: 16150, y: 410, image: blockTriImage, block: true}),
    new Platform(context, canvas, {x: 16300, y: 410, image: blockTriImage, block: true}),
    new Platform(context, canvas, {x: 16150, y: 360, image: blockTriImage, block: true}),
    new Platform(context, canvas, {x: 16300, y: 360, image: blockTriImage, block: true}),
    new Platform(context, canvas, {x: 16300, y: 310, image: blockTriImage, block: true}),

    new Platform(context, canvas, {x: 16050, y: 360, image: blockImage, block: true}),
    new Platform(context, canvas, {x: 16100, y: 360, image: blockImage, block: true}),
    new Platform(context, canvas, {x: 16100, y: 310, image: blockImage, block: true}),
    new Platform(context, canvas, {x: 16150, y: 310, image: blockImage, block: true}),
    new Platform(context, canvas, {x: 16200, y: 310, image: blockImage, block: true}),
    new Platform(context, canvas, {x: 16250, y: 310, image: blockImage, block: true}),
    new Platform(context, canvas, {x: 16300, y: 310, image: blockImage, block: true}),
    new Platform(context, canvas, {x: 16350, y: 310, image: blockImage, block: true}),

    new Platform(context, canvas, {x: 16300, y: 260, image: blockTriImage, block: true}),
    new Platform(context, canvas, {x: 16150, y: 260, image: blockTriImage, block: true}),

    new Platform(context, canvas, {x: 16300, y: 210, image: blockTriImage, block: true}),
    new Platform(context, canvas, {x: 16250, y: 210, image: blockImage, block: true}),
    new Platform(context, canvas, {x: 16200, y: 210, image: blockImage, block: true}),

    new Platform(context, canvas, {x: 16300, y: 160, image: blockTriImage, block: true}),
    new Platform(context, canvas, {x: 16250, y: 160, image: blockImage, block: true})
  ];
  
  backgroundImage = await createImageAsync(backgroundImg);
  backgroundImage2 = await createImageAsync(backgroundImg2);
  objectImage = await createImageAsync(objectImg);
  objectImage2 = await createImageAsync(objectImg2);
  objectImage3 = await createImageAsync(objectImg3);
  objectImage4 = await createImageAsync(objectImg4);

  
  backgrounds = [
    new Background(context, canvas, { x: 0, y: -98, image: backgroundImage }),
    new Background(context, canvas, { x: 1006, y: -98, image: backgroundImage2 }),
    new Background(context, canvas, { x: 2006, y: -89, image: backgroundImage }),
    new Background(context, canvas, { x: 3006, y: -98, image: backgroundImage2 }),
    new Background(context, canvas, { x: 4006, y: -98, image: backgroundImage }),
    new Background(context, canvas, { x: 5006, y: -98, image: backgroundImage2 }),
    new Background(context, canvas, { x: 6006, y: -98, image: backgroundImage }),
    new Background(context, canvas, { x: 7006, y: -98, image: backgroundImage2 }),
    new Background(context, canvas, { x: 8006, y: -89, image: backgroundImage }),
    new Background(context, canvas, { x: 9006, y: -98, image: backgroundImage2 }),
    new Background(context, canvas, { x: 10006, y: -98, image: backgroundImage }),
    new Background(context, canvas, { x: 11006, y: -98, image: backgroundImage2 }),
    new Background(context, canvas, { x: 12006, y: -98, image: backgroundImage }),
    new Background(context, canvas, { x: 13006, y: -98, image: backgroundImage2 }),
    new Background(context, canvas, { x: 14006, y: -89, image: backgroundImage }),
    new Background(context, canvas, { x: 15006, y: -98, image: backgroundImage2 }),
    new Background(context, canvas, { x: 16006, y: -98, image: backgroundImage }),
    new Background(context, canvas, { x: 17006, y: -98, image: backgroundImage2 }),
    new Background(context, canvas, { x: 1600, y: -70, image: objectImage }),
    new Background(context, canvas, { x: 3600, y: -70, image: objectImage }),
    new Background(context, canvas, { x: 5600, y: -70, image: objectImage }),
    new Background(context, canvas, { x: 7600, y: -70, image: objectImage }),
    new Background(context, canvas, { x: 9600, y: -70, image: objectImage }),
    new Background(context, canvas, { x: 11600, y: -70, image: objectImage }),
    new Background(context, canvas, { x: 13600, y: -70, image: objectImage }),
    new Background(context, canvas, { x: 15600, y: -70, image: objectImage }),
    new Background(context, canvas, { x: 300, y: -10, image: objectImage2 }),
    new Background(context, canvas, { x: 150, y: -10, image: objectImage3 }),
    new Background(context, canvas, { x: 1000, y: 210, image: objectImage4 })
  ];

  player.reset();
  player.position = { x: 0, y: 250 }; 
  player.platforms = platforms;
  player.backgrounds = backgrounds;
  enemies.forEach(ele => {
    ele.reset();
  });
  
}


export { resetMap, drawTimerBar, drawScore, collectCoin, updateScore };