class Paper {
    constructor(x, y) {
        var options  = {
            isStatic: false,
            restitution: 0.5,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(x, y, 50, options);
        this.RADIUS = 50;
        this.image = loadImage("sprites/paper.png");
        World.add(world, this.body)
    }
    display() {
        var pos = this.body.position
        ellipseMode(RADIUS);
        image(this.image, pos.x, pos.y, 50);
    }
}
