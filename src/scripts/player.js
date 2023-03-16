

// player.js

import { resetMap, drawTimerBar, drawScore, collectCoin, updateScore } from "../index.js"
import Enemy from "./enemy.js"

import { audio } from "./audio.js";

const gravity = 1.2;

class Player {

  constructor(context, canvas, platforms, backgrounds, sprites, enemies) {


    this.position = { x: 0, y: 300 }
    this.velocity = { x: 0, y: 0 }
    this.speed = 12 //30 //10

    // this.width = 66
    // this.height = 150
    this.scale = 0.3
    this.width = 398 * this.scale
    this.height = 353 * this.scale

    this.context = context
    this.canvas = canvas

    this.platforms = platforms
    this.backgrounds =  backgrounds

    this.sprites = sprites
    this.currentSprite = this.sprites.stand.right
    this.currentCropWidth = 398

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

    this.restartBtn = document.getElementById("btn-restart");

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);

    this.restartBtn.addEventListener("click", function() {
      window.location.reload();
    });


  }

  setSprite(sprites) {
    this.sprites = sprites
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
          audio.jump.play();
          this.velocity.y -= 20 //30 //20
        }
        if (this.currentKey === "right") {
          this.currentSprite = this.sprites.jump.right
        } else {
          this.currentSprite = this.sprites.jump.left
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

  addEventListeners() {
    window.addEventListener("keydown", this.handleKeyDown);
    window.addEventListener("keyup", this.handleKeyUp);
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

  hitBottomOfPlatform({ object, platform }) {
    return (
      object.position.y <= platform.position.y + platform.height &&
      object.position.y - object.velocity.y >= platform.position.y + platform.height &&
      object.position.x + object.width >= platform.position.x &&
      object.position.x <= platform.position.x + platform.width
    )
  }

  hitSideOfPlatform({ object, platform }) {
    return (
      object.position.x + object.width + object.velocity.x - platform.velocity.x >= platform.position.x &&
      object.position.x + object.velocity.x <= platform.position.x + platform.width &&
      object.position.y <= platform.position.y + platform.height &&
      object.position.y + object.height >= platform.position.y
    )
  }

  draw() {
    this.context.drawImage(this.currentSprite,
    this.currentCropWidth * this.frames,
    0,
    this.currentCropWidth,
    353,
    this.position.x, this.position.y, this.width, this.height)
  }

  update () {
    this.frames += 1
    if (this.frames > 58 && (this.currentSprite === this.sprites.stand.right || this.currentSprite === this.sprites.stand.left)) {
      this.frames = 0
    } else if (this.frames > 28 && (this.currentSprite === this.sprites.run.right || this.currentSprite === this.sprites.run.left )) {
      this.frames = 0
    } else if (this.currentSprite === this.sprites.jump.right || this.currentSprite === this.sprites.jump.left) {
      this.frames = 0
    }
    this.position.y += this.velocity.y
    this.position.x += this.velocity.x
    this.draw();
    if (this.position.y + this.height + this.velocity.y <= this.canvas.height) {
      this.velocity.y += gravity;
    } 

    drawTimerBar()
    // drawScore()
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
      if (
        platform.block &&
        this.hitBottomOfPlatform({
          object: this,
          platform
        })
      ) {
        this.velocity.y = -this.velocity.y
      }
  
      if (
        platform.block &&
        this.hitSideOfPlatform({
          object: this,
          platform
        })
      ) {
        this.velocity.x = 0
      }
    })

    // sprite switching
    if (this.velocity.y === 0) {
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
    }

    // if (this.lives === 0) {
    //   audio.gameOver.play();
    //   this.gameOver()
    // }
    
    // win condition
    if (this.traveledCount > 16250) {
      this.gameWin()
      this.speed = 0
      this.currentSprite === this.sprites.stand.right
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
          this.velocity.y -= 20
          audio.goombaSquash.play();
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
            audio.die.play();
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
        audio.die.play();
        this.reset()
        this.enemies = this.resetEnemy()
        resetMap()
      }
    }
  }

  drawHearts() {
    const heartWidth = 34;
    const heartPadding = 20;
    const heartX = this.canvas.width - this.lives * (heartWidth + heartPadding);
    const heartY = 10;
    const text = "Lives";
    const textX = heartX + 40;
    const textY = heartY + 22;
    
    // Draw the text
    this.context.fillStyle = "#ffffff";
    this.context.font = "bold 24px sans-serif";
    this.context.fillText(text, 900, 35);
    
    // Draw the hearts
    for (let i = 0; i < this.lives; i++) {
      this.context.drawImage(
        this.sprites.heart.full,
        heartX + i * (heartWidth + heartPadding),
        heartY + 35,
        heartWidth,
        heartWidth
      );
    }
  }

  resetEnemy() {
    let enemies = [  new Enemy( this.context, this.canvas,{position: {x: 1200, y: 100}, velocity: {x: 3, y: 0}, distance: {limit: 400, traveled: 0}} ),
      new Enemy( this.context, this.canvas, {position: {x: 2300, y: 100}, velocity: {x: 3.5, y: 0}, distance: {limit: 300, traveled: 0}}),
      new Enemy( this.context, this.canvas,{position: {x: 4000, y: 100}, velocity: {x: 3, y: 0}, distance: {limit: 800, traveled: 0}} ),
      new Enemy( this.context, this.canvas,{position: {x: 6350, y: 100}, velocity: {x: 3, y: 0}, distance: {limit: 500, traveled: 0}} ),
      new Enemy( this.context, this.canvas,{position: {x: 7850, y: 100}, velocity: {x: 3, y: 0}, distance: {limit: 300, traveled: 0}} ),
      new Enemy( this.context, this.canvas,{position: {x: 10450, y: 100}, velocity: {x: 3, y: 0}, distance: {limit: 400, traveled: 0}} ),
      new Enemy( this.context, this.canvas,{position: {x: 12020, y: 100}, velocity: {x: 3, y: 0}, distance: {limit: 300, traveled: 0}} )
    ];
    return enemies
  }

  gameOver() {
    this.context.fillStyle = "black";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.fillStyle = "white";
    this.context.font = "50px Arial";
    this.context.textAlign = "center";
    this.context.fillText("Game Over", this.canvas.width / 2, this.canvas.height / 2);
    this.removeEventListeners()
    this.speed = 0
    this.velocity.x = 0
    this.velocity.y = 0
    this.currentSprite === this.sprites.stand.right
    this.restartBtn.style.display = "block";
    audio.gameOver.play();

  }

  gameWin() {
    this.context.font = "50px Arial";
    this.context.textAlign = "center";
    this.context.fillText("You won!!!", this.canvas.width / 2, this.canvas.height / 2);
    this.removeEventListeners()
    this.restartBtn.style.display = "block";
  }

}


export default Player;