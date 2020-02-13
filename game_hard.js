var canvas = document.getElementById("gamez");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 6;
var dy = -6;
var ballRadius = 3;
var paddleHeight = 10;
var paddleWidth = 40;
var paddleX = (canvas.width-paddleWidth)/2;
var brickRowCount = 7;
var brickColumnCount = 7;
var brickWidth = 50;
var brickHeight = 15;
var brickPadding = 35;
var brickOffsetTop = 30;
var brickOffsetLeft = 20;
var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
var rightPressed = false;
var leftPressed = false;
var score = 0;
var lives = 1;
let paused= true;
var bricks = [];

    for(var c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(var r=0; r<brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
    }
                    
function drawBall() {
ctx.beginPath();
ctx.arc(x, y, ballRadius, 0, Math.PI*2);
ctx.fillStyle = "#f65044";
ctx.fill();
ctx.closePath();
}
function drawPaddle() {
ctx.beginPath();
ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
ctx.fillStyle = "#f65044";
ctx.fill();
ctx.closePath();
}
function drawBricks() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            if(bricks[c][r].status == 1) {
            var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
            var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = "#f65044";
            ctx.fill();
            ctx.closePath();
            }
        }
    }
}

function draw() {
    if(!paused){                     
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawScore();
    drawLives();
    drawPaddle();
    collisionDetection();
    x += dx;
    y += dy;
        if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
        }
            if(y + dy < ballRadius) {
            dy = -dy;
            } 
                else if(y + dy > canvas.height-ballRadius) {
                            if(x > paddleX && x < paddleX + paddleWidth) {
                                dy = -dy;
                            }
                            else {
                                lives--;
                                if(!lives) {
                                    alert("You loose");
                                    document.location.reload();
                                }
                                else {
                                    x = canvas.width/2;
                                    y = canvas.height-30;
                                    dx = 2;
                                    dy = -2;
                                    paddleX = (canvas.width-paddleWidth)/2;
                                }
                            }
                        }
                        
                        if(rightPressed && paddleX < canvas.width-paddleWidth) {
                            paddleX += 7;
                        }
                        else if(leftPressed && paddleX > 0) {
                            paddleX -= 7;
                        }
                        
                        requestAnimationFrame(draw);
                        }
                    }
document.addEventListener("mousemove", mouseMoveHandler, false);
function mouseMoveHandler(e) {
var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth/2;
    }
}
function collisionDetection() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
        var b = bricks[c][r];
            if(b.status == 1) {
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                dy = -dy;
                b.status = 0;
                score++;
                    if(score == brickRowCount*brickColumnCount) {
                    alert("You win");
                    document.location.reload();
                    }
                }
            }
        }
    }
}
function drawScore() {
ctx.font = "16px Arial";
ctx.fillStyle = "#f35047";
ctx.fillText("Score: "+score, 8, 20);
}
function drawLives() {
ctx.font = "16px Arial";
ctx.fillStyle = "#f77844";
ctx.fillText("Lives: "+lives, canvas.width-69, 20);
}
function togglePause()
{ 
    if (paused===true){
    paused=false;
    draw();
    }
    else
    if (paused ===false){
    paused= true;  
    }
}