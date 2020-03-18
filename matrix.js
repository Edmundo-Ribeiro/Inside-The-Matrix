var symbolSize = 16;
const fade = symbolSize*0.3;
const MAXSPEED = innerHeight/50;
const MAXCHANGE = 45;
const STARTY = -2000

var streams = [];
var resizer;

function setup(){
    // resizer = createSlider(1,)
    createCanvas(innerWidth,innerHeight);
    background(0);
    let xs = -symbolSize/2;
    streams  = Array.from( { length: Math.floor(width/symbolSize) }, () => new Stream(xs+=symbolSize,STARTY) );
    textAlign(CENTER);
    textSize(symbolSize);
    textFont('Consolas');
    fill(0,255,0);
}

function draw(){

    background(0,180);

    push();
    drawingContext.shadowBlur = 15;
    drawingContext.shadowColor = "#00FF00";    
    streams.forEach((s)=>s.draw(innerHeight));
    pop();

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    setup();
  }