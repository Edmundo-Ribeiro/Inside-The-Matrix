
class Symbol{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.sym = Symbol.getRandSymbol();
        this.rate = Math.floor(Math.random()*MAXCHANGE + 3);    
    }

    static getRandSymbol(){
        return Math.random() > 0.2 ? String.fromCharCode(0x30A0 + Math.floor(Math.random()*95)) : Math.floor( Math.random()*10);
    }

    render(fade,shine){
        shine ? fill(255,255,255) : fill(0,255,0,fade);
        text(this.sym,this.x,this.y);
    }

    update(speed, height){
        this.y = this.y <  height + symbolSize ?  this.y + speed : -500;
        this.sym = frameCount % this.rate == 0 ? Symbol.getRandSymbol() : this.sym; 
    }
}
