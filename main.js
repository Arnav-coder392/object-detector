img = "";

function preload(){
  img = loadImage('929144-world-animal-day-2020.jpg');
}

function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
}


function draw() {
  image(img, 0, 0, 640, 520);
  fill("blue");
  text("Dog", 45, 75);
  noFill();
  stroke("Red");
  text("Human", 480, 75);
  stroke("Green")
  rect(30, 60, 520, 350 );
}