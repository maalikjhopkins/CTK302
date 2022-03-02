let state = 0;
let timer = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(100)

  switch (state) {

    case 0:
      background("red");
      text("0", 100, 100);
      timer++;
      if (timer > 3*60) {
        timer = 0;
        state = 1;
      }
      break;

    case 1:
      background("orange");
      text("1", 100, 100);
      timer++;
      if (timer > 3*60) {
        timer = 0;
        state = 2;
      }
      break;

    case 2:
      background("yellow");
      text("2", 100, 100);
      timer++;
      if (timer > 3*60) {
        timer = 0;
        state = 0;
      }
      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;

}
