//var x = 180;
//var y = 250;
//var xspeed = 5;
var xcor = 0; 
var ycor = 0; 
var xvel = 5; 
var yvel = 3; 

function setup() {
  createCanvas(960,593);
    noStroke();
  background (0);

}

function draw() {
fill(random,0, 255);
      background(0);
    ellipse(xcor, ycor, mouseX);
    xcor += xvel;
  ycor += yvel;
     if ((xcor >= width) || (xcor <= 0)){
    xvel = -xvel;
        fill (random(25,255), random(5,255), random(0,255));
// fill(r, g, b);
  }
  if ((ycor >= height) || (ycor <= 0)){
    yvel = -yvel;
  }
    
    
    
}


//Bits of code:
//https://codepen.io/rscarlisle/pen/RKgGox (used variables and if statements)
