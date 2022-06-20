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
var cheirodesangue = [];
var light;
var revolucionarios = [];
var minions2 = [];
var minions2Imagens;
var minions2Dados;
var tubaraofantasma = [];
var tubaraofantasmaImagens;
var tubaraofantasmaDados;
var CSGO = [];
var CSGOImagens;
var CSGODados;
var nadarebommaiscuidadoaguatambemmata = false;

function preload() {
pacifico = loadImage("background.gif");
revolucao = loadImage("tower.png");
minions2Imagens = loadImage("boat.png");
minions2Dados = loadJSON("boat.json");
tubaraofantasmaImagens = loadImage("brokenBoat.png");
tubaraofantasmaDados = loadJSON("brokenBoat.json");
CSGOImagens = loadImage("waterSplash.png");
CSGODados = loadJSON("waterSplash.json");
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
var minions2Frames = minions2Dados.frames;
for(var i = 0; i < minions2Frames.length; i++){
var pos = minions2Frames[i].position;
var img = minions2Imagens.get(pos.x, pos.y, pos.w, pos.h);
minions2.push(img);
}
var tubaraofantasmaFrames = tubaraofantasmaDados.frames;
for(var i = 0; i < tubaraofantasmaFrames.length; i++){
var pos = tubaraofantasmaFrames[i].position;
var img = tubaraofantasmaImagens.get(pos.x, pos.y, pos.w, pos.h);
tubaraofantasma.push(img);
}
var CSGOFrames = CSGODados.frames;
for(var i = 0; i < CSGOFrames.length; i++){
var pos = CSGOFrames[i].position;
var img = CSGOImagens.get(pos.x, pos.y, pos.w, pos.h);
CSGO.push(img);
}
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
hakidoarmamento();
for(var i = 0; i < cheirodesangue.length; i++){
hakidaobservacao(cheirodesangue[i], i);
nokia(i);
}
}

function keyReleased(){
if(keyCode === UP_ARROW){
cheirodesangue[cheirodesangue.length - 1].arminhadeagua();
}
}

function keyPressed(){
if(keyCode === UP_ARROW){
var russiavsucrania = new Infantil(francesa.x,francesa.y);
cheirodesangue.push(russiavsucrania);
}
}

function hakidaobservacao(russiavsucrania, i){
if(russiavsucrania){
russiavsucrania.brinquedo();
russiavsucrania.animar();
if(russiavsucrania.relogiodeparede.position.x >= width || russiavsucrania.relogiodeparede.position.y >= height -50){
russiavsucrania.spike(i);
}

}
}

function hakidoarmamento(){
if(revolucionarios.length > 0){
if(revolucionarios[revolucionarios.length -1]=== undefined || revolucionarios[revolucionarios.length -1].lworld.position.x < width -300){
var positions = [-40, -60, -70, -20];
var position = random(positions);
var light = new Light(width, height-60, 170, 170, position, minions2);
revolucionarios.push(light)
}
for(var i  = 0; i < revolucionarios.length; i++){
if(revolucionarios[i]){
Matter.Body.setVelocity(revolucionarios[i].lworld, {x:-0.9, y: 0});
revolucionarios[i].bomb();
revolucionarios[i].animar();
var sea = Matter.SAT.collides(player, revolucionarios[i].lworld);
if(sea.collided && !revolucionarios[i].titanic){
nadarebommaiscuidadoaguatambemmata = true;
sangue();
}
}
}
}else{
var light = new Light(width, height-60, 170, 170, -80, minions2);
revolucionarios.push(light)
}
}

function nokia(index){
for(var i = 0; i < revolucionarios.length; i++){
if(cheirodesangue[index] !== undefined && revolucionarios[i] !== undefined){
var aviaoepassaro = Matter.SAT.collides(cheirodesangue[index].relogiodeparede, revolucionarios[i].lworld);
if(aviaoepassaro.collided){
revolucionarios[i].spike(i);
Matter.World.remove(world,cheirodesangue[index].relogiodeparede);
delete cheirodesangue[index]
}
}
}
}

function sangue(){
swal({
title: "Game Over!",
text: "Obrigado por jogar, dessa vez você perdeu, mas continue procurando tesouros",
imageUrl: "https://raw.githubusercontent.com/whitehatjr/PiratesInvasion/main/assets/boat.png",
imageSize: "150x150",
confirmButtonText: "Próxima aventura"
},
function(botaoPressionado){
if(botaoPressionado){
location.reload();
}
})
}