let posX_S = 290; // Starting x position for S
let posY_S = 300; // Starting y position for S
let velX_S = 3; // X velocity for S
let velY_S = 2; // Y velocity for S

let posX_R = 200; // Starting x position for R
let posY_R = 300; // Starting y position for R
let velX_R = 4; // X velocity for R
let velY_R = 3; // Y velocity for R

let colorS; // Current color for pixelated S
let colorR; // Current color for character R
let startColorS; // Start color for S
let endColorS; // End color for S
let startColorR; // Start color for R
let endColorR; // End color for R
let t = 0; // Interpolation factor

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  noStroke();
  background(255);
  
  // Initialize colors
  startColorS = color(0); // Black for S
  endColorS = color(random(255), random(255), random(255)); // Random end color for S
  startColorR = color('black'); // Black for R
  endColorR = color(random(255), random(255), random(255)); // Random end color for R
}

function draw() {
  // Semi-transparent background to keep traces
  fill(0,0, 0, 20); // Slightly transparent fill to leave trails
  rect(0, 0, width, height);
  
  strokeWeight(0);
  
  // Gradually change color for S
  t += 0.01; // Increment interpolation factor
  if (t >= 1) {
    // Reset t and choose new end colors when reaching 1
    t = 0;
    startColorS = endColorS;
    endColorS = color(random(255), random(255), random(255));
    
    startColorR = endColorR;
    endColorR = color(random(255), random(255), random(255));
  }
  
  colorS = lerpColor(startColorS, endColorS, t);
  colorR = lerpColor(startColorR, endColorR, t);

  // Draw the pixelated S at the new position
  fill(colorS);
  drawPixelS(posX_S, posY_S, 30);
  
  // Move the position of S
  posX_S += velX_S;
  posY_S += velY_S;
  
  // Bounce S off the edges
  if (posX_S <= 0 || posX_S + 100 >= width) {
    velX_S *= -1;
  }
  if (posY_S <= 0 || posY_S + 140 >= height) {
    velY_S *= -1;
  }

  // CHARACTER R
  fill(colorR);
  rect(posX_R, posY_R, 40, 230, 20, 0, 10, 10);
  rect(posX_R, posY_R, 150, 140, 20, 150, 150, 0);
  fill(0);
  rect(posX_R + 45, posY_R + 40, 70, 60, 0, 150, 150, 0);

  fill(colorR);
  rect(posX_R + 70, posY_R + 130, 40, 100, 0, 0, 0, 10);
  rect(posX_R + 90, posY_R + 190, 80, 40, 10, 10, 10, 10);

  // Move the position of R
  posX_R += velX_R;
  posY_R += velY_R;
  
  // Bounce R off the edges
  if (posX_R <= 0 || posX_R + 160 >= width) {
    velX_R *= -1;
  }
  if (posY_R <= 0 || posY_R + 230 >= height) {
    velY_R *= -1;
  }
}

function drawPixelS(x, y, pixelSize) {  
  // Top row of the S
  rect(x + pixelSize, y, pixelSize * 3, pixelSize);  // 0,1,1,1,0
  
  // Left side of the S
  rect(x, y + pixelSize, pixelSize, pixelSize * 2);  // Left vertical
  rect(x + pixelSize * 4, y + pixelSize, pixelSize, pixelSize); // Right top
  
  // Middle row of the S
  rect(x + pixelSize, y + pixelSize * 3, pixelSize * 3, pixelSize); // Middle
  
  // Right side of the S
  rect(x + pixelSize * 4, y + pixelSize * 4, pixelSize, pixelSize * 2); // Right vertical
  
  // Bottom row of the S
  rect(x + pixelSize, y + pixelSize * 6, pixelSize * 3, pixelSize); // Bottom row
  rect(x, y + pixelSize * 5, pixelSize, pixelSize);  // Bottom left corner
}
