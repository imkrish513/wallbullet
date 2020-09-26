var bullet,wall;
var speed,weight;
var gameState,PLAY,END;
var thickness,thickness1,thickness2;
function setup() {
  createCanvas(1600,1000);
   bullet = createSprite(50, 100, 50, 50);
   wall = createSprite(1300,100,thickness,150)
   bullet1 = createSprite(50, 300, 50, 50);
   wall1 = createSprite(1300,300,thickness1,150)
   bullet2 = createSprite(50, 500, 50, 50);
   wall2 = createSprite(1300,500,thickness2,150)
   bullet3 = createSprite(50, 700, 50, 50);
   wall3 = createSprite(1300,700,thickness1,150)
  
   wall.shapeColor = "white"
   wall1.shapeColor = "white"
   wall2.shapeColor = "white"
   wall3.shapeColor = "white"
  speed= random(223,321)
  weight = random(30,50)
  speed1= random(223,321)
  weight1 = random(30,50)
  speed2= random(223,321)
  weight2 = random(30,50)
  speed3= random(223,321)
  weight3 = random(30,50)
  gameState = PLAY
  thickness = random(22,83)
  thickness1 = random(22,83)
  thickness2 = random(22,83)

}

function draw() {
  background(0);  
if(gameState === PLAY){ 
bullet.velocityX = speed
bullet1.velocityX = speed1
bullet2.velocityX = speed2
bullet3.velocityX = speed3

}
  
  
  if(collide(bullet,wall)){
  
      bullet.velocityX = 0;
     var damage = (0.5 *weight1*speed*speed3)/(thickness*thickness1*thickness2);
     if(damage>12.43){
      wall.shapeColor = "red"
      gameState = END
  }
  
  if(damage<12.43){
  
  wall.shapeColor = "green"
  gameState = END
  
  }
  
  } 

  if(collide(bullet1,wall1)){
    bullet1.velocityX = 0;
    var damage1 = (0.5 *weight2*speed2*speed1)/(thickness*thickness1*thickness2);
    if(damage1>12.43){
    wall1.shapeColor = "red"
    gameState = END
}

if(damage1<12.43){

wall1.shapeColor = "green"
gameState = END

}

} 
if(collide(bullet2,wall2)){
  bullet2.velocityX = 0;
  var damage2 = (0.5 *weight1*speed3*speed)/(thickness*thickness1*thickness2);
  if(damage2>12.43){
    wall2.shapeColor = "red"
    gameState = END
}

if(damage2<12.43){

wall2.shapeColor = "green"
gameState = END

}

} 

if(collide(bullet3,wall3)){
  bullet3.velocityX = 0;
  var damage3 = (0.5 *weight*speed3*speed2)/(thickness*thickness1*thickness2);
  if(damage3>12.43){
    wall3.shapeColor = "red"
    gameState = END
}

if(damage3<12.43){

wall3.shapeColor = "green"
gameState = END

}

} 



if(gameState === END){
text("Press R To Restart",500,300)
if(keyDown("r")&&gameState ===END){
bullet.x = 50;
bullet1.x = 50;
bullet2.x = 50;
bullet3.x = 50;
gameState = PLAY
speed= random(223,321)
  weight = random(30,50)
  speed1= random(223,321)
  weight1 = random(30,50)
  speed2= random(223,321)
  weight2 = random(30,50)
  speed3= random(223,321)
  weight3 = random(30,50)
  wall.shapeColor = "grey"
  wall1.shapeColor = "grey"
  wall2.shapeColor = "grey"
  wall3.shapeColor = "grey"
  thickness = random(22,83)
  thickness1 = random(22,83)
  thickness2 = random(22,83)
}

} 
drawSprites();
}

function collide(){
bulletEdge = bullet.x + bullet.width
wallEdge = wall.x
if(bulletEdge >=wallEdge){
return true

}
else{
  return false;
}
}