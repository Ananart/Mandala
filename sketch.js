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
    amplada= random(10,600);
  }
  
  translate(width / 2,height / 2);
  rotate(angle);
  line(-50,-20,amplada,150);
  line(0,0,amplada, 150);
  line(10,10,amplada,90);
  line(0,0,amplada,90);
  
  
}