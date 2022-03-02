let state = 0;
let timer = 0;
let song;

function preload() {
  song = loadSound("assets/GlassShattering.mp3");
}

function setup() {
  createCanvas(700, 600);
  rectMode(CENTER);
  ellipseMode(CENTER);
  noStroke();
}

function draw() {
  background(220);

  switch (state) {

    case 0:

    // body
    fill("red");
    ellipse(350, 160, 100, 100);
    quad(375, 200, 325, 200, 275, 400, 425, 400);
    rect(315, 450, 25, 100);
    rect(375, 450, 25, 100);
    ellipse(303, 500, 50, 25);
    ellipse(387, 500, 50, 25);
    rect(400, 250, 100, 25);
    ellipse(450, 250, 25, 25);

    // facial expression
    fill("black");
    arc(350, 175, 50, 50, TWO_PI, PI);
    ellipse(330, 145, 25, 25);
    ellipse(370, 145, 25, 25);

    fill("white");
    ellipse(335, 150, 10, 10);
    ellipse(375, 150, 10, 10);

    // table
    fill("brown");
    rect(515, 330, 125, 25);
    rect(475, 425, 25, 175);
    rect(555, 425, 25, 175);

    // vase
    fill("yellow");
    ellipse(510, 270, 90, 100);
    rect(510, 220, 50, 75);

    break;

    case 1:

    song.play()
    state = 2;

    // body
    fill("red");
    ellipse(350, 160, 100, 100);
    quad(375, 200, 325, 200, 275, 400, 425, 400);
    rect(315, 450, 25, 100);
    rect(375, 450, 25, 100);
    ellipse(303, 500, 50, 25);
    ellipse(387, 500, 50, 25);
    rect(400, 250, 100, 25);
    ellipse(450, 250, 25, 25);

    // facial expression
    fill("black");
    ellipse(350, 185, 50, 25);
    ellipse(330, 145, 25, 25);
    ellipse(370, 145, 25, 25);

    fill("white");
    ellipse(335, 150, 10, 10);
    ellipse(375, 150, 10, 10);

    // table
    fill("brown");
    rect(515, 330, 125, 25);
    rect(475, 425, 25, 175);
    rect(555, 425, 25, 175);

    // vase
    fill("yellow");
    ellipse(510, 270, 90, 100);
    rect(510, 220, 50, 75);

    break;

    case 2:

    timer++;
      if (timer > 3*60) {
        timer = 0;
        state = 3;
      }

    fill("black");
    text("DID YOU JUST BREAK THAT VASE?!?!?!", 350, 100, 100, 100);

    // body
    fill("red");
    ellipse(350, 160, 100, 100);
    quad(375, 200, 325, 200, 275, 400, 425, 400);
    rect(315, 450, 25, 100);
    rect(375, 450, 25, 100);
    ellipse(303, 500, 50, 25);
    ellipse(387, 500, 50, 25);
    rect(400, 250, 100, 25);
    ellipse(450, 250, 25, 25);

    // facial expression
    fill("black");
    ellipse(350, 185, 50, 25);
    ellipse(330, 145, 25, 25);
    ellipse(370, 145, 25, 25);

    fill("white");
    ellipse(335, 150, 10, 10);
    ellipse(375, 150, 10, 10);

    // table
    fill("brown");
    rect(515, 330, 125, 25);
    rect(475, 425, 25, 175);
    rect(555, 425, 25, 175);

    break;

    case 3:

    fill("black");
    text("YOU'RE GROUNDED!!!!!", 350, 100, 100, 100);

    // body
    fill("red");
    ellipse(350, 160, 100, 100);
    quad(375, 200, 325, 200, 275, 400, 425, 400);
    rect(315, 450, 25, 100);
    rect(375, 450, 25, 100);
    ellipse(303, 500, 50, 25);
    ellipse(387, 500, 50, 25);

    // facial expression
    fill("black");
    arc(350, 195, 50, 50, PI, TWO_PI);
    ellipse(330, 145, 25, 25);
    ellipse(370, 145, 25, 25);

    fill("white");
    ellipse(330, 145, 10, 10);
    ellipse(370, 145, 10, 10);

    fill("blue");
    ellipse(370, 165, 8, 8);
    triangle(374, 165, 366, 165, 370, 158);
  }
}

function mouseReleased() {
  if (state < 2)
    state++;
}
