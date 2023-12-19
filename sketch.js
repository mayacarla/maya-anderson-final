let block, floor;
let timer;
let score;
let myTimer;
// let endEffect;
let randomHeight; 
let randomWidth;

function preload() {
  fontFields = loadFont('fields-bold.otf');
  fontMerel = loadFont('merel-bold.otf');
  
  // soundFormats('mp3');
  // endEffect = loadSound('endEffect');
}

function setup() {
   createCanvas(400, 600);
  
	world.gravity.y = 4;
    
    block = new Sprite(width/2, height/2, 40, 50);
	
    // color(0, 0, 0);
 
    floor = new Sprite(200, 502, 160, 13, 'k');
    floor.speed = .3; 
    
  
    timer = 30; 
    score = 0;
}



function draw() {
  background(16, 41, 51);
  
  textSize(20);
  fill(35, 67, 82, 200)
  text("reach me", 200, 38)
  
  randomHeight = random(20, 70);
  randomWidth = random(30, 50);
  
  
  noStroke();
  // floor.color = 'white'
  floor.color = color(240, 236, 189);

  //timer text; needed
  
  textSize(120);
  textFont(fontFields);
  
  //have a different color 
  textAlign(CENTER, CENTER);
  fill(240, 236, 189);
  myTimer = text(timer, width/ 2, height/2);
  //text(width/2, height/2);

  
  
  if (mouse.pressing()) {
		block.bearing = -90;
		block.applyForce(6);
	}
  
  if (block.colliding(floor) > 150){
    // make a sound
    block.vel.y = 0;
  }

  
  //timer
  if(frameCount % 60 == 0 & timer > 0){
    timer --;
    score++;
  }
  
  // block reaches the top
  if(block.y < 40){
    timer = 0;
  }
  
  if (block.y < 40 & timer == 0){
    //not met; uncomleted 
    score = 0;
  }


  
  if (timer == 0){
    // endEffect.play();
    // endEffect.setVolume(1)
    
    textSize(40);
    textFont(fontMerel);

    fill(186, 217, 43);
    text("DONE IN", 193, 240);
    
    fill(16, 41, 51);
    rect(110, 270, 170, 100);
    fill(240, 236, 189);
    textSize(120);
    textFont(fontFields);
    text(score, width/2, height/2);
    textSize(40);
    textFont(fontMerel);
    
    fill(186, 217, 43);
    text("SECONDS", 196, 391);
    block.remove();
    floor.remove();
    

  }
  

  
 //console.log(score);

  
 //toggles movement of floor 
  if (floor.x - 105 < 0 ){
    floor.direction = "right";
  }
  
  if(floor.x + 95 > width){
     floor.direction = "left"
     }

}

function mousePressed(){
  
  // blockEffect.jump(.4, .8);
  // blockEffect.play();
  // blockEffect.setVolume(.1)
  
  block = new Sprite(mouse.x, mouse.y, randomWidth, randomHeight);

  console.log(mouseX, mouseY);
  
}
