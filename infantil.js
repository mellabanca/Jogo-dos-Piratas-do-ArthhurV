class Infantil {
constructor (x,y){
this.cm = 30;
options={
isStatic:true
} 
this.relogiodeparede = Bodies.circle (x,y,this.cm,options);
World.add (world,this.relogiodeparede);
this.album = loadImage ("abandono.png");
}
brinquedo(){
var pos = this.relogiodeparede.position;
push();
imageMode(CENTER);
image(this.album,pos.x,pos.y,this.cm,this.cm);
pop();
}
arminhadeagua(){
var newAn = francesa.an - 28;
newAn *= (3.14/180);
var velocidade = p5.Vector.fromAngle(newAn);
velocidade.mult(0.5);
Matter.Body.setStatic(this.relogiodeparede, false);
Matter.Body.setVelocity(this.relogiodeparede, {x:velocidade.x*(180/3.14), y:velocidade.y*(180/3.14)});
}
}