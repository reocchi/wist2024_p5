let raindrops = [];
let pileHeight = 0; // Keeps track of the height of the pile at the bottom


function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  textAlign(CENTER, CENTER);
  textSize(40); // Set a base text size for facial features
}

function draw() {
  background(255);

  // Face
  fill(0);
  textSize(150);

  // Eyes
  textSize(50);
// Eyes with blinking effect
let blink = frameCount % 120 < 10; // Blink every 120 frames, and blink lasts 10 frames

if (blink) {
  // Closed eyes
  text('_', width / 2 - 60, height / 2 - 80); // Left eye closed
  text('_', width / 2 + 60, height / 2 - 80); // Right eye closed
} else {
  // Open eyes
  text('ဳ', width / 2 - 60, height / 2 - 80); // Left eye open
  text('ဳ', width / 2 + 60, height / 2 - 80); // Right eye open
}

  
  text('===', width / 2 + 60, height / 2 - 120); // left eye
  text('===', width / 2 - 60, height / 2 - 120); // Right eye

  // Nose
  textSize(40);
  text('|', width / 2, height / 2 - 20); // Nose
  text('|', width / 2, height / 2 - 40); // Nose but longer

  // nostrils
  textSize(100);
  text('..', width / 2, height / 2 - 20);
  
  //nose edges
  textSize(80);
  text(')', width / 2 + 20, height / 2 - 40);
  text('(', width / 2 - 20, height / 2 - 40); 

  // ears 
  text('ဥ', width / 2 + 130, height / 2 - 80);  // right
  text('ဋ', width / 2 - 130, height / 2 - 80);  // left

  // mouth
  text('ᜉ', width / 2, height / 2 + 40); //tongue
  textSize(140);
  text('ᜱ', width / 2 - 40, height / 2 + 120);  // pointy chin
  text('ހ', width / 2 + 80, height / 2 + 20);  //face right
  text('౽', width / 2 - 80, height / 2 + 20);  //face left
  
  // Hair 
  textSize(40);
  for (let i = 0; i < 100; i += 10) { // height
    for (let j = -100; j <= 0; j += 20) {
      // Add a sinusoidal offset to the x position based on frameCount
      let sway = sin(frameCount * 0.05 + i * 0.1) * 10;
      text('⏜', width / 2 + j - 10 + sway, height / 2 - 150 - i);
    }
  }
  
  // Diagonal hair
  for (let i = 0; i < 100; i += 10) { // height
    for (let j = -100; j <= i; j += 20) {
      let sway = sin(frameCount * 0.05 + i * 0.1) * 10;
      text('ဲ', width / 2 + j - 10 + sway, height / 2 - 200 - i);
    }
  }
  
  for (let i = 0; i < 100; i += 10) {
    for (let j = 20; j <= 100; j += 20) {
      let sway = sin(frameCount * 0.05 + i * 0.1) * 10;
      text('~', width / 2 + j + sway, height / 2 - 150 - i); 
    }
  }
  


  // Add a new raindrop every few frames
  if (frameCount % 10 == 0) {
    raindrops.push(new Raindrop());
  }

  // Update and display all raindrops
  for (let i = raindrops.length - 1; i >= 0; i--) {
    let drop = raindrops[i];
    drop.update();
    drop.show();

    // Remove raindrop when it hits the pile
    if (drop.y > height - pileHeight) {
      raindrops.splice(i, 1); // Remove raindrop from the array
      pileHeight += 1; // Increase the pile height slightly
    }
  }

  // Draw the pile of raindrops at the bottom
  fill('lightblue');
  rect(0, height - pileHeight, width, pileHeight);
  
}

// Raindrop class
class Raindrop {
  constructor() {
    this.x = random(width); // Random x position
    this.y = 0; // Start at the top
    this.speed = random(5, 10); // Random falling speed
  }

  // Update the raindrop's position
  update() {
    this.y += this.speed;
  }

  // Display the raindrop
  show() {
    textSize(20);
    text('💧', this.x, this.y);
  }
}
