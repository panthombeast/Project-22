
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	groundObj = new ground(width/2,670,width,20);

	leftSide = new ground(1100,600,20,120);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:0.3,
		restitution:0.3,
		density:1.2
		

	}


	ball=Bodies.circle(100,200,20,ball_options);
	World.add(world,ball);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  

  drawSprites();

  ellipse(ball.position.x,ball.position.y,20);
  


 
  ground.show();
  leftSide.show();

}

function vForce(){
	Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
  }


  function keyPressed(){
	if(keyCode === UP_ARROW){
	  vForce();
	}
}
