
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var man,img;

var cloudImage;

var background1, background2, background3, background4, background0;

var plane;

var gameState = 2;

var obstacle, obstacleImg;

var start, startImg;

var gameOver, gameOverimg;

var manx, obstaclex;

function preload()
{
  img = loadImage("skydiving-removebg-preview.png")
  
  cloudImage = loadImage("sky.jpg")
  
  planeImg = loadImage("aeroplanenobg.png")

  obstacleImg = loadImage("crownobg.png")

  startImg = loadImage("space to start.png")

  gameOverimg = loadImage("Game_Overnobg.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
  background1 = createSprite(400,-100,800,700);
  background1.addImage(cloudImage);
  
  plane = createSprite(400,10,800,700);
  plane.addImage(planeImg);
  plane.scale = 0.9;

  background1 = createSprite(400,350,800,700);
	background1.addImage(cloudImage);
	
  background2 = createSprite(400,800,800,700);
	background2.addImage(cloudImage);

  background3 = createSprite(400,1250,800,700);
  background3.addImage(cloudImage);
  
  background4 = createSprite(400,1700,800,700);
  background4.addImage(cloudImage);
  
  start = createSprite(400,150,20,50);
  start.addImage(startImg);
  start.scale = 0.5;
  start.visible = true;

  man = createSprite(400,100,20,50);
  man.addImage(img);
  man.scale = 0.3;
  man.visible = false;

  manx = createSprite(400,100,20,50);
  manx.addImage(img);
  manx.scale = 0.3;
  manx.visible = false;

  obstacle = createSprite(1000,1000,20,50);
  obstacle.addImage(obstacleImg);
  obstacle.scale = 0.2;
  obstacle.visible = true;

  obstaclex = createSprite(1000,1000,20,50);
  obstaclex.addImage(obstacleImg);
  obstaclex.scale = 0.2;
  obstaclex.visible = true;

  gameOver = createSprite(1000,1000,20,50);
  gameOver.addImage(gameOverimg);
  gameOver.scale = 0.2;
  gameOver.visible = false;


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

manx.y = man.y
manx.x = man.x


obstaclex.x = obstacle.x
 
  if(man.y>1400){
	man.y = 500
}

obstacle.velocityX = -9

if(camera.y>1500){
  obstacle.x = random(600,800)
  obstacle.scale = random(0.1,0.3)
  obstacle.velocityX = random(-11,-7)
}

  man.velocityY = 0
  camera.position.y = man.y+150

  if(keyCode === 32){
    gameState = 1
  }

  if(gameState === 1){
    man.visible = true
    man.velocityY = 11;
  }

  if(keyCode === RIGHT_ARROW){
	  man.velocityX = 7
  }
  if(keyCode === LEFT_ARROW){
	man.velocityX = -7
}

  if(man.x>800||man.x<0){
	  man.x = 400
	  man.velocityX = 0
	  
  }

  if (manx.x - obstaclex.x < obstaclex.width/2 + manx.width/2
    &&obstaclex.x - manx.x < obstaclex.width/2 + manx.width/2
    && manx.y - obstaclex.y < obstaclex.height/2 + manx.height/2
    &&obstaclex.y - manx.y < obstaclex.height/2 + manx.height/2) {
      console.log(manx.x);
    gameState = 0;
    }

    if(gameState === 0){
      man.velocityX = 0;
      man.velocityY = 0;
      obstacle.velocityX = 0;
      gameOver.x = man.x;
      gameOver.visible = true
    }

  drawSprites();
 
}



