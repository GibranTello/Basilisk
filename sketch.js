var basilisk;
var basilisk;
var obstacleImage;
var backgroungImage;
var invisibleGround;
var score;
var obstacleGroup;


function preload(){
basilisk = loadImage("basilisco2.png"); 
basilisk = loadImage("basilisco3.png"); 
scene = loadImage("Scene.png"); 
obstacle = loadImage("Rock.png"); 
}

function setup() {
createCanvas(600, 200);2

scene = createSprite(0,0,400,400);
scene.addAnimation("backgroundImage");
scene.scale = 2.5;

basilisk = createSprite(50,180,20,50);
basilisk.addAnimation("basilisk", basilisk);
basilisk.addAnimation("basilisk", basilisk);
basilisk.scale = 0.5;

invisibleGround = createSprite(200,190,400,10);
invisibleGround.visible = true;
}

function draw() {
 background(0);
 
 scene.velocityX = -3

 if (scene.x < 0){
   scene.x = scene.width/2;
 }

 text("Puntuación: "+ score, 500,50);                  
                    
  score = score + Math.round(frameCount/60);  

  if(keyDown("space")&& basilisk.y >= 100) {
    basilisk.velocityY = -13;
  }

  basilisk.velocityY = basilisk.velocityY + 0.8
  if (scene.x < 0){
    scene.x = scene.width/2;
  }
  basilisk.collide(invisibleGround);

  spawnObstacles();

  basilisk.display();
}


function spawnObstacles(){                         
    if (frameCount % 60 === 0){
       
      var obstacle = createSprite(600,165,10,40);     
                       
                      
      obstacle.velocityX = -4;                     
   
      
       
       var rand = Math.round(random(1,6));            
       switch(rand) {                                 
         case 1: obstacle.addImage(obstacleImage);        
                 break; 
       }
                  
       obstacle.scale = 0.5;                           
       obstacle.lifetime = 300;                        
    }
   }