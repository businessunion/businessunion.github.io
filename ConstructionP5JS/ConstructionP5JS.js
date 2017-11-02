var panorama;
var minicooper;
var splat;
var splatX = 700; 
var splatY = 650;

var barrier;
var barrierX = 550;
var barrierY = 700;

var metal;
var metalX = 700;
var metalY = 760;


var busclone;
var buscloneX = 450;
var buscloneY = 690;

var carcrash;
var carcrashX = 200;
var carcrashY = 200;

var spray;
var sprayX = 250;
var sprayY = 430;

var gun;
var gunX = 800;
var gunY = 200;
var mX, mY;

function preload() {
  
   panorama = loadImage("data/carpanorama.jpg");
  minicooper = loadImage("data/minicooper.png");
  splat = loadImage("data/splat2.png");
  barrier = loadImage("data/barrier.png");
  metal = loadImage("data/metal.png");
  busclone = loadImage("data/busclone.png");
  carcrash = loadImage("data/carcrash.png");
  spray = loadImage("data/constructionspraypaint.png");
  gun = loadImage("data/gun.png"); 
}


function setup(){
  createCanvas (1074, 1069);

  imageMode(CENTER);
  image (panorama, width/2, height/2, 1074, 1069); 
}
//next step
function draw() {
  

  image (splat, splatX, splatY);
  image (barrier, barrierX, barrierY);
  image (metal, metalX, metalY);
  image (busclone, buscloneX, buscloneY);
  image (carcrash, carcrashX, carcrashY);
  image (spray, sprayX, sprayY);
  image (gun, gunX, gunY);
}

function mouseDragged() {
  if (dist(splatX, splatY, mouseX, mouseY) < 200) {
    splatX = splatX - (pmouseX-mouseX);
    splatY = splatY - (pmouseY-mouseY);
  }
   if (dist(gunX, gunY, mouseX, mouseY) < 200) {
    gunX = gunX - (pmouseX-mouseX);
   gunY = gunY - (pmouseY-mouseY);
  }
    
  if (dist(barrierX, barrierY, mouseX, mouseY) < 200) {
    barrierX = barrierX - (pmouseX-mouseX);
    barrierY = barrierY - (pmouseY-mouseY);
 
  }
  if (dist(metalX, metalY, mouseX, mouseY) < 200) {
    metalX = metalX - (pmouseX-mouseX);
    metalY = metalY - (pmouseY-mouseY);
 
  }
  
  if (dist(buscloneX, buscloneY, mouseX, mouseY) < 200) {
    buscloneX = buscloneX - (pmouseX-mouseX);
   buscloneY = buscloneY - (pmouseY-mouseY);
  }
   if (dist(carcrashX, carcrashY, mouseX, mouseY) < 200) {
    carcrashX = carcrashX - (pmouseX-mouseX);
   carcrashY = carcrashY - (pmouseY-mouseY);
  }
   if (dist(sprayX, sprayY, mouseX, mouseY) < 200) {
    sprayX = sprayX - (pmouseX-mouseX);
   sprayY = sprayY - (pmouseY-mouseY);
  }
  
}

function mouseReleased() {
  image (panorama, width/2, height/2, 1074, 1069);
}
  


  
  
  
