var appleImg
var backgroundImg
var burgerImg
var chocolateImg
var icecreamImg
var pizzaImg
var waterbottleImg
var saladImg
var characterImg

var PLAY=1
var END=0
var gameState=PLAY 

var apple


var END
var character
var score=0

function preload(){
  appleImg= loadImage("./mygamefolder/apple.png")
backgroundImg= loadImage("./mygamefolder/background.gif")
burgerImg= loadImage("./mygamefolder/burger.png")
chocolateImg= loadImage("./mygamefolder/chocolate.png")
icecreamImg=loadImage("./mygamefolder/icecream.png")
pizzaImg= loadImage("./mygamefolder/pizza.png")
waterbottleImg= loadImage("./mygamefolder/waterbottle.png")
saladImg = loadImage("./mygamefolder/salad.png")
characterImg= loadAnimation("./mygamefolder/running character.gif")
groundImg= loadImage("./mygamefolder/ground2.png")
resetImg = loadImage("./mygamefolder/reset.png")
music = loadSound("./mygamefolder/music.mp3")
backgroundImg1= loadImage("./mygamefolder/backgroundImg1.jpeg")
backgroundImg2 = loadImage("./mygamefolder/backgroundImg2.jpeg")
}

function setup() {

  createCanvas(1900,1000);

 
  
  ground=createSprite(100,980,4000,40)
  ground.addImage("ground",groundImg)
  
character=createSprite(300,900,20,20)
character.addAnimation("character",characterImg)
character.scale=0.6

resetbtn=createSprite(1003,706)
resetbtn.addImage(resetImg)
resetbtn.visible=false

music.play()
music.setVolume(0.2)

badfoodgroup=new Group()

healthyfoodgroup= new Group()
character.debug=true
}



function draw() {
  background(backgroundImg); 
  text(mouseX + "," +mouseY , mouseX, mouseY)
  textSize(100)
text("Score "+ score,22,90) 
 if(gameState===PLAY){
  ground.velocityX=-10
 

  character.y=mouseY
  if(character.y>886){
    character.y=886
    }
  
    if(character.y<100){
      character.y=100
    }
    
    if (ground.x<0){
      ground.x=ground.width/2
     }

     if(score>=10){
      healthyfoodgroup.velocityX+=500
      badfoodgroup.velocityX+=500
     }

if(score>50){
  background(backgroundImg1)
  
  text("Youre In the Green Zone Now!!!, ", 500,500)
}



  spawnbadfood()
     spawnhealthyfood()
 
if(healthyfoodgroup.isTouching(character)){
  score+=10
healthyfoodgroup.destroyEach()
//ealthyfoodgroup.setVelocityXEach+=500


}



  if (badfoodgroup.isTouching(character)){
    gameState=END
    textSize(100)
    //
  }
  drawSprites();
  textSize(100)
  text("Score "+ score,22,90) 
}

else if(gameState===END){
  ground.velocityX=0
  badfoodgroup.setVelocityXEach(0)
  healthyfoodgroup.setVelocityXEach(0)
 badfoodgroup.setLifetimeEach(-1)
 healthyfoodgroup.setLifetimeEach(-1)
 textSize(120)
 text("GAME OVER",590,512)
 resetbtn.visible=true
 music.stop()
 if(mousePressedOver(resetbtn)){
  reset()

 }
}


  
 
  
} 


function spawnhealthyfood(){
  if (frameCount%100===0){
    Hfood=createSprite(2000,random( 1000,160),20,20)
    Hfood.scale=0.3
Hfood.lifetime=200
    Hfood.velocityX=-(10+12*score/100)
    var rand=Math.round(random(1,3));
    switch(rand){
      case 1: Hfood.addImage(saladImg);
      break;
      case 2: Hfood.addImage(appleImg);
      break;
      case 3: Hfood.addImage(waterbottleImg);
      break;
      
      default : break
    }
    healthyfoodgroup.add(Hfood)
  }
}


function reset(){
gameState=PLAY;
badfoodgroup.destroyEach()
healthyfoodgroup.destroyEach()
resetbtn.visible=false
music.play()
}

function spawnbadfood(){
  if (frameCount%70===0){
    Bfood=createSprite(2000,random(800,180),20,20)
    Bfood.scale=0.3
Bfood.lifetime=200
    Bfood.velocityX=-(10+12*score/100)
    var rand=Math.round(random(1,3));
    switch(rand){
      case 1: Bfood.addImage(chocolateImg);
      break;
      case 2: Bfood.addImage(pizzaImg);
      break;
      case 3: Bfood.addImage(icecreamImg);
      break;
      
      default : break
    }
    badfoodgroup.add(Bfood)
  }
}
