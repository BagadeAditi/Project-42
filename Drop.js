class Drop {
    constructor(x,y,r){
        var options = {
            isStatic: false,
            friction:0.1
        }
        this.image = loadImage("raindrop3.jpg");
        
        this.rain = Matter.Bodies.circle(x,y,r,options);
        this.r = r
        World.add(world, this.rain)

        
    }

    update(){
        if(this.rain.position.y>height){
            Matter.Body.setPosition(this.rain,{x:random (10,390),y:-10})
        }
    }

    display(){
        var pos = this.rain.position;
        imageMode(CENTER);
        //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
        image(this.image,pos.x,pos.y+70,30,40);

    }
}