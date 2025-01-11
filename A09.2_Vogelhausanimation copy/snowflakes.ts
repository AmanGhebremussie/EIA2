// src/snowflake.ts

export class Snowflake {
    x: number;
    y: number;
    size: number;
    speed: number;

    constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.size = Math.random() * 10 + 5;
        this.speed = Math.random() * 2 + 1;
    }

    update(canvasHeight: number) {
        this.y += this.speed;
        if (this.y > canvasHeight) {
            this.y = 0;
            this.x = Math.random() * canvasHeight;
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
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
