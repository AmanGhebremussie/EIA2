// src/main.ts

import { drawBackground } from "./background";
import { Bird } from "./bird";
import { Snowflake } from "./snowflakes";

const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

const birds: Bird[] = [];
const snowflakes: Snowflake[] = [];
const birdColors = ["red", "blue", "green", "yellow", "purple", "pink", "brown", "black"];

function init() {
    for (let i = 0; i < 5; i++) {
        birds.push(new Bird(Math.random() * canvas.width, 500 + Math.random() * 50, birdColors[Math.floor(Math.random() * birdColors.length)], "pecking"));
    }
    for (let i = 0; i < 15; i++) {
        birds.push(new Bird(Math.random() * canvas.width, Math.random() * canvas.height / 2, birdColors[Math.floor(Math.random() * birdColors.length)], "flying"));
    }
    for (let i = 0; i < 50; i++) {
        snowflakes.push(new Snowflake(canvas.width, canvas.height));
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBackground(ctx, canvas.width, canvas.height);
    drawSun(ctx);
    drawSnowman(ctx);

    birds.forEach(bird => {
        bird.update(canvas.width);
        bird.draw(ctx);
    });

    snowflakes.forEach(flake => {
        flake.update(canvas.height);
        flake.draw(ctx);
    });

    requestAnimationFrame(animate);
}

init();
animate();
