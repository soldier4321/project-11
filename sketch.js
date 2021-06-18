var boat,boat_moving;
var sea,seaImage;

function preload(){
  boat_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(50,200,200,10);
  sea.addImage("seaLabel", seaImage);
  
  sea.x=200
  boat = createSprite(90,300,20,50);
  boat.addAnimation("boating", boat_moving);
  boat.scale = 0.2;
 
}


function draw(){
  background("white");
  sea.velocityX=-5
 if(sea.x<0){
  sea.x=sea.width/2
  console.log(boat.y)
}
   drawSprites();
}