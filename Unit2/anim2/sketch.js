let x = 0;

function setup() {
  createCanvas(1000, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  background(220);

  translate(x, 0);
  avatar();
  x += 5;
  if (x > width) {
    x = -200;
  }
}

function avatar() {

    // book
    fill("brown");
    rect(575, 250, 100, 150);

    // magic gem
    fill("yellow");
    quad(590, 230, 560, 230, 550, 250, 600, 250);
    quad(590, 270, 560, 270, 550, 250, 600, 250);

    // body
    fill("purple");
    ellipse(350, 160, 100, 100);
    quad(375, 200, 325, 200, 275, 400, 425, 400);
    rect(315, 450, 25, 100);
    rect(375, 450, 25, 100);
    ellipse(303, 500, 50, 25);
    ellipse(387, 500, 50, 25);
    rect(450, 250, 145, 25);
    ellipse(525, 250, 25, 25);

    // facial expression
    fill("black");
    arc(350, 175, 50, 50, TWO_PI, PI);
    ellipse(330, 145, 25, 25);
    ellipse(370, 145, 25, 25);

    fill("white");
    ellipse(330, 145, 10, 10);
    ellipse(370, 145, 10, 10);
}
