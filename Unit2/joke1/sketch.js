let state = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);

}

function draw() {
  switch (state) {
    case 0:
    background("white");
    fill("black");
    textSize(30);
    text("Why did the chicken cross the road", width/2, height/2);
    break;

    case 1:
    background("black");
    fill("white");
    textSize(30);
    text("To get to the other side", width/2, height/2);
    break;
  }
}

  function mouseReleased(){
    state++;
    if (state > 1) state = 0;
  }
