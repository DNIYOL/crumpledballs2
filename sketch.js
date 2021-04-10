var paperObject,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var b1,b2,b3;
var dustbin, db;


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	groundSprite=createSprite(width/2, height-65, width,10);
	groundSprite.shapeColor=color("cyan");

	


	engine = Engine.create();
	world = engine.world;
	
	//Create a Ground
	 ground = Bodies.rectangle(width/2, height-65, width, 10 , {isStatic:true} );
 	 World.add(world, ground);

	// DBR = Bodies.rectangle(640,height-160 ,150 ,180  , {isStatic:false} );
	// World.add(world, DBR);
	  

	 b1 = new Container(640,height-65,150,30);
	 b2 = new Container(560,height-160,20,180);
	 b3 = new Container(710,height-160,20,180);
    //  dustbin = new ContainerL(640,height-160,150,180);
	
	dustbin=createSprite(640, height-160, 150,180);
	// dustbin.shapeColor=color("blue");
	// dustbin.image = loadImage("sprites/dustbingreen.png");
	db = loadImage("sprites/dustbingreenT.png");
	dustbin.addImage(db);
	dustbin.scale=0.55;


    paperObject = new paper(100,600,70);
	Engine.run(engine);
  
}


function draw() {
  	rectMode(CENTER);
  	background(0);
	  paperObject.display(); 
	 b1.display(); 
     b2.display();
	 b3.display();
	
	//dustbin.display();

	


	  drawSprites();
	 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:80,y:-130});
	}
}



