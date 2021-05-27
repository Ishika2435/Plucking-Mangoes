
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy, stone, tree, ground;
var mango1, mango2, mango3, mango4, mango5;

function preload()
{
	boy = loadImage(".../Pluckin+mangoes/Plucking mangoes/boy.png");
	mango = loadImage(".../Pluckin+mangoes/Plucking mangoes/mango.png");
	stone = loadImage(".../Pluckin+mangoes/Plucking mangoes/stone.png");
	tree = loadImage(".../Pluckin+mangoes/Plucking mangoes/tree.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  drawSprites();
 
}

function decetcetollision(Lstone, Lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false);
	}
}

