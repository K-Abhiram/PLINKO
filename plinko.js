class Plinko {
    constructor(x,y) {
      var options = {
          isStatic: true,
          
         
      }
      this.body = Bodies.circle(x,y,15,options);
      this.radius = 15;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x , pos.y);
      rotate (angle);
      ellipseMode(CENTER);
      fill(242,136,0);
      ellipse(0, 0, this.radius);
      pop ();
    }
  };