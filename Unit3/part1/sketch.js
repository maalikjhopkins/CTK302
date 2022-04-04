let cars = [];

function setup() {
  createCanvas(500, 500);

  for (let i = 0; i < 20; i++) {
    cars.push(new Car());
}
}

function draw() {
  background("gray");
  for (let i = 0; i < cars.length; i++) {
  cars[i].display();
  cars[i].move();
}
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
