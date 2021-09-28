class Snow{
    constructor(x,y){
        var options= {
            friction:0.02,
            density: 0.7,
            restitution:0.74
        }
        this.snow= Bodies.circle(x,y,10,options)
        this.radius=10
        var i=Math.round(random(1,2))
        var img
        if(i===1){
            img= "snow4.webp"
        }
        else{
            img= "snow5.webp"
        }
        this.image= loadImage(img);
        World.add(world, this.snow);
    }
    display(){
      fill("blue");
      imageMode(CENTER);
      image(this.image,this.snow.position.x,this.snow.position.y,10,10)
    }
    update(){
        if(this.snow.position.y>height){
            Matter.Body.setPosition(this.snow,{x:random(0,800), y:random(0,800)});
        }
    }
}