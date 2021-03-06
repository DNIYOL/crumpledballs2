class ContainerL  {
  
    constructor(x, y, width, height) {
      var options = {
          isStatic: false,
          'restitution':0.1,
          'friction':0,
          'density':0.1,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/dustbingreen.png");
      //this.image = loadImage("sprites/paper.png");
      
      World.add(world, this.body);
    }
    display(){
       var pos =this.body.position;
       var angle = this.body.angle;
       push();
       translate(pos.x, pos.y);
       rotate(angle);
       imageMode(CENTER);
       //rectMode(CENTER);
       //fill(255);
       image(this.image,0, 0, this.width, this.height);
       //rect(0, 0, this.width, this.height)
       pop();
    }
  };
  