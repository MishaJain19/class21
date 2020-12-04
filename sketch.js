var fixRect,movingRect;
var gameOb1,gameOb2,gameOb3,gameOb4;

function setup() {
  createCanvas(1200,800);
  fixRect=createSprite(200, 200, 50, 80);
  fixRect.shapeColor="green";
  fixRect.debug=true;
  movingRect=createSprite(800,200,80,30);
  movingRect.shapeColor="green";
  movingRect.debug=true;

  gameOb1 = createSprite(100,100,50,50);
  gameOb1.shapeColor = "green";
  gameOb2 = createSprite(200,100,50,50);
  gameOb2.shapeColor = "green";
  gameOb3 = createSprite(300,100,50,50);
  gameOb3.shapeColor = "green";
  gameOb4 = createSprite(400,100,50,50);
  gameOb4.shapeColor = "green";
  movingRect.velocityX=-5;
  fixRect.velocityX=5;
 
}

function draw() {
  background(0,0,0); 
  
  
  

 bounceOff(movingRect,fixRect);
  drawSprites();
}
