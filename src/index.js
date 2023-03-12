// index.js
import platform from "./img/platform.png"
import backgroundImg from "./img/background.png"
import objectImg from "./img/object.png"
import objectImg2 from "./img/object2.png"
import Background from "./scripts/background";
import Player from "./scripts/player";
import Platform from "./scripts/terrain";

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");

  canvas.width = 1024;
  canvas.height = 576;

  function createImage(imageSrc) {
    const image = new Image()
    image.src = imageSrc
    return image;
  }

  const platformImage = createImage(platform);
  const platforms = [
    new Platform(context, canvas, 
    {x: -1, y: 410, image: platformImage}),
    new Platform(context, canvas,
      {x: platformImage.width - 2, y: 410, image: platformImage}),
    new Platform(context, canvas,
      {x: platformImage.width * 2 + 100, y: 410, image: platformImage})
  ];

  const backgroundImage = createImage(backgroundImg);
  const objectImage = createImage(objectImg);
  const objectImage2 = createImage(objectImg2);

  const backgrounds = [
    new Background(context, canvas, {
      x: 0,
      y: 0,
      image: backgroundImage
    }),
    new Background(context, canvas, {
      x: 1000,
      y: 0,
      image: backgroundImage
    }),
    new Background(context, canvas, {
      x: 2000,
      y: 0,
      image: backgroundImage
    }),
    new Background(context, canvas, {
      x: 3000,
      y: 0,
      image: backgroundImage
    }),
    new Background(context, canvas, {
      x: 4000,
      y: 0,
      image: backgroundImage
    }),
    new Background(context, canvas, {
      x: 5000,
      y: 0,
      image: backgroundImage
    }),
    new Background(context, canvas, {
      x: -100,
      y: -70,
      image: objectImage
    }),
    new Background(context, canvas, {
      x: 300,
      y: -30,
      image: objectImage2
    })
  ];

  const player = new Player(context, canvas, platforms, backgrounds);
  player.animate();
});
