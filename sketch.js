var bgimg
var bg
var spaceship,spaceshipimg

function preload(){
 bgimg=loadImage("space.jpg")
 spaceshipimg=loadImage("spaceship.png")

}

function setup(){
 createCanvas(800,600) 
 bg= createSprite(400,300)
 bg.velocityY=0.5
 bg.addImage("moving",bgimg)

 spaceship=createSprite(400,545)
 spaceship.addImage("scrolling",spaceshipimg)
 spaceship.scale=0.3


}

function draw(){
 background("blue")
 if(bg.y>600){
   bg.y=300
 }
 if(keyDown("LEFT_ARROW")&& spaceship.x>60){
   spaceship.x=spaceship.x-50

 }
 if(keyDown("RIGHT_ARROW")&& spaceship.x<740){
  spaceship.x=spaceship.x+50
}

 drawSprites()
 text("X"+mouseX+","+"Y"+mouseY,mouseX,mouseY)
}