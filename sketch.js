var score =0;
var gun,bluebubble,redbubble, bullet, backBoard;
var gunImg,bubbleImg, bulletImg, blastImg, backBoardImg;
var redBubbleGroup, redBubbleGroup, bulletGroup;
var bullet;
var life =3;
var score=0;
var gameState=1
var blast;

function preload(){
  gunImg = loadImage("gun1.png")
  blastImg = loadImage("blast.png")
  bulletImg = loadImage("bullet1.png")
  blueBubbleImg = loadImage("waterBubble.png")
  redBubbleImg = loadImage("redbubble.png")
  backBoardImg= loadImage("back.jpg")
}
function setup() {
  createCanvas(800, 800);

  backBoard= createSprite(50, width/2, 100,height);
  backBoard.addImage(backBoardImg)
  
  gun= createSprite(100, height/2, 50,50);
  gun.addImage(gunImg)
  gun.scale=0.2
  
  bulletGroup = createGroup();   
  blueBubbleGroup = createGroup();   
  redBubbleGroup = createGroup();   
  
  heading=createElement("h2");
  scoreBoard=createElement("h1")
}

function draw() {
  background("#BDA297");

  //display Score and number of lifes
heading.html("life="+life);
heading.position(width/2-200,20)

scoreBoard.html("score="+score);
scoreBoard.position(width/2-200,40)

  if(gameState===1){
    gun.y=mouseY  
   if(keyDown("space")){
     shootBullet();
   }
    drawredBubble();
    drawblueBubble();
    
  
   if(bulletGroup.collide(blueBubbleGroup)){
     handleBubbleCollision(blueBubbleGroup)
   }
   if(bulletGroup.collide(redBubbleGroup)){
    handleBubbleCollision(redBubbleGroup)
  }
  if(blueBubbleGroup.collide(backBoard)){
    handleBubbleCollision(blueBubbleGroup)
  }
  if(redBubbleGroup.collide(backBoard)){
   handleBubbleCollision(redBubbleGroup)
 }
 
 if(blueBubbleGroup.collide(backBoard)){
   life-=1;
   blueBubbleGroup.destroyEach();
   
 }
    drawSprites();
  }
     
}
function shootBullet(){
   bullet=createSprite(gun.x,gun.y-40)
   bullet.addImage(bulletImg);
   bullet.velocityX=2;
   bullet.scale=0.2
   bulletGroup.add(bullet)
}
function drawblueBubble(){
  if(frameCount%80===0){
    bluebubble=createSprite(800,random(20,780))
    bluebubble.addImage(blueBubbleImg)
    bluebubble.scale=0.1;
    bluebubble.velocityX=-4
    blueBubbleGroup.add(bluebubble);
  }
}
function drawredBubble(){
  if(frameCount%100===0){
    redbubble=createSprite(800,random(20,720))
    redbubble.addImage(redBubbleImg)
    redbubble.scale=0.1
    redbubble.velocityX=-4
    redBubbleGroup.add(redbubble);
  }
}
function handleBubbleCollision(bubbleGroup){
  if(life>0){
    score+=1
  }
   blast=createSprite(bullet.x,bullet.y)
   blast.addImage(blastImg);
   blast.scale=0.5
   blast.lifetime=20;

   bubbleGroup.destroyEach();
   bulletGroup.destroyEach();
}
