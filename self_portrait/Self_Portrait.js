let raindrops = [];
let pileHeight = 0; // Keeps track of the height of the pile at the bottom
let isFireMode = false; // Boolean to toggle between water and fire mode

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  textAlign(CENTER, CENTER);
  textSize(40); // Set a base text size for facial features
}

function draw() {
  // Change background color based on the mode
  if (isFireMode) {
    background(255, 100, 50); // Fire mode background (reddish-orange)
  } else {
    background(255); // Default water mode background (white)
  }

  // Face
  fill(0);
  textSize(150);

  // Eyes
  textSize(50);
  
  // Check if pileHeight exceeds half of the screen height
  if (pileHeight >= height / 2) {
    // Eyes change to X if the pile height is greater than half of the canvas height
    text('X', width / 2 - 60, height / 2 - 80); // Left eye as X
    text('X', width / 2 + 60, height / 2 - 80); // Right eye as X
  } else {
    // Normal eyes with blinking effect
    let blink = frameCount % 120 < 10; // Blink every 120 frames, and blink lasts 10 frames

    if (blink) {
      text('_', width / 2 - 60, height / 2 - 80); // Left eye closed
      text('_', width / 2 + 60, height / 2 - 80); // Right eye closed
    } else {
      text('ဳ', width / 2 - 60, height / 2 - 80); // Left eye open
      text('ဳ', width / 2 + 60, height / 2 - 80); // Right eye open
    }
  }

  text('===', width / 2 + 60, height / 2 - 120); // Left eye
  text('===', width / 2 - 60, height / 2 - 120); // Right eye

  // Nose
  textSize(40);
  text('|', width / 2, height / 2 - 20); // Nose
  text('|', width / 2, height / 2 - 40); // Longer nose

  // Nostrils
  textSize(100);
  text('..', width / 2, height / 2 - 20);

  // Nose edges
  textSize(80);
  text(')', width / 2 + 20, height / 2 - 40);
  text('(', width / 2 - 20, height / 2 - 40); 

  // Ears
  text('ဥ', width / 2 + 130, height / 2 - 80); // Right ear
  text('ဋ', width / 2 - 130, height / 2 - 80); // Left ear

  // Mouth
  text('ᜉ', width / 2, height / 2 + 40); // Tongue
  textSize(140);
  text('ᜱ', width / 2 - 40, height / 2 + 120);  // Pointy chin
  text('ހ', width / 2 + 80, height / 2 + 20);  // Face right
  text('౽', width / 2 - 80, height / 2 + 20);  // Face left

  // Hair 
  textSize(40);
  for (let i = 0; i < 100; i += 10) {
    for (let j = -100; j <= 0; j += 20) {
      let sway = sin(frameCount * 0.05 + i * 0.1) * 10;
      text('⏜', width / 2 + j - 10 + sway, height / 2 - 150 - i);
    }
  }

  for (let i = 0; i < 100; i += 10) {
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

  // Add a new raindrop (or fire drop) every few frames
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

  // Draw the pile at the bottom (water or fire)
  if (isFireMode) {
    fill('orange'); // Fire pile color
  } else {
    fill('lightblue'); // Water pile color
  }
  rect(0, height - pileHeight, width, pileHeight);
}

// Raindrop (or Firedrop) class
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

  // Display the raindrop or firedrop
  show() {
    textSize(20);
    if (isFireMode) {
      text('🔥', this.x, this.y); // Fire emoji in fire mode
    } else {
      text('💧', this.x, this.y); // Water drop in normal mode
    }
  }
}

// Toggle between water and fire mode when the mouse is pressed
function mousePressed() {
  isFireMode = !isFireMode; // Switch between water and fire modes
}
