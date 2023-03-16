class FlagPole{

  constructor(context, canvas, {x, y, image}) {
    this.position = {
      x: x,
      y: y
    }
    this.velocity = {
      x: 0
    }
    this.image = image
    this.width = image.width
    this.height = image.height
    this.context = context
    this.canvas = canvas

  }

  draw() {
    this.context.drawImage(this.image, this.position.x, this.position.y)
  }

  update() {
    this.draw()
    this.position.x += this.velocity.x
  }
  
}

export default FlagPole;