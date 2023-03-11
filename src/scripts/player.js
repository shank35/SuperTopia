// player.js
const gravity = 0.5;

class Player {

  constructor(context, canvas, platforms) {
    this.position = {
      x: 100,
      y: 100
    }
    this.velocity = {
      x: 0,
      y: 0
    }
    this.width = 30
    this.height = 30
    this.context = context
    this.canvas = canvas
    this.platforms = platforms

    this.keys = {
      right: {
        pressed: false
      },
      left: {
        pressed: false
      }
    }
    window.addEventListener("keydown", ({keyCode}) => {
      switch (keyCode) {
        case 65:
          console.log("left")
          this.keys.left.pressed = true
          break
        case 83:
          console.log("down")
          break
        case 68:
          console.log("right")
          this.keys.right.pressed = true
          break
        case 87:
          console.log("up")
          this.velocity.y -= 10
          break
      }
    });

    window.addEventListener("keyup", ({keyCode}) => {
      switch (keyCode) {
        case 65:
          console.log("left")
          this.keys.left.pressed = false
          break
        case 83:
          console.log("down")
          break
        case 68:
          console.log("right")
          this.keys.right.pressed = false
          break
        case 87:
          console.log("up")
          this.velocity.y -= 10
          break
      }
    });

  }

  draw() {
    this.context.fillStyle ='red';
    this.context.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
      );
  }

  update () {
    this.position.y += this.velocity.y
    this.position.x += this.velocity.x
    this.draw();
    if (this.position.y + this.height + this.velocity.y <= this.canvas.height) {
      this.velocity.y += gravity;
    } else {
      this.velocity.y = 0
    }
  }

  animate() {
    let boundFunc = this.animate.bind(this)
    requestAnimationFrame(boundFunc);
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.update();
    this.platforms.forEach(platform => {
      platform.draw();
    })
    if (this.keys.right.pressed && this.position.x < 400) {
      this.velocity.x = 5
    } else if (this.keys.left.pressed && this.position.x > 0) {
      this.velocity.x = -5
    } else {
      this.velocity.x = 0
      if (this.keys.right.pressed) {
        this.platforms.forEach(platform => {
          platform.position.x -= 5
        })
      } else if (this.keys.left.pressed) {
        this.platforms.forEach(platform => {
          platform.position.x += 5
        })
      }
    }

    // platform collision detection
    this.platforms.forEach(platform => {
      if (this.position.y + this.height <= 
        platform.position.y && 
        this.position.y + this.height + this.velocity.y >= 
        platform.position.y &&
        this.position.x + this.width >= platform.position.x && 
        this.position.x <= platform.position.x + platform.width) {
        this.velocity.y = 0;
      }
    })
  }

}


export default Player;
