// player.js

import { resetMap } from "../index.js"

const gravity = 1.2;

class Player {

  constructor(context, canvas, platforms, backgrounds, sprites, enemies) {

    this.position = { x: 100, y: 100 }
    this.velocity = { x: 0, y: 0 }
    this.speed = 10

    this.width = 66
    this.height = 150

    this.context = context
    this.canvas = canvas

    this.platforms = platforms
    this.backgrounds =  backgrounds

    this.sprites = sprites
    this.currentSprite = this.sprites.stand.right
    this.currentCropWidth = 177

    this.enemies = enemies

    this.frames = 0

    this.traveledCount = 0;

    this.currentKey = ""

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
          this.currentKey = "left"
          break
        case 83:
          console.log("down")
          break
        case 68:
          console.log("right")
          this.keys.right.pressed = true
          this.currentKey = "right"
          break
        case 87:
          console.log("up")
          if (this.velocity.y === 0) {
            this.velocity.y -= 20
          }
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
          break
      }
    });

  }

  reset() {
    this.traveledCount = 0;
  }

  collisionDetection ({object, platform}) {
    return (object.position.y + object.height <= 
    platform.position.y && 
    object.position.y + object.height + object.velocity.y >= 
    platform.position.y &&
    object.position.x + object.width >= platform.position.x && 
    object.position.x <= platform.position.x + platform.width)
  }

  enemyCollisionTop ({object1, object2}) {
    return (object1.position.y + object1.height <= 
    object2.position.y && 
    object1.position.y + object1.height + object1.velocity.y >= 
    object2.position.y &&
    object1.position.x + object1.width >= object2.position.x && 
    object1.position.x <= object2.position.x + object2.width)
  }

  draw() {
    this.context.drawImage(this.currentSprite,
    this.currentCropWidth * this.frames,
    0,
    this.currentCropWidth,
    400,
    this.position.x, this.position.y, this.width, this.height)
    // this.context.fillStyle = 'red';
    
    // this.context.fillRect(this.position.x, this.position.y, 50, 150);
  }

  update () {
    this.frames += 1
    if (this.frames > 59 && (this.currentSprite === this.sprites.stand.right || this.currentSprite === this.sprites.stand.left)) {
      this.frames = 0
    } else if (this.frames > 29 && (this.currentSprite === this.sprites.run.right || this.currentSprite === this.sprites.run.left )) {
      this.frames = 0
    }
    this.position.y += this.velocity.y
    this.position.x += this.velocity.x
    this.draw();
    if (this.position.y + this.height + this.velocity.y <= this.canvas.height) {
      this.velocity.y += gravity;
    } 
  }

  animate() {
    let boundFunc = this.animate.bind(this)
    requestAnimationFrame(boundFunc);
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.backgrounds.forEach(background => {
      background.draw()
    })

    this.platforms.forEach(platform => {
      platform.draw();
    })

    this.enemies.forEach((enemy, index) => {
      enemy.update()
      if (
        this.enemyCollisionTop({
        object1: this,
        object2: enemy
        })) {
          this.velocity.y -= 35
          setTimeout(() => {
            this.enemies.splice(index, 1)
          }, 0)
        } else if (
          this.position.x + this.width >= enemy.position.x && this.position.y + this.height >= enemy.position.y && this.position.x <= enemy.position.x + enemy.width
        ) {
          resetMap()
        }
    })

    this.update();

    if (this.keys.right.pressed && this.position.x < 400) {
      this.velocity.x = this.speed
    } else if ((this.keys.left.pressed && this.position.x > 0) || this.keys.left.pressed && this.traveledCount === 0 && this.position.x > 0) {
      this.velocity.x = -this.speed
    } else {
      this.velocity.x = 0

      //scrolling
      if (this.keys.right.pressed) {
        this.traveledCount += this.speed
        this.platforms.forEach(platform => {
          platform.position.x -= this.speed
        })
        this.backgrounds.forEach(background => {
          background.position.x -= this.speed * 0.66
        })
        this.enemies.forEach(enemy => {
          enemy.position.x -= this.speed
        })
      } else if (this.keys.left.pressed && this.traveledCount > 0) {
        this.traveledCount -= this.speed
        this.platforms.forEach(platform => {
          platform.position.x += this.speed
        })
        this.backgrounds.forEach(background => {
          background.position.x += this.speed * 0.66
        })
        this.enemies.forEach(enemy => {
          enemy.position.x += this.speed
        })
      }
      
    }

    // platform collision detection
    this.platforms.forEach(platform => {
      if (
        this.collisionDetection ({object: this, platform: platform})
      ) {
        this.velocity.y = 0;
      }
      this.enemies.forEach(enemy => {
        if (this.collisionDetection ({object: enemy, platform: platform})) {
          enemy.velocity.y = 0;
        }
      })
    })

    // sprite switching
    if (this.keys.right.pressed && this.currentKey === "right" && this.currentSprite !== this.sprites.run.right) {
      this.frames = 1
      this.currentSprite = this.sprites.run.right
      this.currentCropWidth = this.sprites.run.cropWidth
      this.width = this.sprites.run.width
    } else if (this.keys.left.pressed && this.currentKey === "left" && this.currentSprite !== this.sprites.run.left) {
      this.currentSprite = this.sprites.run.left
      this.currentCropWidth = this.sprites.run.cropWidth
      this.width = this.sprites.run.width
    } else if (!this.keys.left.pressed && this.currentKey === "left" && this.currentSprite !== this.sprites.stand.left) {
      this.currentSprite = this.sprites.stand.left
      this.currentCropWidth = this.sprites.stand.cropWidth
      this.width = this.sprites.stand.width
    } else if (!this.keys.right.pressed && this.currentKey === "right" && this.currentSprite !== this.sprites.stand.right) {
      this.currentSprite = this.sprites.stand.right
      this.currentCropWidth = this.sprites.stand.cropWidth
      this.width = this.sprites.stand.width
    }

    
    // win condition
    if (this.traveledCount > 4860) {
      console.log("YOU WIN")
    }

    // lose condition
    if (this.position.y > this.canvas.height) {
      resetMap()
    }

  }

}


export default Player;
