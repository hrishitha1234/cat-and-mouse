var cat,catImg;
var mouse,mouseImg;

function preload() {
cat.loadImg(catImg);
mouse.loadImg(mouseImg);
}

function setup(){
    createCanvas(1000,800);
    
    

}

function draw() {

    background(255);
    
    

    drawSprites();

}

function keyPressed(){
    if(keyCode===LEFT_ARROW){
        cat.velocityX=-5;
        cat.addAnimation("catRunning",catImg2);
        cat.changeAnimation("catRunning");
    }
  text(mouseX+','+mouseY,10,45)


}
