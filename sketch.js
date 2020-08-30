
var customerform;
function preload(){
logo=loadImage("logo.png")

}


function setup() {
  createCanvas(400,700);

customerform= new Form1;
}

function draw() {
  background(246, 244, 242);  
  image(logo,50,30,300,300)

  //fill(255, 212, 121)
  //stroke('black');
  //strokeWeight(4)

customerform.display()

  // rec2=createButton('Sign up as a chef') 
  // rec2.position(130,590)

  fill("black")
  strokeWeight(0)
  textSize(13);
  text('Already Registered?',100,685)

  fill(52, 138, 167)
  strokeWeight(0)
  textSize(13);
  text('Sign in',220,685)

  





  
  drawSprites();
}

