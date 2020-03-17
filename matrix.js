var symbolSize = 60;
var fade = symbolSize*0.3;
const MAXSPEED 

function getRandSymbol(){
    return String.fromCharCode(
        0x30A0 + Math.floor(Math.random()*95)
    )
}

class Symbol{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.sym = getRandSymbol();
        this.rate = Math.floor(Math.random()*60 + 4);    
    }

    render(fade,shine){
        if(shine){
            fill(255,255,255);
        }
        else{
            fill(0,255,0,fade)
        }
        text(this.sym,this.x,this.y);
    }

    update(speed, height){
        this.y = this.y <  height + symbolSize ?  this.y + speed : -500;
        this.sym = frameCount % this.rate == 0 ? getRandSymbol() : this.sym; 
    }
}


class Stream{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.shine = Math.floor(Math.random() * 4) == 1; 
        this.len = Math.floor(Math.max( height*0.33/symbolSize, Math.floor( Math.random()*(height/symbolSize))));
        this.speed = Math.random()*20+2;
        this.symbols  = Array.from({length: this.len}, () => new Symbol(x,y-=symbolSize*1.3) );
        textSize(symbolSize);
        textFont('Consolas');
        fill(0,255,0);
    }

    render(){
        let f = 255;
        this.symbols.forEach((s,i) => s.render(f-=fade, i==0 && this.shine ));
    }
    update(){
        this.symbols.forEach((s) => s.update(this.speed,height));
    }
}

var s;
var streams = [];

function setup(){
  blendMode(SCREEN)
    createCanvas(innerWidth,innerHeight);
    background(0);
   let xs = -symbolSize;
   
    streams  = Array.from( { length: Math.floor(width/symbolSize) }, () => new Stream(xs+=symbolSize,-2000) );
   
}

function draw(){

    background(0,180 );

    push();
    drawingContext.shadowBlur = 10;
    drawingContext.shadowColor = "#00FF00";    
    streams.forEach((s)=>s.render());
    streams.forEach((s)=>s.update());
    pop();

}