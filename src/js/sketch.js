
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof, bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,100,700,70)
	bobObject1 = new Bob(400,600)
	bobObject2 = new Bob(500,600)
	bobObject3 = new Bob(600,600)
	bobObject4 = new Bob(300,600)
	bobObject5 = new Bob(200,600)

	rope1 = new Rope(bobObject1.body,roof.body,0,0)
	rope2 = new Rope(bobObject2.body,roof.body,100,0)
	rope3 = new Rope(bobObject3.body,roof.body,200,0)
	rope4 = new Rope(bobObject4.body,roof.body,-100,0)
	rope5 = new Rope(bobObject5.body,roof.body,-200,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === 32){
		Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:-1000,y:0})
	}
}

