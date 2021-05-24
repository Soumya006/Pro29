class Slingshot {
    
    constructor (bodyA,pointB) {

        var options = {
            pointB : pointB,
            bodyA : bodyA,
            stiffness:0.02,
            length:1,
           
        }

       
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA = null;
      }
    display() 
    {
        if(this.sling.bodyA){
           push(); 
        
        var pos = this.sling.bodyA.position;
        var posPoint = this.sling.pointB;
        stroke("white");
        strokeWeight(3);
        line (posPoint.x,posPoint.y,pos.x,pos.y);
        pop ();
        
        
        }
    }
    
}