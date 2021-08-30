
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var score=0;
var roof;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof();

	bob1 = new Bob(300,300);
	bob2 = new Bob(350,300);
	bob3 = new Bob(400,300);
	bob4 = new Bob(450,300);
	bob5 = new Bob(500,300);

	
	text("score:",score,20,20);
	
	// rope1 = new Rope1(bob1.body,{x:300 ,y:100}); 
	
	rope1 = new Rope(bob1.body,roof.body,-100);
	rope2 = new Rope(bob2.body,roof.body,-50);
	rope3 = new Rope(bob3.body,roof.body,0);
	rope4 = new Rope(bob4.body,roof.body,50);
	rope5 = new Rope(bob5.body,roof.body,100);



	Engine.run(engine);
  
}


function draw() {

//Engine.update(engine);
  rectMode(CENTER);
  background(0);

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position, {x:-50, y: -50});
	}
}

