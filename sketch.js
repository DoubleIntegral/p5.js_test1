var i = 0;
var d = 5;
var c = 0;
function setup() {
  createCanvas(windowWidth,windowHeight)
  rectMode(CENTER) // 없애면 어떻게 변화가 되는지 관찰해보기
  background(0);
}

function draw() {
  i+=d;
  if(i>255 || i<1) d=-d
  if(mouseX>=width/2-50 && mouseX<=width/2+50) { // p5.js 에서 if, else 문
    fill(0,0,255,i)
    isIn = true;
  } else {
    fill(255,0,0,i)
    isIn = false;
  }
  
  rect(width/2,height/2,100,100)
  ellipse(width/2,height/2,100,30)
  ellipse(width/2,height/2,30,100)

}
function windowResized() {
  resizeCanvas(windowWidth,windowHeight)
}

function mousePressed(){
  c = c+1
  if (c % 2 == 1) {
    background(255);
  } else {
    background(0);
  }
}
  
