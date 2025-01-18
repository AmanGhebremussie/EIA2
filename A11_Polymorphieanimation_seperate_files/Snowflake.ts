import { MovableObject } from "./MovableObject.js";

export class Snowflake extends MovableObject {
    size: number;

    constructor(x: number, y: number, speed: number, size: number) {
        super(x, y, speed);
        this.size = size;
    }

    update(): void {
        this.y += this.speed;
        if (this.y > 600) this.y = 0; // Angenommene Höhe von canvas = 600
    }

    draw(ctx: CanvasRenderingContext2D): void {
        for (let j = 0; j < 6; j++) {
            ctx.beginPath();
            const angle = (Math.PI / 3) * j;
            const x1 = this.x + this.size * Math.cos(angle);
            const y1 = this.y + this.size * Math.sin(angle);
            const x2 = this.x + this.size * Math.cos(angle + Math.PI);
            const y2 = this.y + this.size * Math.sin(angle + Math.PI);
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = "#FFFFFF";
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.closePath();
        }
    }
}
