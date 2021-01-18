// Constants
const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2, c3;

function setup() {
  createCanvas(400, 400);
  c1 = color(7, 30, 67);
  c2 = color(118, 73, 0);
  c3 = color(255,196,248);
}


function draw() {
  setGradient( 0, 0, width * 0.5, height, c1, c2, c3, Y_AXIS);
  setGradient( width * 0.5 , 0, width * 0.5, height, c3, c2, c1, Y_AXIS);
  setGradient( width * (1/3) , height * 0.1, width * (1/3), height * 0.8, c2, c3, c1, Y_AXIS);

  save("20210118.png");
  noLoop();
}

function setGradient(x, y, w, h, c1, c2, c3, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, (y + h) - (h/2), 0, 1);
      let c = lerpColor(c1, c2, inter);
      
      let inter02 = map(i, (y + h) - (h/2) ,  y + h , 0, 1);
      let p = lerpColor(c2, c3, inter02);
      
      //stroke(c);
      line(x, i, x + w, i);
      
      if ( i <= (y + h) - (h/2)){
        stroke(c);
        line(x, i, x + w, i);
      }else{
        stroke(p);
        line(x, i, x + w, i);
      } 
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, (x + w) - (w/2), 0, 1);
      let c = lerpColor(c1, c2, inter);
      
      let inter02 = map(i, (x + w) - (w/2) , x + w, 0, 1);
      let p = lerpColor(c2, c3, inter02);
      
      if(i <= (x + w) - (w/2)){
        stroke(c);
        line(i, y, i, y + w);
      }else{
        stroke(p);
        line(i, y, i, y + w);
      }
      
    }
  }
}
