class Stream{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.shine = Math.floor(Math.random() * 3) == 1; 
        this.len = Math.round(Math.max( height*0.4/symbolSize, Math.floor( Math.random()*(height/symbolSize))));
        this.speed = Math.random()*MAXSPEED+2;
        this.symbols  = Array.from({length: this.len}, () => new Symbol(x,y-=symbolSize*1.3) );
    }

    draw(height){
        let f = 255;
        this.symbols.forEach((s,i) => {
            s.render(f-=fade, i==0 && this.shine );
            s.update(this.speed,height);
        });
    }
}

