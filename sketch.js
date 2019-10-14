//create a dark mode with no mandala painting
//maybe have no mandala outline - user creates kaliedescope designs that spins
let strokeWidth = 10;
let rot = 0;

function preload() {
  img = loadImage('mandala1.png');
}

function setup() {

  var cnv = createCanvas(800, 800);
  cnv.position(windowWidth / 3.4, windowHeight/20);
  pg = createGraphics(800, 800);
  image(img, 0, 0, 800, 800);

  // background(200);
}

function draw() {
  pg.strokeWeight(strokeWidth);
  //practicing rotating image

  image(pg, 0,0, 800, 800);

if (key === 'd') {
  background(5);

   push();
  clear();
   imageMode(CENTER);
   translate(width/2, height/2);
   rotate(rot);
   scale(1);
   image(img, 0, 0, 800, 800);
   image(pg, 0,0);
   rot = rot + 0.01;
   pop();
}
  if (mouseIsPressed) {
    // stroke(map(mouseX, 0, 650, 0, 255, true));
    //stroke(50);
    pg.line(mouseX, mouseY, pmouseX, pmouseY);
    pg.line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    pg.line(mouseY, mouseX, pmouseY, pmouseX);
    pg.line(width - mouseY, height - mouseX, width - pmouseY, height - pmouseX);
  }

}

function keyTyped() {
  if (key === 's') {
    //save this image
    saveCanvas('fileName', 'png');
  } else if (key === 'g') {
    //green pen
    pg.stroke(15, 182, 96)
  } else if (key === 'y') {
    //yellow pen
    pg.stroke(239, 206, 65)
  } else if (key === 'r') {
    //red pen
    pg.stroke(203, 10, 10)
  } else if (key === 'o') {
    //orange pen
    pg.stroke(234, 124, 75)
  }
   // else if (key === 'd') {
  //   //done and art spins clockwise
  //
  // }
  return false;
}
