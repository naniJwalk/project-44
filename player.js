class player{
    constructor(x,y){
    var options={
        friction:0.01
    }
    this.body = Bodies.rectangle(x, y, 20, 100, options);
    this.width = 20;
    this.height = 100;
    this.image = loadImage("sadwalk1.png","sadwalk3.png","sadwalk5.png");
    //player.scale=0.15
    World.add(world, this.body);
      }
      display(){
       
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image,20, 100);
        pop();
      }
}