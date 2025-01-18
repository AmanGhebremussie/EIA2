import { MovableObject } from "./MovableObject.js";

export class Bird extends MovableObject {
    color: string;
    type: "flying" | "pecking";
    peckingOffset: number = 0;

    constructor(x: number, y: number, speed: number, color: string, type: "flying" | "pecking") {
        super(x, y, speed);
        this.color = color;
        this.type = type;
    }

    update(): void {
        if (this.type === "flying") {
            this.x += this.speed;
            if (this.x > 800) this.x = -50; // Angenommene Breite von canvas = 800
            this.peckingOffset = Math.sin(Date.now() / 200) * 8;
        } else if (this.type === "pecking") {
            this.peckingOffset = Math.sin(Date.now() / 300) * 10;
        }
    }

    draw(ctx: CanvasRenderingContext2D): void {
        if (this.type === "flying") {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x - 25, this.y - 20 + this.peckingOffset);
            ctx.lineTo(this.x - 10, this.y);
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        ctx.beginPath();
        ctx.ellipse(this.x, this.y, 15, 10, 0, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(this.x + 15, this.y - 5 + this.peckingOffset, 7, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}
