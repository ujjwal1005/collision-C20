var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(600, 200, 50, 100);
  movingRect.shapeColor= "yellow";
  movingRect.debug = "true";
  fixedRect = createSprite(400, 200, 100, 50);
  fixedRect.shapeColor = "yellow";
  fixedRect.debug = "true";
}

function draw() {
  background(0); 
  
  movingRect.x = mouseX ;
  movingRect.y = mouseY ;

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
    movingRect.shapeColor= "green";
    fixedRect.shapeColor= "green";
  }
else
movingRect.shapeColor= "red";



  drawSprites();
}