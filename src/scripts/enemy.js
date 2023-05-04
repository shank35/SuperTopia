//enemy.js

const gravity = 1.2;

import spriteGoomba from "../img/spriteGoomba.png"

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

class Enemy {

  constructor( context, canvas, {position, velocity, distance} ) {
    this.position = { x: position.x, y: position.y }
    this.velocity = { x: velocity.x, y: velocity.y }

    this.width = 43.33
    this.height = 50

    this.context = context 
    this.canvas = canvas

    this.distance = distance

    this.initialPositionX = position.x
    this.initialPositionY = position.y

    this.frames = 0

    this.image = createImage(spriteGoomba)

  }

  reverseDirection() {
    this.velocity.x = -this.velocity.x;
  }

  draw() {
    // this.context.fillStyle = 'blue';
    
    // this.context.fillRect(this.position.x, this.position.y, this.width, this.height);
    this.context.drawImage(this.image,
      130 * this.frames,
      0,
      130,
      150,
      this.position.x, this.position.y, this.width, this.height)
    
  }

  update() {
    this.frames += 1
    if (this.frames >= 58) {
      this.frames = 0
    }
    this.draw()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y

    if (this.position.y + this.height + this.velocity.y <= this.canvas.height) {
      this.velocity.y += gravity;
    } 

    // movement of enemy
    this.distance.traveled += Math.abs(this.velocity.x)
    if (this.distance.traveled > this.distance.limit) {
      this.distance.traveled = 0
      this.velocity.x = -this.velocity.x
    }
  }

  reset() {
    this.update()
    this.position.x = this.initialPositionX
    this.position.y = this.initialPositionY
    this.distance.traveled = 0;
  }

}

export default Enemy;