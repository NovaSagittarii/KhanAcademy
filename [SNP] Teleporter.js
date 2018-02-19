var nou = [];
var teleport = 3;
var E = 2;
var No_U = function(){
    this.x = random(0, width);
    this.y = random(0, height);
    this.px = this.x;
    this.py = this.y;
    this.vx = random(-E, E);
    this.vy = random(-E, E);
};
No_U.prototype.work = function(){
    this.px = this.x;
    this.py = this.y;
    this.x = ~~(width+this.x+this.vx*teleport) % width;
    this.y = ~~(height+this.y+this.vy*teleport) % height;
    return [this.x, this.y, this.px, this.py];
};
strokeWeight(5);
stroke(0);
for(var i = 0; i < 10; i ++){
    nou.push(new No_U());
}
draw = function(){
    background(255, 255, 255);
    for(var i = 0; i < nou.length; i ++){
        line.apply(null, nou[i].work());
    }
};
