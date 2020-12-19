const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var guy;
var world,engine;
function preload(){

}
function setup(){

engine=Engine.create();
world=engine.world;
    
createCanvas(800,400);
guy = new player(100,100);
}

function draw(){
background(255);

if(keyDown(UP_ARROW)){
    velocityY=-3;
}
if(keyDown(DOWN_ARROW)){
    velocityY=3;
}
if(keyDown(RIGHT_ARROW)){
    velocityX=3;
}
if(keyDown(LEFT_ARROW)){
    velocityX=-3;
}
guy.display();

drawSprites();
}