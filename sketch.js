var wall,thickness;
var bullet,speed,weight;
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 100, 50);
  bullet.shapeColor = ("white");
  wall=createSprite(1200, 200, 60, height/2);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet.velocityX=speed;
}

function draw() {
  background("black"); 
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  } 

  hasCollided();

  drawSprites();
  
}

function hasCollided(Lbullet,Lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdg=lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}