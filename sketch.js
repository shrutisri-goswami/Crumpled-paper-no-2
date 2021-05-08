const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball,paper;
var dustbinImage,bin;

function preload(){
    dustbinImage = loadImage("dustbingreen.png");
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,550,1200,20);
    paper = new Paper(200,450,100,100);

    bin = createSprite(930,420);
    bin.scale=0.75;
    bin.addImage(dustbinImage);

    dustbin1 = new Dustbin(850,465,15,150);
    dustbin2 = new Dustbin(930,530,150,15);
    dustbin3 = new Dustbin(1015,465,15,150);
}

function draw(){
    background("white");
    Engine.update(engine);

    ground.display();
    paper.display();
    dustbin1.display();
    dustbin2.display();
    dustbin3.display(); 
      
    drawSprites();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:590,y:-550});
    }
}