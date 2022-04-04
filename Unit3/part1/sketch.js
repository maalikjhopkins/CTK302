let myCar1;

function setup() {
  createCanvas(500, 500);
  myCar1 = new Car();
}

function draw() {
  background("grey");
  myCar1.display();
  myCar1.move();
}

class Car {
  constructor() {
    // attributes
    this.pos = createVector(width/2, height/2);
    this.vel = createVector(random(-3, 3), random(-3. 3));

  }

  // methods

  display() {
    ellipse(this.pos.x, this.pos.y, 20);
  }

  move() {
    this.pos.add(this.vel);
  }
}
