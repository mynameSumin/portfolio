import { randomNumBetween } from "../utils/randomNumBetween";

export default class Particle {
    x: number;
    y: number;
    r: number;
    angle: number;
    rRandom: number;
    angleRandom: number;
    rFriction: number;
    angleFriction: number;
    opacity: number;

    constructor() {
        this.r = 20; //반지름
        this.rFriction = randomNumBetween(0.99, 1);
        this.rRandom = randomNumBetween(0, 5);

        this.angle = randomNumBetween(0, 360); //각도
        this.angleRandom = randomNumBetween(1, 2);
        this.angleFriction = 0.97;

        this.x = innerWidth / 2;
        this.y = innerHeight / 2;
        this.opacity = randomNumBetween(0.3, 0.8);
    }

    update(){
        this.rRandom *= this.rFriction;
        this.angleRandom *= this.angleFriction;
        this.r += this.rRandom;
        this.angle += this.angleRandom;
        this.x = innerWidth / 2 + this.r * Math.cos(Math.PI / 180 * this.angle);
        this.y = innerHeight / 2 + this.r * Math.sin(Math.PI / 180 * this.angle);
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, randomNumBetween(0.8, 1.5), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
        ctx.closePath();
    }
}