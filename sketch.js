const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground,div1,div2,div3,div4,div5,div6,div7,div8;
var wall1,wall2,plinko1;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function preload() {
  backgroundImg = loadImage("bg.jpg");
}

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);
 


 for(var k = 0; k<= width; k=k+80){
   divisions.push(new Div (k, height-divisionHeight/2,10,divisionHeight))
 }

 for(var i = 75; i<= width; i=i+50){
  plinkos.push(new Plinko(i,75,10));
}

  for (var i = 50; i <= width - 10; i= i+50 ){
    plinkos.push(new Plinko(i,175,10));

  }

  for (var i = 75; i <= width ; i= i+50 ){
    plinkos.push(new Plinko(i,275,10));

  }

  for (var i = 50; i <= width - 10; i= i+50 ){
    plinkos.push(new Plinko(i,375,10));

  }

 

 // wall1 = new Div(134,355,8,628);
  //wall2 = new Div(346,355,8,628);




}

function draw() {
  background(backgroundImg); 
  Engine.update(engine);

  ground.display();

if(frameCount % 80 ===0){
  particles .push(new Particles(random (width/2 - 30, width/2 + 30),10,10));
}

 for(var k=0; k < plinkos.length; k++ ){
   plinkos[k].display();
 }

 for(var j=0 ; j< divisions.length; j++ ){
   divisions[j].display();
 }
 
 for(var j=0 ; j< particles.length; j++ ){
  particles[j].display();
}

 
 
  console.log(plinkos)



  
  drawSprites();
}