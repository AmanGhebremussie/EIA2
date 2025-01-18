"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bird_js_1 = require("./Bird.js");
const Snowflake_js_1 = require("./Snowflake.js");
const Background_js_1 = require("./Background.js");
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
if (ctx) {
    const movableObjects = [];
    const birdColors = ["red", "blue", "green", "yellow", "purple"];
    function initObjects() {
        for (let i = 0; i < 5; i++) {
            const x = Math.random() * canvas.width;
            const y = 500 + Math.random() * 50;
            const speed = Math.random() * 2 + 1;
            const color = birdColors[i % birdColors.length];
            movableObjects.push(new Bird_js_1.Bird(x, y, speed, color, "pecking"));
        }
        for (let i = 0; i < 15; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height / 2;
            const speed = Math.random() * 2 + 1;
            const color = birdColors[i % birdColors.length];
            movableObjects.push(new Bird_js_1.Bird(x, y, speed, color, "flying"));
        }
        for (let i = 0; i < 50; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const speed = Math.random() * 2 + 1;
            const size = Math.random() * 10 + 5;
            movableObjects.push(new Snowflake_js_1.Snowflake(x, y, speed, size));
        }
    }
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        (0, Background_js_1.drawBackground)(ctx);
        movableObjects.forEach(obj => {
            obj.update();
            obj.draw(ctx);
        });
        requestAnimationFrame(animate);
    }
    initObjects();
    animate();
}
//# sourceMappingURL=main.js.map