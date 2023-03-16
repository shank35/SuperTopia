// index.js
import platform from "./img/platform.png"
import smallPlatform from "./img/smallPlatform.png"
import smallPlatform2 from "./img/smallPlatform2.png"

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

import fullHeart from "./img/fullHeart.png"

import Player from "./scripts/player";
import Enemy from "./scripts/enemy";
import Platform from "./scripts/terrain";
import FlagPole from "./scripts/flagpole";


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
let smallPlatforms = [];

let backgroundImage
let backgroundImage2
let objectImage
let objectImage2
let objectImage3
let objectImage4

let backgrounds = [];


let enemies = [
  new Enemy( context, canvas, {position: {x: 1400, y: 100}, velocity: {x: 3, y: 0}, distance: {limit: 300, traveled: 0}} ),
  new Enemy( context, canvas, {position: {x: 2500, y: 100}, velocity: {x: 3.5, y: 0}, distance: {limit: 200, traveled: 0}} )
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
    new Platform(context, canvas, {x: platformImage.width * 5 + 810, y: 460, image: platformImage})
  ];
  
  backgroundImage = await createImageAsync(backgroundImg);
  backgroundImage2 = await createImageAsync(backgroundImg2);
  objectImage = await createImageAsync(objectImg);
  objectImage2 = await createImageAsync(objectImg2);
  objectImage3 = await createImageAsync(objectImg3);
  objectImage4 = await createImageAsync(objectImg4);

  
  backgrounds = [
    new Background(context, canvas, { x: 0, y: -98, image: backgroundImage }),
    new Background(context, canvas, { x: 1200, y: -98, image: backgroundImage }),
    new Background(context, canvas, { x: 2400, y: -98, image: backgroundImage }),
    new Background(context, canvas, { x: 3600, y: -98, image: backgroundImage }),
    new Background(context, canvas, { x: 4800, y: -98, image: backgroundImage }),
    new Background(context, canvas, { x: 6200, y: -98, image: backgroundImage }),
    // new Background(context, canvas, { x: -100, y: -70, image: objectImage }),
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

export { resetMap };