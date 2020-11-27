class String {
    constructor(body1, body2, xOffset , yOffset){
        this.xOffset = xOffset;
        this.yOffset = yOffset;
        var options ={
            bodyA : body1,
            bodyB: body2,
            stiffness: 1,
            length:300,
           pointA:{x: xOffset, y: yOffset } 
    
        }
    this.string = Matter.Constraint.create(options)
    World.add(world, this.string);
    }
    display(){
        var point1= this.string.bodyA.position
        var point2 = this.string.bodyB.position
        strokeWeight(9)
        var roofAttachPointX = point1.x + this.xOffset
        var roofAttachPointY = point1.y + this.yOffset
    line(roofAttachPointX, roofAttachPointY, point2.x, point2.y)
    
    }
    }

