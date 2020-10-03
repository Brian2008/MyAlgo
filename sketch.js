var fixedRec,movingRec
var box1,box2
var box3,box4
function setup() {
  createCanvas(1000,1000);
  fixedRec=createSprite(200, 200, 50, 50);
  fixedRec.shapeColor="red"
  movingRec=createSprite(400, 200, 50, 50);
  movingRec.shapeColor="blue";
  box1=createSprite(600,300,50,50);
  box1.shapeColor="orange"
  box1.velocityY=3;
  box2=createSprite(600,600,50,50);
  box2.shapeColor="purple"
  box2.velocityY=-3;
  box3=createSprite(300,100,50,50);
  box3.shapeColor="hotpink"
  box3.velocityX=3;
  box4=createSprite(600,100,50,50);
  box4.shapeColor="yellow"
  box4.velocityX=-3;
  
}

function draw() {
  background(122,123,111);  
  movingRec.x=World.mouseX;
  movingRec.y=World.mouseY;
  if(movingRec.x-fixedRec.x < movingRec.width/2+fixedRec.width/2
    &&fixedRec.x-movingRec.x < movingRec.width/2+fixedRec.width/2
    &&movingRec.y-fixedRec.y < movingRec.height/2+fixedRec.height/2
    &&fixedRec.y-movingRec.y < movingRec.height/2+fixedRec.height/2)
  {
    movingRec.shapeColor="green";
    fixedRec.shapeColor="yellow";
  }
  else
  {
    fixedRec.shapeColor="red";
    movingRec.shapeColor="blue";
  }
  if(box1.y-box2.y < box1.height/2+box2.height/2
    &&box2.y-box1.y < box1.height/2+box2.height/2)
  {
box1.velocityY=box1.velocityY*(-1)
box2.velocityY=box2.velocityY*(-1)
  }
if(box3.x-box4.x < box3.width/2+box4.width/2
  &&box4.x-box3.x < box3.width/2+box4.width/2)
{
  box3.velocityX=box3.velocityX*(-1)
  box4.velocityX=box4.velocityX*(-1)
    
}
  
  drawSprites();
}