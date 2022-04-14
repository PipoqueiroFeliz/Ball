// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}


// function to generate random color



function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Ball{
    constructor(x, y, velX, velY, color, size) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.size = size;
        this.colisions = 0
    }

    bananaDraw(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 0.5 * Math.PI);
        ctx.fill();  
      }

      draw(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
      }

      update(){
        if ((this.x + this.size) >= width) {
          this.velX = -(this.velX);
          this.x = width - this.size - 1
        }
      
        if ((this.x - this.size) <= 0) {
          this.velX = -(this.velX);
          this.x = this.size + 1
        }
      
        if ((this.y + this.size) >= height) {
          this.velY = -(this.velY);
          this.y = height - this.size - 1

        }
      
        if ((this.y - this.size) <= 0) {
          this.velY = -(this.velY);
          this.y = this.size + 1

        }
      
        this.x += this.velX;
        this.y += this.velY;
      }
      
      collisionDetect(){
        for (let j = 0; j < balls.length; j++) {
          if (!(this === balls[j])) {
            const dx = this.x - balls[j].x;
            const dy = this.y - balls[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
      
            if (distance < this.size + balls[j].size) {
              mudaRota(balls[j],this)
              colisioned()
              addBallColisionCounter(this,balls[j])
              changeColor(this.color,balls[j])
            }
          }
        }
      }
}



  function mudaRota(ball1,ball2){
      if(!isCannabied){
        ball1.velX = -(ball1.velX)
        ball2.velX = -(ball2.velX)
        ball1.velY = -(ball1.velY)
        ball2.velY = -(ball2.velY)

        ball1.x += 2*ball1.velX
        ball2.x += 2*ball2.velX
        ball1.y += 2*ball1.velY
        ball2.y += 2*ball2.velY
      }else{
            cannabisRota(ball1,ball2)
            console.log(ball1,ball2)
    }

  }



  let balls = [];
while (balls.length < 5) {
  addBola()
}

function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';//0,09
    ctx.fillRect(0, 0, width, height);
  
    for (let i = 0; i < balls.length; i++) {
        if(isBananed){
            balls[i].bananaDraw()
        }else{balls[i].draw();}

        if(!isGhosted){
            balls[i].collisionDetect()
        }

      balls[i].update();
    }
  
    requestAnimationFrame(loop);
  }

  loop()