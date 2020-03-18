var symbolSize = 16;
const fade = symbolSize*0.3;
const MAXSPEED = innerHeight/50;
const MAXCHANGE = 45;
const STARTY = -1000

var streams = [];
var resizer;

function setup(){
    resizer = createSlider(6,100,16,1);
    resizer.size(200,16);
    resizer.position((windowWidth/2)-100,windowHeight/2);
    resizer.elt.style.display = 'none';

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

    if(resizer.elt.style.display == 'block'){
        push();
        fill(255); textSize(60); text(resizer.value(),windowWidth/2,innerHeight/2+120);
        pop();
    }

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    setup();
}

function touchEnded() {

    resizer.elt.style.display = (resizer.elt.style.display == 'none') ? 'block' : 'none';
    
    if(resizer.value() != symbolSize ){
        symbolSize = resizer.value();
        let xs = -symbolSize/2;
        streams  = Array.from( { length: Math.floor(width/symbolSize) }, () => new Stream(xs+=symbolSize,STARTY) );
        textSize(symbolSize);
    }
}