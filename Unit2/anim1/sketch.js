let x = 0;
let robotol;

function setup() {
  createCanvas(500, 500);
  robotol = loadFont("assets/Roboto-Light.ttf");
}

function draw() {
  background("black");
//  rect(x, width/2, 50, 50);
  fill('white');
  textFont(robotol)
  textSize(32);
  text("SEGA", x, width/2);
  x += 10;
  if (x > width) {
    x = 0;
  }
}
