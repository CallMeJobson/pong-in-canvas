var canvas;
var canvasContext
var ballX = 50
var ballSpeedX = 15;
window.onload = function(){
    canvas = document.getElementById("gameCanvas");
    canvasContext = canvas.getContext("2d");

    
    var framesPerSecond = 30
    setInterval(function(){
        moveEverything();
        drawEverything();
    }, 1000/ framesPerSecond)
    
    
}


function moveEverything(){
    ballX += ballSpeedX;
    
    //Collision detection 
    if(ballX > canvas.width){
        ballSpeedX = -ballSpeedX
    }
    if(ballX < 0){
        ballSpeedX = -ballSpeedX
    }
}

function drawEverything(){
    
    canvasContext.fillStyle = 'black';
    //0 0 is the position of what we what to draw
    canvasContext.fillRect(0,0,canvas.width, canvas.height);

    canvasContext.fillStyle = 'white';
    //0 0 is the position of what we what to draw
    canvasContext.fillRect(0,200,10, 100);

    canvasContext.fillStyle = 'red';
    //0 0 is the position of what we what to draw
    canvasContext.fillRect(ballX,100,10, 10);

    

    //Draw order is important 
}