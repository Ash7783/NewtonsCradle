
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1;
var pend1, pend2, pend3, pend4, pend5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(400,600)
	bobObject2 = new Bob(500,600)
	bobObject3 = new Bob(600,600)
	bobObject4 = new Bob(300,600)
	bobObject5 = new Bob(200,600)

	pend1 = new Pendulum(bobObject1,{x:400,y:150});
	pend2 = new Pendulum(bobObject2,{x:500,y:150});
	pend3 = new Pendulum(bobObject3,{x:600,y:150});
	pend4 = new Pendulum(bobObject4,{x:300,y:150});
	pend5 = new Pendulum(bobObject5,{x:200,y:150});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  pend1.display();
  pend2.display();
  pend3.display();
  pend4.display();
  pend5.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === 32){
		Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:-1000,y:0})
	}
}