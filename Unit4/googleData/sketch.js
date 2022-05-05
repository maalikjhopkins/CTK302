var bubbles = [];
let url = "";

function setup() {
  // let key = "1xG5lzBtJV3gK61ZE_qdku3ms9-pCJqwl0T8RVHI11m0"; // this is KEY of the URL from the sheet
  let key = "13Zkv_UWQsqOsV24z61UHHWJ7A0plWHmSolR0Xo-0C8o";

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.


  loadJSON(url, gotData);

  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

// The data comes back as an array of objects

function gotData(data) {
  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(
      new Bubble(
        data[i]["What energy level are you at?"],
        data[i]["Pineapple on pizza?"],
        data[i]["Marvel or DC?"], // THESE NEED TO MATCH SPREADSHEET
        data[i]["Write your name here"]));

  }
}

function draw() {
  background("blue");

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }
}

// my Bubble class
class Bubble {
  constructor(energy, pineapple, marvel, name) {
    // only the order of these parameters matters!
    this.energy = energy;
    this.pineapple = pineapple;
    this.marvel = marvel;
    this.name = name;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(2, 5), random(1, 3));
  }

  display() {
    stroke("red");
    noFill();
    ellipse(this.pos.x, this.pos.y+10, 120, 120);
    fill("white");
    text(
      this.name + "\n" + this.energy + "\n" + this.pineapple + "\n" + this.marvel + "\n",
      this.pos.x,
      this.pos.y
    );

    this.pos.add(this.vel) ;
    if (this.pos.x > width) this.pos.x = 0 ;
    if (this.pos.y > height) this.pos.y = 0;

  }


}
