let noiseOffset = 0.0;
let strokeWidth = 15;

function setup() {
  createCanvas(600, 600);
  background(200);

}

function draw() {
  strokeWeight(strokeWidth);

  noiseOffset += 0.05;
  strokeWidth = noise(noiseOffset) * 50;


  if (mouseIsPressed) {
    stroke(map(mouseX, 0, 600, 0, 255, true));
    line(mouseX, mouseY, pmouseX, pmouseY);
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);

  }

}

function keyTyped() {
  console.log(`key ${key} is beign typed`);

  if (key === 's') {
    //save this image
    saveCanvas('fileName', 'png');
  }
  return false;
}
