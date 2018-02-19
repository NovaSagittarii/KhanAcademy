
var sensitivity = 3;
mouseMoved = mouseDragged = function(){
    mouseX = mouseX*sensitivity % width;
    mouseY = mouseY*sensitivity % height;
};
strokeWeight(5);
stroke(0);
draw = function(){
    background(255, 255, 255);
    line(pmouseX, pmouseY, mouseX, mouseY);
};
