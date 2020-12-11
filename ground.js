class Ground{
constructor(){
    this.body=Bodies.rectangle(200,390,400,20,{isStatic:true})
    World.add(world,this.body)
}
display(){
    var pos = this.body.position
    rectMode(CENTER)
    rect(pos.x,pos.y,400,20)
}


}