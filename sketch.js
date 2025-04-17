let sunY = 100;


function setup() {
  createCanvas(400, 400);
}

function draw() {
    
  if (sunY > height + 30) {
    sunY = -30;
  }
  if (sunY < 200){
    background(135,206,235);
  }else {
    background(252,169,133);
  }
  ellipse(200, sunY, 60, 60);
  
  fill(50,200,70);
  rect(0, height - 50, width, 50);
  
  for (let x = 50; x < width; x += 100) {
    drawFlower(x, 350);
  }
  
  sunY += 1;
  
  ///////my functions//////////
}

function drawFlower(x,y){
  fill(random(255),random(255),random(255));
  ellipse(x,y,20,20);
  ellipse(x + 10, y, 15, 15);
  ellipse(x - 10, y, 15, 15);
  ellipse(x, y + 10, 15, 15);
  ellipse(x, y - 10, 15, 15)
  
}

