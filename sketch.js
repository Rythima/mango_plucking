
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;
var options={
	isStatic:false,
	restitution:0,
	friction:1,
	density:1.2
}

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();

  groundObject.display();
   detectollision(stoneObj,mango1);
   detectollision(stoneObj,mango2);
   detectollision(stoneObj,mango3);
   detectollision(stoneObj,mango4);
   detectollision(stoneObj,mango5);
  
  function keyPressed(){
	  if (keyCode=== 32) {
		  Matter.Body.setPosition(stoneObj.body, {x:235,y:420})
		  launcherObject.attach(stoneObj.body);
	  }
  }
  function detectollision(lstone,lmango){
	  mangoBodyPosition=lmango.body.Position
	  stoneBodyPosition=lstone.Body.Position

	  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	  if(distance<=lmango.r+lstone.r)
	  {
		  Matter.Body.setStatic(lmango.body,false);
	  }

  }
}
