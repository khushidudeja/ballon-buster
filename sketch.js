var balloon_R,balloon_G,balloon_B,balloon_P,PLAY,END;

function preload(){
 //load your images here 
  background=loadImage("background0.png");
  balloon_G=loadImage("green_balloon0.png");
  balloon_B=loadImage("blue_balloon0.png");
  balloon_P=loadImage("pink_balloon0.png");
  balloon_R=loadImage("red_balloon0.png")
  bowImage=loadImage("bow0.png");
  arrowImage=loadImage("arrow0.png");
  
}

function setup() {
  createCanvas(600, 600);  
  
  //add code here
  backgroundImage=createSprite(100,100,600,600);
  backgroundImage.addImage("playground",background);
  backgroundImage.scale=2.5;
  
  bow = createSprite(480,220,20,50); 
  bow.addImage(bowImage); 
  bow.scale = 1;
  
 gameState = PLAY;
 gameState = END;
  
 score=0;

redB = new Group();
greenB = new Group();
blueB = new Group();
pinkB = new Group();
arrowGroup = new Group();
}

function draw() {
  //add code here
  backgroundImage.velocityX=-4; 
  if(backgroundImage.x<0){
    backgroundImage.x=backgroundImage.width/2;
  }
  
  if(gameState === PLAY){
    if(mouseDown("leftButton")){
  var arrow=createSprite(440,220,100,5);
  arrow.addImage("arrow",arrowImage);
  arrow.scale=0.3;  
  arrow.velocityX=-10;
  arrow.y=bow.y;
  arrowGroup.add(arrow);
  
  }
  
  bow.y=World.mouseY;
    
if (frameCount % 40 === 0) { 
redBalloon();
greenBalloon();
blueBalloon();
pinkBalloon();
} 
    
if(arrowGroup.isTouching(redB)){
  redB.destroyEach();
  arrowGroup.destroyEach();
  score=score+1;
} 
    
if(arrowGroup.isTouching(greenB)){
  greenB.destroyEach();
  arrowGroup.destroyEach();
  score=score+1;
}
    
if(arrowGroup.isTouching(blueB)){
  blueB.destroyEach();
  arrowGroup.destroyEach();
  score=score+1;
}
    
if(arrowGroup.isTouching(pinkB)){
  pinkB.destroyEach();
  arrowGroup.destroyEach();
  score=score+1;
}

}  
drawSprites();
text("Score: "+score,500,50);

}

function redBalloon(){
if (frameCount % 60 === 0) {
var red = createSprite(0,0,40,10);
red.addImage(balloon_R);
red.y = Math.round(random(15,400));
red.scale = 0.1;
red.velocityX = 2;
red.lifetime=150;
redB.add(red);
}
}

function greenBalloon(){
if (frameCount % 60 === 0) {
var greenBalloon = createSprite(20,20,40,10);
greenBalloon.addImage(balloon_G);
greenBalloon.y = Math.round(random(20,405));
greenBalloon.scale = 0.1;
greenBalloon.velocityX = 2;
greenBalloon.lifetime=150;
greenB.add(greenBalloon);
}
}

function blueBalloon(){
if (frameCount % 60 === 0) {
var blueBalloon = createSprite(40,40,40,10);
blueBalloon.addImage(balloon_B);
blueBalloon.y = Math.round(random(25,410));
blueBalloon.scale = 0.1;
blueBalloon.velocityX = 2;
blueBalloon.lifetime=150;
blueB.add(blueBalloon);
}
}

function pinkBalloon(){
if (frameCount % 60 === 0) {
var pinkBalloon = createSprite(60,60,40,10);
pinkBalloon.addImage(balloon_P);
pinkBalloon.y = Math.round(random(30,415));
pinkBalloon.scale = 1;
pinkBalloon.velocityX = 2;
pinkBalloon.lifetime=150;
pinkB.add(pinkBalloon);
}
}