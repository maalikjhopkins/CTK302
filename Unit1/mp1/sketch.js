function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  textAlign(LEFT);
}

function draw() {

  if (mouseIsPressed) {
    background('#2D936C');
  } else {
    background("yellow");
  }

  rect(width / 2, height / 2, 200, 100);

  fill('black');
  push();
  rectMode(CORNER);
  text("Lucas Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 10, 10, 400, 400);
  pop();
}
