var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);
  
  thickness = random(22,83);
  speed = random(30,52);
  weight = random(223,321);

  bullet = createSprite(50,200,100,50);
  bullet.velocityX = speed; 

  wall = createSprite(1200,200,thickness,200);
  wall.shapeColor = (80,80,80);
}

function draw() {
  background(255,255,255);  
  //car.collide(wall);
  
if(wall.x - bullet.x < (bullet.width + wall.width)/2){

  bullet.velocityX = 0;
  var damage = 
  0.5 * weight * speed * speed/(thickness * thickness * thickness);

  if(damage > 10){
    wall.shapeColor = "red";
  }
  if(damage < 10 ){
    wall.shapeColor = "green";
  }
/*if(damage < 100){
 bullet.shapeColor = "yellow";
}*/
}

  drawSprites();
}

function collided(){ 

bulletRightEdge = bullet.x + bullet.width;
wallLeftEdge = wall.x;
if(bulletRightEdge >= wallLeftEdge){
  return true;
}

return false;

}