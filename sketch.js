//create a dark mode with no mandala painting
//maybe have no mandala outline - user creates kaliedescope designs that spins
let strokeWidth = 10;
let rot = 0;
let mandala = [];
let imageCounter = 0;
let spinning = false;

function preload() {
  for (let i = 0; i <= 2; i++) {
    mandala[i] = loadImage(`mandala/mandala (${i}).png`)
  }
}

function setup() {
  console.log(mandala);
  var cnv = createCanvas(650, 650);
  cnv.position(windowWidth / 3.4, windowHeight / 20);
  pg = createGraphics(650, 650);
  image(mandala[imageCounter], 0, 0, 650, 650);
  // background(200);

  button = select('#newMan')
  button.mousePressed(buttonPressed);
}

function draw() {
  pg.strokeWeight(strokeWidth);
  //practicing rotating image
  image(pg, 0, 0, 650, 650);


  if (mouseIsPressed) {
    // stroke(map(mouseX, 0, 650, 0, 255, true));
    //stroke(50);
    pg.line(mouseX, mouseY, pmouseX, pmouseY);
    pg.line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    pg.line(mouseY, mouseX, pmouseY, pmouseX);
    pg.line(width - mouseY, height - mouseX, width - pmouseY, height - pmouseX);
  }
  if (spinning) {
    background(5);
    push();
    clear();
    imageMode(CENTER);
    translate(width / 2, height / 2);
    rotate(rot);
    scale(1);
    image(mandala[imageCounter], 0, 0, 650, 650);
    image(pg, 0, 0);
    rot = rot + 0.01;
    pop();
    console.log(imageCounter);
  }

}

function buttonPressed(){
     clear();
     pg.clear();
     spinning = false;
    if (imageCounter < mandala.length - 1) {
      imageCounter++;
    } else {
     imageCounter = 0;
    }
    image(mandala[imageCounter], 0, 0, 650, 650);
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
  } else if (key === 'd') {
    spinning=true;
  }
  // else if (key === 'd') {
  //   //done and art spins clockwise
  //
  // }
  return false;
}
