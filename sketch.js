const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var roof;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	Matter.Body.create(Bob);

    roofObject = new Roof(400, 100, 600, 20);
	
    bobObject1 = new Bob(300,380);
    bobObject2 = new Bob(400,380);
	  bobObject3 = new Bob(500,380);
  	bobObject4 = new Bob(600,380);
	  bobObject5 = new Bob(700,380);

    rope1 = new Rope(bobObject1.body,-2*roofObject.body,200,100);
    rope2 = new Rope(bobObject2.body, -1*roofObject.body,300,100);
    rope3 = new Rope(bobObject3.body, 0,400,100);
    rope4 = new Rope(bobObject4.body, 1*roofObject.body,500,100);
    rope5 = new Rope(bobObject5.body, 2*roofObject.body,600,100);
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");

  Engine.update(engine);
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display(); 
  bobObject1.display();  
  bobObject2.display();  
  bobObject3.display();  
  bobObject4.display();  
  bobObject5.display();  
  roofObject.display();

  drawSprites();
 
}

function keyPressed(){
  if (keyCode === UP_ARROW){

      Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x: -200, y: -54})

  }
}


