//school themed game
//made by 10th grade students at SAR
//name of game: yet to be determined

//contols: up arrow key to jump

//sound variables
var song;
var sound;
var grumph;

//coordinate variables
var y = 400
var x = 50;
var scrollX = 800;
var scrollY = 400;
var rightButtonX = 200;
var rightButtonY = 100;

//images
var classroom;
var bee;
var ipad;
var lockers;
var apple;
var backpack;
var clay_gray1;
var clay_gray2;
var mrcrocker;
var glue;
var pencil;
var calculator;

var game_name = 'FlappyBee';

var pacman_died_sound;

function preload() {
  classroom = loadImage('classroom.jpeg');
  bee = loadImage('bee.png')
  rabbih = loadImage('harczstark.png')
  rabbik = loadImage('kroll1.png')
  books = loadImage('books.png')
  song = loadSound('gamemusicmkr-med.mp3');
  ipad = loadImage('ipad.png')
  lockers = loadImage('lockers.png')
  apple = loadImage('apple.png')
  backpack = loadImage('backpack.png')
  clay_gray1 = loadImage('claypose1-gray.png');
  clay_gray2 = loadImage('claypose2-gray.png');
  mrcrocker = loadImage('mrcrocker.png');
 glue = loadImage('glue.png');
  pencil = loadImage('pencil.png');
  calculator = loadImage('calculator.png');

  sound = loadSound('sound.wav');
  grumph = loadSound('grumph2.wav');
  pacman_died_sound = loadSound('pacman_died.wav');
  grumph.duration = 500;
  //set the playback rate
  grumph.rate(1.5);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
  //play soundtrack as soon as game starts
  song.play();

}

function draw() {

  //background(80);

  textFont('Righteous');
  //points
  textSize(40);
  fill(0);
  text('score: ' + floor(abs((800 - scrollX) / 10)), 20, 50);
  //background
  image(classroom, 0, 0, windowWidth, windowHeight);

  //player
  image(bee, x, y, 100, 100)

  //obstacles
  image(rabbih, scrollX, scrollY, 100, 132)
  image(rabbik, scrollX + 700, 360, 150, 175)
  image(books, scrollX + 250, 50, 100, 150)
  image(ipad, scrollX + 1400, 360, 150, 175)
  image(apple, scrollX + 2100, 360, 150, 175)
  image(lockers, scrollX + 2800, 360, 150, 175)
  image(backpack, scrollX + 3500, 360, 150, 175)
  image(mrcrocker, scrollX +4900, 330, 150, 175)
  image(glue, scrollX + 2200, 50, 150, 175)
  image (pencil, scrollX + 850, 50, 110, 150)
  image (calculator, scrollX + 3000, 50, 150, 175)


  //this is the rate the object in the game scroll from right to left
  scrollX -= 3;

  //platform (the big rectangle the objects sit on)
  fill(242, 255, 0)
  rect(0, 500, windowWidth, 200);

  if (scrollX < -4200 + windowWidth && scrollX > -5000) {
    if (abs(scrollX % 20) === 0) {
      if (!grumph.isPlaying()) {
        grumph.play();
      }
    }
  }
  else{
   grumph.stop(); 
  }


  //this code seem complicated, but it is just because the clay figure images face right. the push, pop, translate and scale code is just to make the images face the left
  push();
  translate(scrollX + 4200, scrollY);
  text('BULLY', 0, 50);
  scale(-1, 1);
  //the % symbol means the remainder when two numbers are divided
  if (abs(scrollX % 20) > 9) {
    image(clay_gray1, 0, 0, 50, 125);
  } else {
    image(clay_gray2, 0, 0, 50, 125);
  }
  pop();


  //the controls
  if (keyIsPressed && keyCode === RIGHT_ARROW) {
    x += 15
  }

  if (keyIsPressed && keyCode === LEFT_ARROW) {
    x -= 15
  }
  if (keyIsPressed && keyCode === UP_ARROW) {
    y -= 20
  }

  //gravity code
  if (y < 400) {
    y += 5;
  }

  //prevent the bee from going above the top
  if (y < 10) {
    y = 10;
  }


  //this is the right button
  //x,y,width, height
  rect(rightButtonX, rightButtonY, 100, 100)
  textSize(30)
  fill(0)
  //textFont('Helvetica')
  text("right", rightButtonX + 20, rightButtonY + 60)

  //this is the up button
  fill(242, 255, 0)
  rect(400, 100, 100, 100)
  fill(0)
  text("up", 433, 160)

  //restart button
  fill(200)
  rect(rightButtonX, rightButtonY + 460, 100, 100)
  textSize(26)
  fill(0)
  //textFont('Helvetica')
  text("restart", rightButtonX + 10, rightButtonY + 480)

  //see if mouse clicks the right button
  if (mouseIsPressed && mouseX > rightButtonX && mouseY > rightButtonY && mouseX < rightButtonX + 100 && mouseY < rightButtonY + 100) {
    x += 20
  }

  //see if the mouse clicks the up button
  if (mouseIsPressed && mouseX > 400 && mouseY > 100 && mouseX < 500 && mouseY < 200) {
    y -= 30
  }


  //collision with Rabbi Harczstark
  if (dist(scrollX, scrollY, x, y) < 100) {
    fill(0);
    pacman_died_sound.play();
    textSize(40);
    text('game over: press r to try again', 100, 80);
    noLoop();
    song.stop();
  }

  //collision with Rabbi Kroll
  if (dist(scrollX + 700, scrollY, x, y) < 100) {
    fill(0);
    pacman_died_sound.play();
    text('game over: press r to try again', 100, 80);
    noLoop();
  }

  //collision with books
  if (dist(scrollX + 250, 100, x, y) < 100) {
    fill(0);
    pacman_died_sound.play();
    text('game over: press r to try again', 100, 80);
    noLoop();
    song.stop();
  }

  //collision with other objects
  if (dist(scrollX + 1400, scrollY, x, y) < 100) {
    fill(0);
    pacman_died_sound.play();
    text('game over: press r to try again', 100, 80);
    noLoop();
    song.stop();
  }

  //collision with other objects
  if (dist(scrollX + 2100, scrollY, x, y) < 100) {
    fill(0);
    pacman_died_sound.play();
    text('game over: press r to try again', 100, 80);
    noLoop();
    song.stop();
  }

  //collision with other objects
  if (dist(scrollX + 2800, scrollY, x, y) < 100) {
    fill(0);
    pacman_died_sound.play();
    text('game over: press r to try again', 100, 80);
    noLoop();
    song.stop();
  }

  //collision with other objects
  if (dist(scrollX + 3500, scrollY, x, y) < 100) {
    fill(0);
    pacman_died_sound.play();
    text('game over: press r to try again', 100, 80);
    noLoop();
    song.stop();
  }

  //collision with other objects
  if (dist(scrollX + 4200, scrollY, x, y) < 100) {
    fill(0);
    pacman_died_sound.play();
    text('game over: press r to try again', 100, 80);
    noLoop();
    song.stop();

  }
//collision with pencil 
  if (dist(scrollX + 850, 50, x, y) < 100) {
    fill(0);
    pacman_died_sound.play();
    text('game over: press r to try again', 100, 80);
    noLoop();
    song.stop();
  }
  //collision with calculator
  if (dist(scrollX+ 3000, 50, x, y) < 100)
  {
    fill(0);
     pacman_died_sound.play();
    text('game over: press r to try again', 100, 80);
    noLoop();
    song.stop();
  }
  //collision with glue
  if (dist(scrollX+ 2200, 50, x, y) < 50)
  {
    fill(0);
     pacman_died_sound.play();
    text('game over: press r to try again', 100, 80);
    noLoop();
    song.stop();
  }

  //collision with mrcrocker
  if (dist(scrollX+ 4900, 350, x, y) < 100)
  {
    fill(0);
     pacman_died_sound.play();
    text('game over: press r to try again', 100, 80);
    noLoop();
    song.stop();
  }
  //title screen
  if (frameCount < 120) {
    //blue
    fill(0, 0, 255);
    rect(0, 0, windowWidth, windowHeight);

    fill(255, 0, 0);
    textSize(100);
    text(game_name, windowWidth / 3, windowHeight / 2);
  //credits
   textSize(30);
   text('art and coding: Miri, Leah, Jack, Jonathan', windowWidth/11, windowHeight*.67);
   text('Shachar, Kiki, Jacob, Tyler, Lola, music: Matan', windowWidth/11, windowHeight*.75);
  
  }

//endmessage 
 if (scrollX<-5200)
 {
   fill(255,0,0);
   background(0,0,255);
   textSize(50);
   text('Congratulations! You Won:)', windowWidth/5, windowHeight/3);
 }
}

function mousePressed() {
  //see if the mouse clicks the restart button
  if (mouseIsPressed && mouseX > rightButtonX && mouseY > rightButtonY + 460 && mouseX < rightButtonX + 100 && mouseY < rightButtonY + 100 + 510) {
    scrollX = 800;
    x = 50;
    y = 400;
    loop();
    if (!song.isPlaying()) {
      song.play();
    }

  }

}

function keyPressed() {
  if (key === 'r') {
    scrollX = 800;
    x = 50;
    y = 400;
    loop();
    if (!song.isPlaying()) {
      song.play();
    }
  }
}