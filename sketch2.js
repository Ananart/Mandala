var angle = 0;
var incangle = 10;
var amplada = 150;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  colorMode(HSB);
  noFill();
  stroke(0,10);
  frameRate(10);
  background(0);
}

function draw() {
  //background(220);
  if (angle < 360){
    angle=angle+incangle;
  }
  else{
    angle=0;
    incangle= random(10,20); 
    stroke(random(0,360),150,150);
    amplada= random(0,600);
  }
  
  translate(width / 2,height / 2);
  rotate(angle);
  ellipse(0,0,amplada,150);
  ellipse(0,0,amplada, 50);
  ellipse(0,0,amplada,200);
  ellipse(0,0,amplada,20);
  
  
}