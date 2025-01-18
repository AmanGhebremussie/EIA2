"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Snowflake = void 0;
const MovableObject_js_1 = require("./MovableObject.js");
class Snowflake extends MovableObject_js_1.MovableObject {
    size;
    constructor(x, y, speed, size) {
        super(x, y, speed);
        this.size = size;
    }
    update() {
        this.y += this.speed;
        if (this.y > 600)
            this.y = 0; // Angenommene Höhe von canvas = 600
    }
    draw(ctx) {
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
exports.Snowflake = Snowflake;
//# sourceMappingURL=Snowflake.js.map