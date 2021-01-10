const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(200,500);
	dustbin1 = new Dustbin(920,665, 160, 20);
	ground1 = new Ground(400, 690, 1600, 20);
	dustbin2 = new Dustbin(830, 600, 20, 110);
	dustbin3 = new Dustbin(1010, 600, 20, 110);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
  paper1.display();
  dustbin1.display();
  ground1.display();
  dustbin2.display();
  dustbin3.display();
}

function keyPressed() {
	if (keyCode===UP_ARROW) {
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:40, y:-40});
	}
}