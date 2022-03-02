let song1;

function preload() {
  song1 = loadSound("assets/GreenHillZone.mp3");
}

function setup() {
  createCanvas(500, 500);
  song1.play();
}

function draw() {

}

function mouseReleased() {
  getAudioContext().resume();
}
