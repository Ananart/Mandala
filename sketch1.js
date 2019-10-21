var angle = 0;
var incangle = 10;
var amplada = 150;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  colorMode(HSB);
  noStroke();
  fill(0)
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
    fill(random(0,360),150,150,0.1);
    amplada= random(0,600);
  }
  
  translate(width / 2,height / 2);
  rotate(angle);
  triangle(100,60,amplada,80,80,80);
  triangle(0,0,amplada, 60,60,60);
  triangle(0,0,amplada,200,200,200);
  triangle(80,40,amplada,150,150,150);
  
  
}