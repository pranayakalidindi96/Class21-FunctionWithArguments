var fixedRect, movingRect;
var ob1, ob2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  ob1 = createSprite(100, 100, 50, 50);
  ob1.shapeColor = "green";
  ob2 = createSprite(200, 100, 50, 50);
  ob2.shapeColor = "green";

  ob1.velocityX = 2;
  ob2.velocityX = -2;

}

function draw() {
  background(0,0,0);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, ob1)){
    movingRect.shapeColor = "blue";
    ob1.shapeColor = "blue";
  }
  else {
    movingRect.shapeColor = "green";
    ob1.shapeColor = "green";
  }

  bounceOff(ob1,ob2);


  drawSprites();
}

