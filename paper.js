class Paper {
    constructor(x, y) {
        var options  = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.image = loadImage("sprites/paper.png");
        this.body = Bodies.circle(x, y, 70, options);
        this.RADIUS = 70;

        World.add(world, this.body)
    }
    display() {
        var pos = this.body.position
        ellipseMode(RADIUS);
        circle(pos.x, pos.y, 70);
    }
}