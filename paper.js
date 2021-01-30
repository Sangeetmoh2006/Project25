class Paper {
    constructor(x, y) {
        var options  = {
            isStatic: false,
            restitution: 0.3,
            friction: 0,
            density: 1.2
        }
        this.body = Bodies.circle(x, y, 70, options);
        this.RADIUS = 70;
        this.image = loadImage("sprites/paper.png");
        World.add(world, this.body)
    }
    display() {
        var pos = this.body.position
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        image(this.image, 0, 0, 70, 70);
        pop();
    }
}
