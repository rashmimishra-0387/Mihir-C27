class Bob {
   constructor(x, y){
        var options = {
            'friction': 1.0,
            'restitution':1.2,
            'density':0.8
        }

        this.body = Bodies.circle(x, y, 20, options);
        this.radius = 40;
        World.add(world, this.body)

    }

    display(){

        var pos = this.body.position
        //var angle = this.body.angle
        //push();
        //translate(pos.x, pos.y)
        ellipseMode(RADIUS)
        //rotate(angle)
        fill("pink")
        ellipse(pos.x , pos.y, this.radius, this.radius);
        //pop()

    }
        

}