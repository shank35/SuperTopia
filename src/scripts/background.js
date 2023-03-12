// terrain.js
class Background {

  constructor(context, canvas, {x, y, image}) {
    this.position = {
      x: x,
      y: y
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
  
}

export default Background;