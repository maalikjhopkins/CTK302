let golfball;
let nintendoswitch;
let sonic;

function setup() {
  createCanvas(500, 500);


  golfball = loadImage("assets/Golfball.jpg")
  nintendoswitch = loadImage("assets/nintendoswitch.jpg")
  sonic = loadImage("assets/sonic.jpg")
}
function draw() {
  image(golfball, width/2, 100, 100, 100);
  image(nintendoswitch, width/2, 200, 100, 100);
  image(sonic, width/2, 300, 100, 100);
}
