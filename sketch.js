var mar
var navio 
var maar
var barco
function preload(){
mar = loadImage("sea.png");
navio = loadAnimation("ship-1.png","ship-2.png");
}

function setup(){
  createCanvas(400,400);
  maar = createSprite(200,200);
  maar.addImage(mar);
  maar.scale = 0.3
  barco = createSprite(200,200);
  barco.addAnimation("navegando",navio);
 barco.scale = 0.2
}

function draw() {
  background("blue");
    drawSprites();
maar.velocityX = - 9
if(maar.x < 0){
   maar.x = 200;
}
 
}
