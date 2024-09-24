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
  text('ဳ', width / 2 - 60, height / 2 - 80); // Left eye
  text('ဳ', width / 2 + 60, height / 2 - 80); // Right eye
  
    text('===', width / 2 + 60, height / 2 - 120); // Right eye
      text('===', width / 2 - 60, height / 2 - 120); // Right eye

  // Nose
  textSize(40);
  text('|', width / 2, height / 2 - 20); // Nose
    text('|', width / 2, height / 2 -40); // Nose

  // nostrils
  textSize(100);
  text('..', width / 2, height / 2 - 20); // Nose
  
  //nose edges
  textSize(80);
  text(')', width / 2 + 20, height / 2 - 40);
  text('(', width / 2 - 20, height / 2 - 40); 

 //ears 
  text('ဥ', width / 2 + 130, height / 2 - 80);  //right
  text('ဋ', width / 2 - 130, height / 2 - 80);  // left

//mouth
  text('ᜉ', width / 2, height / 2+40); // moutgh

  textSize(140);

  text('ᜱ', width / 2 -40, height / 2+120); // moutgh
  text('ހ', width / 2+80, height / 2+20); // moutgh
    text('౽', width / 2-80, height / 2+20); // moutgh
  

  // Hair using text symbols
  textSize(40);
  for (let i = 0; i<100; i +=10){ //height
      for (let j = -100; j <= 0; j += 20) {
    text('⏜', width / 2 + j -10, height / 2 - 150 - i); // Hair represented with waves
       }
  }

  for (let i = 0; i<100; i +=10){ //height
      for (let j = -100; j <= i; j += 20) {
    text('ဲ', width / 2 + j -10, height / 2 - 200 - i); // Hair represented with waves
       }
  }
  for (let i = 0; i<100; i +=10){
      for (let j = 20; j <= 100; j += 20) {
    text('~', width / 2 + j, height / 2 - 150 - i); // Hair represented with waves
       }
  }
  


}
