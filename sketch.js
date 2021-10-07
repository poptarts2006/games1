var zoro;
var iceShooter, lightShooter, fireShooter;
var zoroImg
var bgImg

function preload() {
  zoroImg = loadImage ('zoro.png');
  bgImg = loadImage ('castleimage.jpg');
}

function setup() {
  createCanvas(750, 500);
  
  zoro = createSprite (50, 400, 20, 50);
  zoro.addImage (zoroImg);
}

function draw() {
  background(bgImg);
  
  if (keyDown('space') && zoro.y >= 100) {
    zoro.velocityY = -2;
  }
  zoro.velocityY = zoro.velocityY+0.8; 
  drawSprites ();
}