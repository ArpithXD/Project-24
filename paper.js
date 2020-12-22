class Paper {
    constructor(x,y,radius) {
        var options = {
            'isStatic': false,
            'restitution': 0.5,
            'friction': 1.0,
            'density':1.2
        }
       this.body = Bodies.circle(x,y,radius,options);
       this.radius = radius
       World.add(world,this.body);
    }
    display(){
     var pos =this.body.position;
     ellipseMode(RADIUS);
     fill("yellow");
     ellipse(pos.x, pos.y, this.radius);
   }
 }