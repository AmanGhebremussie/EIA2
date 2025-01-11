"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.drawSnowman = drawSnowman;
exports.drawHouse = drawHouse;
exports.drawTree = drawTree;
function drawSnowman(ctx) {
    // Kugel 1 (Körper)
    const gradient = ctx.createLinearGradient(100, 350, 200, 550);
    gradient.addColorStop(0, '#FFFFFF'); // Weiß oben
    gradient.addColorStop(1, '#E0EEF7'); // Hellblau unten
    // Kugel 1 (Körper)
    ctx.beginPath();
    ctx.arc(150, 500, 50, 0, Math.PI * 2); // Kreis
    ctx.fillStyle = gradient; // Farbverlauf
    ctx.fill();
    // Kugel 2 (Mittlerer Teil)
    ctx.beginPath();
    ctx.arc(150, 425, 35, 0, Math.PI * 2); // Kreis
    ctx.fillStyle = gradient; // Farbverlauf
    ctx.fill();
    // Kopf
    ctx.beginPath();
    ctx.arc(150, 375, 25, 0, Math.PI * 2); // Kreis
    ctx.fillStyle = gradient; // Farbverlauf
    ctx.fill();
    // Knöpfe auf dem Körper
    ctx.beginPath();
    ctx.arc(150, 415, 5, 0, Math.PI * 2); // Knopf 1
    ctx.fillStyle = '#000000'; // Schwarz für Knöpfe
    ctx.fill();
    ctx.beginPath();
    ctx.arc(150, 435, 5, 0, Math.PI * 2); // Knopf 2
    ctx.fillStyle = '#000000';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(150, 455, 5, 0, Math.PI * 2); // Knopf 3
    ctx.fillStyle = '#000000';
    ctx.fill();
    // Augen
    ctx.beginPath();
    ctx.arc(140, 365, 3, 0, Math.PI * 2); // Linkes Auge
    ctx.fillStyle = '#000000'; // Schwarz für Augen
    ctx.fill();
    ctx.beginPath();
    ctx.arc(160, 365, 3, 0, Math.PI * 2); // Rechtes Auge
    ctx.fillStyle = '#000000';
    ctx.fill();
    // Nase
    ctx.beginPath();
    ctx.moveTo(150, 375); // Startpunkt der Nase (Mitte des Gesichts)
    ctx.lineTo(150, 385); // Unteres Ende der Nase
    ctx.lineTo(160, 380); // Spitze der Nase (Karottenform)
    ctx.closePath();
    ctx.fillStyle = '#FFA500'; // Orange für die Karottennase
    ctx.fill();
    // Mund
    ctx.beginPath();
    ctx.arc(150, 385, 10, 0, Math.PI); // Halber Kreis für den Mund
    ctx.strokeStyle = '#000000'; // Schwarz für den Mund
    ctx.lineWidth = 2; // Dicke der Linie
    ctx.stroke();
    // Hut - Grundfläche
    ctx.beginPath();
    ctx.fillStyle = '#000000'; // Schwarzer Hut
    ctx.fillRect(125, 340, 50, 10); // Rechteck für Hut-Basis
    // Hut - Oberer Teil
    ctx.beginPath();
    ctx.fillStyle = '#000000'; // Schwarzer Hut
    ctx.fillRect(135, 300, 30, 40); // Rechteck für Hut-Oberteil
}
function drawHouse(ctx) {
    // Rechteck
    ctx.beginPath();
    ctx.moveTo(200, 450);
    ctx.lineTo(300, 450);
    ctx.lineTo(300, 350);
    ctx.lineTo(200, 350);
    ctx.lineTo(200, 450);
    ctx.fillStyle = "#EAB573";
    ctx.fill();
    ctx.closePath();
    // Stamm
    ctx.beginPath();
    ctx.moveTo(225, 450);
    ctx.lineTo(225, 550);
    ctx.lineTo(275, 550);
    ctx.lineTo(275, 450);
    ctx.lineTo(225, 450);
    ctx.fillStyle = "#814721";
    ctx.fill();
    ctx.closePath();
    // Dach
    ctx.beginPath();
    ctx.moveTo(200, 350);
    ctx.lineTo(250, 300);
    ctx.lineTo(300, 350);
    ctx.fillStyle = "#814721";
    ctx.fill();
    ctx.closePath();
    // Kreis
    ctx.beginPath();
    ctx.arc(250, 400, 25, 0, Math.PI * 2);
    ctx.fillStyle = "#341F1A";
    ctx.fill();
    ctx.closePath();
}
function drawTree(ctx, x, y) {
    // Stamm
    ctx.beginPath();
    ctx.moveTo(x - 25, y);
    ctx.lineTo(x - 25, y + 50);
    ctx.lineTo(x + 25, y + 50);
    ctx.lineTo(x + 25, y);
    ctx.lineTo(x - 25, y);
    ctx.fillStyle = "#501D15";
    ctx.fill();
    ctx.closePath();
    // Krone
    ctx.beginPath();
    ctx.moveTo(x - 50, y);
    ctx.lineTo(x, y - 100);
    ctx.lineTo(x + 50, y);
    ctx.lineTo(x - 50, y);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}
//# sourceMappingURL=staticobjects.js.map