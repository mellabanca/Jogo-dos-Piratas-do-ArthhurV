//Revisão de Matrizes
var matriz1 = [12,68,45,42,68,78];
console.log(matriz1);
var matriz2 = ["Melissa", 26, "Arthur", 13];
console.log(matriz2);
var matriz3 = [matriz1, matriz2];
console.log(matriz3);

console.log(matriz1[5]);
console.log(matriz2[2]);
console.log(matriz3[1][0]);

matriz1.push(100);
console.log(matriz1);
matriz1.pop();
console.log(matriz1);


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, mesa;
var pacifico;
var player, revolucao;
var francesa,francesa1;
var russiavsucrania;

function preload() {
pacifico = loadImage("background.gif");
revolucao = loadImage("tower.png");
}

function setup() {
canvas = createCanvas(1200, 600);
engine = Engine.create();
world = engine.world;  
options={
isStatic:true
} 
mesa= Bodies.rectangle(0,height-1, width*2,1,options);
World.add(world,mesa);
player = Bodies.rectangle(160,350,130,310,options);
World.add(world,player);
angleMode(DEGREES);
francesa1 = 20;
francesa = new RevolucaoFrancesa(180,150,145,100,francesa1);
russiavsucrania = new Infantil(francesa.x,francesa.y);
}

function draw() {
background(189);
image(pacifico, 0, 0, 1200, 600);
Engine.update(engine);
rect(mesa.position.x, mesa.position.y,width*2,1);
push();
imageMode(CENTER);
image(revolucao,player.position.x, player.position.y, 145, 310);
pop();
francesa.massacre();
russiavsucrania.brinquedo();
}

function keyReleased(){
if(keyCode === UP_ARROW){
russiavsucrania.arminhadeagua();
}
}
