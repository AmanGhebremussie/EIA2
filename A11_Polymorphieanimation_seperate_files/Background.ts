export function drawBackground(ctx: CanvasRenderingContext2D) {
    const sky = ctx.createLinearGradient(0, 0, 0, 600); // Höhe von canvas = 600
    sky.addColorStop(0, "#87CEEB");
    sky.addColorStop(1, "#FFFFFF");
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, 800, 600); // Breite und Höhe des Canvas

    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 375, 800, 225); // Boden

    // Sonne
    ctx.beginPath();
    ctx.arc(725, 75, 50, 0, Math.PI * 2);
    ctx.fillStyle = "#FFD700";
    ctx.fill();

    drawTree(ctx, 450, 400);
    drawTree(ctx, 600, 350);
    drawTree(ctx, 700, 450);
}

export function drawTree(ctx: CanvasRenderingContext2D, x: number, y: number) {
    ctx.beginPath();
    ctx.moveTo(x - 25, y);
    ctx.lineTo(x - 25, y + 50);
    ctx.lineTo(x + 25, y + 50);
    ctx.lineTo(x + 25, y);
    ctx.lineTo(x - 25, y);
    ctx.fillStyle = "#501D15";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(x - 50, y);
    ctx.lineTo(x, y - 100);
    ctx.lineTo(x + 50, y);
    ctx.lineTo(x - 50, y);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}
