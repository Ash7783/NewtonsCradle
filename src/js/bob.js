class Bob{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, 50, options);
        World.add(world, this.body);
      }
      display(){
        var pos=this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        stroke("black");
        strokeWeight(2);
        fill("blue");
        ellipseMode(CENTER);
        ellipse(0, 0, 100,100);
        pop();
      }
  }