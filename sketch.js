const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1200, 800);

	engine = Engine.create();
	world = engine.world;
	
	paper1 = new Paper(100,100,70);
	ground = new Ground(400, 780, 1600, 20);
	dustbin1 = new Dustbin(900, 690, 100, 100);
	dustbin2 = new Dustbin(880, 680, 20, 110);
	dustbin3 = new Dustbin(1000, 680, 20, 110);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  drawSprites();
  paper1.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
}

function keyPressed() {
	if (keyCode===UP_ARROW) {
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:430, y:-500});
	}
}
