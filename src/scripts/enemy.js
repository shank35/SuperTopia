//enemy.js

const gravity = 1.2;

class Enemy {

  constructor( context, canvas, {position, velocity, distance = {limit: 50, traveled: 0}} ) {
    this.position = { x: position.x, y: position.y }
    this.velocity = { x: velocity.x, y: velocity.y }

    this.width = 50
    this.height = 50

    this.context = context 
    this.canvas = canvas

    this.distance = distance

  }

  draw() {
    this.context.fillStyle = 'blue';
    
    this.context.fillRect(this.position.x, this.position.y, this.width, this.height);
    
  }

  update() {
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
    console.log(this.distance.traveled)
  }

}

export default Enemy;