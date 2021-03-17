class Umbrella { 
    constructor(x,y){
         var options = {
              isStatic: true,
              
         };
         this.radius = 50;
         this.body = Bodies.circle(x,y, this.radius, options);
        this.image=loadImage("images/Walking Frame/walking_8.png")
         World.add(world, this.body);
    }
  display(){
   var pos=this.body.position
   imageMode (CENTER)
   image(this.image,pos.x, pos.y+141,370,370)
  }
}