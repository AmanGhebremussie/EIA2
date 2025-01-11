// src/bird.ts

export class Bird {
    x: number;
    y: number;
    color: string;
    type: "flying" | "pecking";
    peckingOffset: number;
    bodyOffset: number;

    constructor(x: number, y: number, color: string, type: "flying" | "pecking") {
        this.x = x;
        this.y = y;
        this.color = color;
        this.type = type;
        this.peckingOffset = 0;
        this.bodyOffset = 0;
    }

    update(canvasWidth: number) {
        if (this.type === "flying") {
            this.x += 2;
            if (this.x > canvasWidth + 50) this.x = -50;
            this.peckingOffset = Math.sin(Date.now() / 200) * 8;
        } else if (this.type === "pecking") {
            this.peckingOffset = Math.sin(Date.now() / 300) * 10;
            this.bodyOffset = Math.sin(Date.now() / 300) * 5;
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        if (this.type === "flying") {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x - 25, this.y - 20 + this.peckingOffset);
            ctx.lineTo(this.x - 10, this.y);
            ctx.fillStyle = this.color;
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(this.x + 15, this.y);
            ctx.lineTo(this.x + 35, this.y - 20 + this.peckingOffset);
            ctx.lineTo(this.x + 20, this.y);
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        ctx.beginPath();
        ctx.ellipse(this.x, this.y + (this.type === "pecking" ? this.bodyOffset : 0), 15, 10, 0, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(this.x + 15, this.y - 5 + (this.type === "pecking" ? this.peckingOffset : 0), 7, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}
