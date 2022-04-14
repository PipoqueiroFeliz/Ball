const numOfColisionWeb = document.getElementById('colisioned')
let numOfColision = 0
function colisioned(){
    numOfColision++
    numOfColisionWeb.innerText = numOfColision
}

function addBallColisionCounter(ball1,ball2){
    ball1.colisions++
    ball2.colisions++
}

function showAllResults(){
    const retorno = balls.map(ball=>{
        return `Size: ${ball.size} - Velocity1: ${ball.velX} - Velocity2: ${ball.velY} - Colisions: ${ball.colisions}`
    })
    return retorno
}