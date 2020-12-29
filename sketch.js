var wall,thickness;
var bullet,speed,weight;
function setup() {
  createCanvas(1200,400);
  
  speed=random(203,301);
  weight=random(30,52);
  thickness=random(22,83);
   wall  = createSprite(1100, 200, 80, height/2);
  wall .shapeColor = "white";

  bullet = createSprite(200,200,50,10);
  bullet.shapeColor = "white";
  bullet.velocityX=speed;
  
 
}

function draw() {
  background(0,0,0);  
if(wall.x-bullet.x <(bullet.width+wall.width)/2)
{
bullet.velocityX=0;
var deformation=0.5*weight*speed*speed/(thickness*thickness*thickness);

if(deformation>10)
{
  wall.shapeColor=color(255,0,0);
}
if(deformation<10)
{
  wall.shapeColor=color(0,255,0);
}
}
drawSprites();
}

