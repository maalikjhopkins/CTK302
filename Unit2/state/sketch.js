let state = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(100);

  switch (state) {

    case 0:
      textSize(20);
      text("0", 100, 100);

    for (let j = 0; j < 100; j++) {
      for (let i = 0; i < 100; i++) {
        rect(i*20, j*20, 10, 10);
      }
    }
      break;

    case 1:
      background("green");
      textSize(20);
      text("1", 100, 100);

      for (let j = 0; j < 100; j++) {
        for (let i = 0; i < 100; i++) {
          ellipse(i*20, j*20, 10, 10);
        }
      }
      break;

    case 2:
      fill("yellow")
      textSize(20);
      text("2", 100, 100);

      for (let j = 0; j < 100; j++) {
        for (let i = 0; i < 100; i++) {
          rect(i*10, j*10, 20, 20);
        }
      }
      break;

    case 3:
      fill("red")
      textSize(20);
      text("3", 100, 100);

      for (let j = 0; j < 100; j++) {
        for (let i = 0; i < 100; i++) {
          ellipse(i*10, j*10, 20, 20);
        }
      }
      break;

    case 4:
      background("blue")
      textSize(20);
      text("4", 100, 100);

      for (let j = 0; j < 100; j++) {
        for (let i = 0; i < 100; i++) {
          quad(i*20, j*20, 10, 10);
        }
      }
      break;
  }
}

function mouseReleased() {
  state++;
  if (state > 4) state = 0;

}
