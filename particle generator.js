//Melanie Sharif
//ATLAS 5660
//Week 5: Build a Generator

//particle system, flowfield setup done with many, many thanks to: https://www.youtube.com/watch?v=BjoM9oKOAKY&list=PLRqwX-V7Uu6bgPNQAdxQZpJuJCjeOr7VD&index=6

var inc = 0.1;
var scl = 20;
var cols, rows;

var zoff = 0;

var fr;

var particle = [];

var flowfield = [];

var piano;

function preload() {
  piano = loadSound('piano.m4a');
  piano.setVolume(0.2);
  
}

function setup() {
  
  piano.play();
  createCanvas(1800, 1400);
  colorMode(HSB, 255);
  background(10);
  cols = floor(width / scl)
  rows = floor(height / scl)
  fr = createP('');
  
  flowfield = new Array(cols * rows);
  
  for (var i = 0; i < 5000; i++) {
    particle[i] = new Particle();
  }
}

function draw() {
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols;   
    x++) {
      var index = (x + y * cols);
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowfield[index] = v;
      xoff += inc; 
      stroke(0, 50)
    }
    yoff += inc;
    zoff += .0001;
  }
  
  for (var i = 0; i < particle.length; i++) {
    particle[i].follow(flowfield);
    particle[i].update();
    particle[i].edges();
    particle[i].show();
    
    
  }

}


