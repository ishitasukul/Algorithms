var fixedRect, movingRect;


function setup() {
  createCanvas(1200,800);
  fixedRect= createSprite(400, 200, 80, 80);
  fixedRect.shapeColor="pink";
  movingRect=createSprite(700, 200, 60, 80);
  movingRect.shapeColor="orange";

  movingRect.debug=true;
  fixedRect.debug=true;

}

function draw() {
  background(0);
   movingRect.x= World.mouseX;
   movingRect.y= World.mouseY;
   
   if(fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && 
    movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && 
    movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
   } else {
    fixedRect.shapeColor="pink";
    movingRect.shapeColor="orange";

   }

   

  drawSprites();
}





