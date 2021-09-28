const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var firstboy_running, boyski_img
var skiboy;
var snow=[]

function preload(){
 backgroundImg=loadImage("snow1.jpg");
 firstboy_running=loadImage("1bou.png");    
 boyski_img=loadImage("skis.png");          
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  boy=Bodies.rectangle(600,280);
  World.add(world,boy);

  skiboy=Bodies.rectangle(400,280);
  World.add(world,skiboy);

  if(frameCount%50===0){
    console.log("hello");
    for(var s=0;s<200;s++){
      snow.push(new Snow(random(0,800),random(0,800)))
    }
  }
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(backgroundImg);
  

  imageMode(CENTER);
  image(firstboy_running,boy.position.x,boy.position.y,100,160);
  image(boyski_img,skiboy.position.x,skiboy.position.y, 230,350);
  
    for(var s=0;s<200;s++){
     //snow.push(new Snow(random(0,800),random(0,800)))
      snow[s].display();
      snow[s].update();
    }
       
    if(keyCode=== LEFT_ARROW){
      skiboy.position.x= skiboy.position.x-1.5
    }
    else if(keyCode=== RIGHT_ARROW){
      skiboy.position.x=skiboy.position.x+1.5
    }
  
    textSize(25);
    text("Press LEFT and RIGHT arrow", 325,400);
   
    

}