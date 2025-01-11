"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBackground = createBackground;
function createBackground(canvasWidth, canvasHeight) {
    const backgroundImage = document.createElement("canvas");
    backgroundImage.width = canvasWidth;
    backgroundImage.height = canvasHeight;
    const bgCtx = backgroundImage.getContext("2d");
    // Hintergrund zeichnen
    const sky = bgCtx.createLinearGradient(0, 0, 0, canvasHeight);
    sky.addColorStop(0, "#87CEEB");
    sky.addColorStop(1, "#FFFFFF");
    bgCtx.fillStyle = sky;
    bgCtx.fillRect(0, 0, canvasWidth, canvasHeight);
    // Boden zeichnen
    bgCtx.fillStyle = "#FFFFFF";
    bgCtx.fillRect(0, 375, canvasWidth, 225);
    // Sonne zeichnen
    bgCtx.beginPath();
    bgCtx.arc(725, 75, 50, 0, Math.PI * 2);
    bgCtx.fillStyle = "#FFD700";
    bgCtx.fill();
    return backgroundImage;
}
//# sourceMappingURL=background.js.map