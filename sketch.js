var fixed_rect,moving_rect;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
 fixed_rect= createSprite(400, 400, 50, 80);
 fixed_rect.shapeColor="green";
 fixed_rect.debug=true;

 moving_rect=createSprite(800,200,80,30);
 moving_rect.shapeColor="green";
 moving_rect.debug=true;
 
 gameObject1=createSprite(100,100,50,50);
 gameObject1.shapeColor="yellow";

 gameObject2=createSprite(200,100,50,50);
 gameObject2.shapeColor="green";
 
 gameObject3=createSprite(300,100,50,50);
 gameObject3.shapeColor="green";

 gameObject4=createSprite(400,100,50,50);
 gameObject4.velocityY=-3;
 gameObject4.shapeColor="green";
}

function draw() {
  background(255,255,255);  

  moving_rect.x=World.mouseX;
  moving_rect.y=World.mouseY;
 
  // 
if(Objects_touch(moving_rect,gameObject1))  
{
  moving_rect.shapeColor="red";
 gameObject1.shapeColor="red";
}
else {
  moving_rect.shapeColor="black";
  gameObject1.shapeColor="black";
}
  
objects_bouncing(fixed_rect,gameObject4);
  drawSprites();
}

