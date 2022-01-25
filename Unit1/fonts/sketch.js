let robotob, robotol;

function setup() {
  createCanvas(500, 500);
  robotob = loadFont("assets/Roboto-Black.ttf");
  robotol = loadFont("assets/Roboto-Light.ttf");
}

function draw() {
  background(100);
  textFont(robotob);
  textSize(32);
  text("roboto!!!", 100, 100)

  textFont(robotol);
  textSize(32);
  text("pumpin jumpin", 100, 300)
}
