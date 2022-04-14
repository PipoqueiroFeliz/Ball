const qtdBall = document.getElementById('qtdBall')
const butao = document.getElementById('addBall')
butao.addEventListener('click',addBola)

function addBola(){
    let size = random(10,20);
    let ball = new Ball(
      // ball position always drawn at least one ball width
      // away from the edge of the canvas, to avoid drawing errors
      random(0 + size,width - size),
      random(0 + size,height - size),
      random(-7,12),
      random(-7,12),
      'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
      size
    );
  
    balls.push(ball);
    qtdBall.innerText = balls.length
    console.log('boinha foi add')
}

const mudaCor = document.getElementById('changeColor')
mudaCor.addEventListener('click',changeAllColor)
function changeAllColor(){
    let newColor =  'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')'
    balls.forEach(ball=>{
        ball.color = newColor
    })
}

const thanosButton = document.getElementById('thanosButton')
thanosButton.addEventListener('click',thanosMode)
function thanosMode(){
    let imparOuPar = Math.round(Math.random())
    const newBalls = balls.filter((ball,index)=>{
        if(index%2===imparOuPar){return true}
    })
    balls = newBalls
    qtdBall.innerText = balls.length
}


let isBananed = false
const bananaButton = document.getElementById('bananaButton')
bananaButton.addEventListener('click',bananaMode)
function bananaMode(){
    if(!isBananed){isBananed = true}else{isBananed = false}
    balls.forEach(ball=>{
        ball.color = 'rgb(255,255,0)'
        if(isGhosted){
            ball.color = 'rgb(255,255,0,0.45)'
        }
    })
    
}


let isGhosted = false
const ghostButton = document.getElementById('ghostButton')
ghostButton.addEventListener('click',ghostMode)
function ghostMode(){
    if(!isGhosted){
        isGhosted = true 
        balls.forEach(ball=>{
            let stringColor = ball.color
            ball.color = stringColor.slice(0,-1)+',0.45)'
        })
    }else{
        isGhosted = false
        balls.forEach(ball=>{
            let stringColor = ball.color
            ball.color = stringColor.slice(0,-6)+')'
        })
    }   
}

let isCoffied = false
function coffeMode(){
    if (!isCoffied){
        isCoffied = true
        balls.forEach(ball=>{
            ball.velX = 1.8*ball.velX
            ball.velY = 1.8*ball.velY
        })
    }else{
        isCoffied = false
        balls.forEach(ball=>{
            ball.velX = ball.velX/1.8
            ball.velY = ball.velY/1.8
        })
    }
}

let isCannabied = false
function cannabisMode(){
    if (!isCannabied){
        isCannabied = true
        balls.forEach(ball=>{
            ball.velX = 0.65*ball.velX
            ball.velY = 0.65*ball.velY
        })
    }else{
        isCannabied = false
        balls.forEach(ball=>{
            ball.velX = ball.velX/0.65
            ball.velY = ball.velY/0.65
        })
    }
}
function cannabisRota(b1,b2){
    b1.velX = -(b1.velX)
    b2.velX = (b1.velX)
    b1.velY = -(b2.velY)
    b2.velY = -(b2.velY)

    let distance = b1.size + b2.size + 2

    if(b1.y < height/2){
        b1.y = b1.y 
        b2.y = b1.y + distance
        b1.x = b1.x 
        b2.x = b1.x + distance
    }else{
        b1.y = b1.y 
        b2.y = b1.y - distance
        b1.x = b1.x 
        b2.x = b1.x - distance
    }
}

function changeColor(b1,b2){
    console.log('mudacor')
    if(!isBananed){
        b1.color = b2.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')';
  }
}