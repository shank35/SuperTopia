// player.js

import { resetMap } from "../index.js"
import Enemy from "./enemy.js"


const gravity = 1.2;

class Player {

  constructor(context, canvas, platforms, backgrounds, sprites, enemies) {

    this.position = { x: 0, y: 300 }
    this.velocity = { x: 0, y: 0 }
    this.speed = 3

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

    this.lives = 3

    this.currentKey = ""

    this.keys = {
      right: {
        pressed: false
      },
      left: {
        pressed: false
      }
    }

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);

    window.addEventListener("keydown", this.handleKeyDown);
    window.addEventListener("keyup", this.handleKeyUp);

  }


  handleKeyDown({ keyCode }) {
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
  }

  handleKeyUp({ keyCode }) {
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
  }

  removeEventListeners() {
    window.removeEventListener("keydown", this.handleKeyDown);
    window.removeEventListener("keyup", this.handleKeyUp);
  }

  reset() {
    this.traveledCount = 0;
  }

  resetHearts() {
    this.lives = 3
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

    this.update();
    this.enemyCollision();
    this.fallOffScreen();
    this.drawHearts();

    if (this.keys.right.pressed && this.position.x < 400) {
      this.velocity.x = this.speed
    } else if ((this.keys.left.pressed && this.position.x > 100) || this.keys.left.pressed && this.traveledCount === 0 && this.position.x > 100) {
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

    if (this.lives === 0) {
      this.gameOver()
    }
    
    // win condition
    if (this.traveledCount > 4860) {
      this.gameWin()
    }

  }

  enemyCollision() {
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
          this.lives -= 1
          if (this.lives === 0) {
            this.gameOver();
          } else {
            this.reset()
            this.enemies = this.resetEnemy()
            resetMap()
          }
        }
    })
  }

  // falling into death pit
  fallOffScreen() {
    if (this.position.y > this.canvas.height) {
      this.lives -= 1
      if (this.lives === 0) {
        this.gameOver();
      } else {
        this.reset()
        this.enemies = this.resetEnemy()
        resetMap()
      }
    }
  }

  // drawing hearts
  drawHearts() {
    const heartWidth = 34;
    const heartPadding = 20;
    const heartX = this.canvas.width - this.lives * (heartWidth + heartPadding);
    const heartY = 10;
    const text = "Lives:";
    const textX = heartX - 80; // adjust the x position as needed
    const textY = heartY + 22;
    
    // Draw the text
    this.context.fillStyle = "#ffffff";
    this.context.font = "bold 24px sans-serif";
    this.context.fillText(text, textX, textY);
    
    // Draw the hearts
    for (let i = 0; i < this.lives; i++) {
      this.context.drawImage(
        this.sprites.heart.full,
        heartX + i * (heartWidth + heartPadding),
        heartY,
        heartWidth,
        heartWidth
      );
    }
  }

  resetEnemy() {
    let enemies = [new Enemy(this.context, this.canvas, {position: {x: 1400, y: 100}, velocity: {x: 3, y: 0}, distance: {limit: 200, traveled: 0}}),
      new Enemy(this.context, this.canvas, {position: {x: 2500, y: 100}, velocity: {x: 3.5, y: 0}, distance: {limit: 200, traveled: 0}})];
    return enemies
  }

  gameOver() {
    // Display game over screen
    this.context.fillStyle = "black";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.fillStyle = "white";
    this.context.font = "50px Arial";
    this.context.textAlign = "center";
    this.context.fillText("Game Over", this.canvas.width / 2, this.canvas.height / 2);
  
    // Disable player movement
    this.removeEventListeners()
    this.position = { x: 0, y: 300 }
    this.velocity = { x: 0, y: 0 }
  
    // Add restart button
    const restartBtn = document.createElement("button");
    restartBtn.innerText = "Restart";
    restartBtn.style.position = "absolute";
    restartBtn.style.bottom = "350px";
    restartBtn.style.left = "50%";
    restartBtn.style.transform = "translateX(-50%)";
    restartBtn.style.fontSize = "24px";
    restartBtn.style.padding = "12px 24px";
    restartBtn.style.cursor = "pointer";
    restartBtn.style.zIndex = "9999";
    restartBtn.addEventListener("click", function() {
      window.location.reload();
    });
    document.body.appendChild(restartBtn);
  }

  gameWin() {
    // Display game over screen
    console.log("gameWin function called");
    this.context.fillStyle = "black";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.fillStyle = "white";
    this.context.font = "50px Arial";
    this.context.textAlign = "center";
    this.context.fillText("You won!!!", this.canvas.width / 2, this.canvas.height / 2);
  
    // Disable player movement
    this.removeEventListeners()
    this.position = { x: 0, y: 300 }
    this.velocity = { x: 0, y: 0 }
  
    // Add restart button
    const restartBtn = document.createElement("button");
    restartBtn.innerText = "Restart";
    restartBtn.style.position = "absolute";
    restartBtn.style.bottom = "350px";
    restartBtn.style.left = "50%";
    restartBtn.style.transform = "translateX(-50%)";
    restartBtn.style.fontSize = "24px";
    restartBtn.style.padding = "12px 24px";
    restartBtn.style.cursor = "pointer";
    restartBtn.style.zIndex = "9999";
    document.body.appendChild(restartBtn);
    restartBtn.addEventListener("click", () => {
      location.reload();
    });
  }
  
  

}



export default Player;
