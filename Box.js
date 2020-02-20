class Box{
    constructor(x,y){
        var options = {
            restitution: 1.0,
            friction: 2.0,
            density: 1.0
        }
        this.body= Bodies.rectangle(x,y, 50,50,options);
        this.width=50;
        this.height=50;
        World.add(this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0, 0, this.width, this.height);
        pop();

    }
}