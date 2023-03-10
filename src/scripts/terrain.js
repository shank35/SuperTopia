class Platform {

  constructor(context, canvas) {
    this.position = {
      x: 300,
      y: 500
    }

    this.width = 200
    this.height = 20
    this.context = context
    this.canvas = canvas
  }

  draw() {
    this.context.fillStyle ='blue';
    this.context.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
      );
  }
  
}

export default Platform;