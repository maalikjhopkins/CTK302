let cars = [];
let frogPos;
let state = 0;
let timer = 0;
let maxCars = 100;
let maxTimer = 50 ;
let score = 0 ;
let song1;
let song2;
let song3;
let sanic;
let emerald;

function preload() {
  song1 = loadSound("assets/TooEasy.mp3");
  song2 = loadSound("assets/YoureTooSlow.mp3");
  song3 = loadSound("assets/IceCap.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Spawn objects
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

  frogPos = createVector(width / 2, height - 100);

  imageMode(CENTER);
  sanic = loadImage("assets/Sanicth.png");
  emerald = loadImage("assets/emerald.png");

}

function draw() {
  switch (state) {
    case 0:
      background("grey");
      text("welcome", 100, 100);
      break;

    case 1:
      game();
      timer++;
      if (timer > maxTimer * 60) {
        timer = 0;
        state = 3;
        song3.stop();
      }
      break;

    case 2: // win!
      background("grey");
      text("you won!", 100, 100);
      song1.play()
      state = 4;
      break;

    case 3: // lose
      background("grey");
      text("lost!", 100, 100);
      song2.play()
      state = 5;
      break;

    case 4:
      background("grey");
      text("you won!", 100, 100);
      break;

    case 5:
      background("grey");
      text("lost!", 100, 100);
      break;

  }

    fill("black") ;
  textSize(24) ;
  text("score = "+ score, 30, 30) ;
}

function game() {
  background("white");

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
      score++ ;
    }
  }

  if (cars.length == 0) {
    // they won!
    song3.stop();
    state = 2;
  }

  // frog
  // fill("green");
  // ellipse(frogPos.x, frogPos.y, 50, 50);
  image(sanic, frogPos.x, frogPos.y, 100, 100);
  checkForKeys();


}

class Car {
  // constructor and attributes
  constructor() {
    this.pos = createVector(random(width), random(height)); // initialize your attributes here
    this.v = createVector(random(6), 0);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.o = random(100);
    this.size = random(48, 128);
  }

  // methods

  display() {
    // fill(this.r, this.b, this.g, this.o);
    // rect(this.pos.x, this.pos.y, 75, 25);
    // ellipse(this.pos.x, this.pos.y + 40, 30, 30);
    // ellipse(this.pos.x + 70, this.pos.y + 40, 30, 30);
    image(emerald, this.pos.x, this.pos.y, 50, 50);

    // textSize(this.size) ;
    // text("bruh", this.pos.x, this.pos.y) ;
  }

  move() {
    this.pos.add(this.v);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) {
    frogPos.x -= 5;
    if (frogPos.x < 0) frogPos.x = width ;
  }

  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5 ;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
}

function mouseReleased() {
  switch (state) {
    case 0:
    song3.play();
      state = 1;
      break;

    case 4: // win state
      resetTheGame();
      state = 0;

      break;

    case 5: // lose state
      resetTheGame();
      state = 0;
      break;
  }
}

function resetTheGame() {
  timer = 0;
  score = 0;
  cars = [];

  // Spawn objects
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
}
