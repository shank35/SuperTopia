// index.js
import platform from "./img/platform.png"
import smallPlatform from "./img/smallPlatform.png"
import smallPlatform2 from "./img/smallPlatform2.png"

import backgroundImg from "./img/background.png"
import objectImg from "./img/object.png"
import objectImg2 from "./img/object2.png"
import Background from "./scripts/background";

import spriteRunLeft from "./img/spriteRunLeft.png"
import spriteRunRight from "./img/spriteRunRight.png"
import spriteStandLeft from "./img/spriteStandLeft.png"
import spriteStandRight from "./img/spriteStandRight.png"

import Player from "./scripts/player";
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

let platformImage = createImage(platform);
let platforms = [

];

let smallPlatformImage = createImage(smallPlatform);
let smallPlatforms = [

];

let backgroundImage = createImage(backgroundImg);
let objectImage = createImage(objectImg);
let objectImage2 = createImage(objectImg2);

let backgrounds = [

];


let sprites = {
  stand: {
    right: createImage(spriteStandRight),
    left: createImage(spriteStandLeft),
    cropWidth: 177,
    width: 66
  },
  run: {
    right: createImage(spriteRunRight),
    left: createImage(spriteRunRight),
    cropWidth: 341,
    width: 127.875
  }
}

const player = new Player(context, canvas, platforms, backgrounds, sprites);

function resetMap() {
  
  platformImage = createImage(platform);
  platforms = [
    new Platform(context, canvas, {x: platformImage.width * 4 + 380 + platformImage.width - smallPlatformImage.width, y: 290, image: smallPlatformImage}),
    new Platform(context, canvas, {x: -1, y: 460, image: platformImage}),
    new Platform(context, canvas, {x: platformImage.width - 3, y: 460, image: platformImage}),
    new Platform(context, canvas, {x: platformImage.width * 2 + 200, y: 460, image: platformImage}),
    new Platform(context, canvas, {x: platformImage.width * 3 + 380, y: 460, image: platformImage}),
    new Platform(context, canvas, {x: platformImage.width * 4 + 380, y: 460, image: platformImage}),
    new Platform(context, canvas, {x: platformImage.width * 5 + 950, y: 460, image: platformImage})
  ];
  
  backgroundImage = createImage(backgroundImg);
  objectImage = createImage(objectImg);
  objectImage2 = createImage(objectImg2);
  
  backgrounds = [
    new Background(context, canvas, { x: 0, y: 0, image: backgroundImage }),
    new Background(context, canvas, { x: 1000, y: 0, image: backgroundImage }),
    new Background(context, canvas, { x: 2000, y: 0, image: backgroundImage }),
    new Background(context, canvas, { x: 3000, y: 0, image: backgroundImage }),
    new Background(context, canvas, { x: 4000, y: 0, image: backgroundImage }),
    new Background(context, canvas, { x: 5000, y: 0, image: backgroundImage }),
    new Background(context, canvas, { x: -100, y: -70, image: objectImage }),
    new Background(context, canvas, { x: 300, y: -30, image: objectImage2 })
  ];
  player.reset();
  player.position = { x: 100, y: 100 }; 
  player.platforms = platforms;
  player.backgrounds = backgrounds;
}


document.addEventListener("DOMContentLoaded", () => {
  resetMap();
  player.animate();
});

export { resetMap };