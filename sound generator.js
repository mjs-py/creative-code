//Melanie Sharif
//ATLS 5660 Assignment 9 -- Audio
//thanks to: D. Shiffman; C418 for the song (https://www.youtube.com/watch?v=a3wGYbq6_Mc)

//BEWARE loud after ~ 50 seconds!!

var cnvs;

var vol;
var song;
var amp;

var volHistory = [];

function pauseSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function preload() {
  song = loadSound('stranger_think.m4a')
}

function setup() {
  cnvs = createCanvas(500, 500);
  angleMode(DEGREES)
  button = createButton('pause');
  button.mousePressed(pauseSong);
  song.play();
  song.setVolume(.05, 60, 64);
  amp = new p5.Amplitude();
 
}

function draw() {
  background(0);
  var vol = amp.getLevel();
  volHistory.push(vol);
  stroke(255, 0, 0);
  noFill();
  
  translate(width / 2, height / 2)
  for (i2 = 0; i2 < 3; i2++) {
   beginShape();
   for (var i = 0; i < 360; i++) {
    var r = map(volHistory[i], 0, 1, 10, 1000);
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(x + i, y + i)
    vertex(x*-2 + i, y*-2 + i)
  }
   endShape();
  }
 
  if (volHistory.length > 360) {
    volHistory.splice(0, 1);
  }
  
  fill(0)
  ellipse(0, 0, 100)
}
