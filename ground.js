class Ground{
    constructor(x,y){
     var option={
        isStatic:true
     }

    this.body=Bodies.rectangle(x,y,1150,20,option)
    World.add(world, this.body)
    }

    display(){

      fill("white")  
      rectMode(CENTER)
      rect(this.body.position.x,this.body.position.y,1150,20)
        
    }
    
    
}