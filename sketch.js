const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var btn1;
var btn2;

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  btn1 = createImg('right.png');
  btn1.position(220,30);
  btn1.size(50,50);
  btn1.mouseClicked(hForce);
  
  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);
//bottom
  ground =new Ground(200,590,2000,10);
//right
  right = new Ground(950,540,20,100);
//left
  left = new Ground(750,540,20,100);
//top
  top_wall = new Ground(200,20,400,20);

  var ball_options = {
    isStatic:false,
    restitution:0.3,
    friction:0,
    density:1.2
  }
  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world, ball);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ellipse(ball.position.x,ball.position.y,20);
  ground.show();
  //top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
}

function hForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}

function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}

function keyPressed(){
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball,ball.position,{x:65,y:-65});
  }
}

