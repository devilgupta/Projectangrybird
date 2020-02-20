const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var engine,world;
var ground,holder;
var box1,box2,box3,box4,box5,box6;
var box7,box8,box9,box10,box11,box12;


function setup(){
  createCanvas(800,400);
 engine=Engine.create();
 world=engine.world;

 var groundop={
   isStatic:true
 }

 var holderop={
   isStatic: true
 }

 ground=Bodies.rectangle(400,390,800,20,groundop);
 World.add(world,ground);

 holder=Bodies.rectangle(600,180,350,20,holderop);
 World.add(world,holder);
 box1=new Box(550,320);
 box2=new Box(600,320);
 box3=new Box(650,320);
 box4=new Box(575,270);
 box5=new Box(625,270);
 box6=new Box(600,230);
 box7=new Box(600,230);
 box8=new Box(600,230);
 box9=new Box(600,230);
 box10=new Box(600,230);
 box11=new Box(600,230);
 box12=new Box(600,230);



}

function draw() {
  background(0,0,0);  
  Engine.update(engine);
  fill("green");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  fill("green");
  rectMode(CENTER);
  rect(holder.position.x,holder.position.y,350,20);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  drawSprites();
}

 
 