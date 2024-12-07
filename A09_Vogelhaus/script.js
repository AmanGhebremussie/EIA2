"use strict";
// Canvas und Kontext
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
if (ctx) {
    // Hintergrund zeichnen
    function drawBackground() {
        // Himmel
        const sky = ctx.createLinearGradient(0, 0, 0, canvas.height);
        sky.addColorStop(0, "#87CEEB");
        sky.addColorStop(1, "#FFFFFF");
        ctx.fillStyle = sky; // Hellblauer Himmel
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        // Sonne
        ctx.beginPath();
        ctx.arc(725, 75, 50, 0, Math.PI * 2);
        ctx.fillStyle = '#FFD700'; // Gelbe Sonne
        ctx.fill();
        // Boden 
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 375, canvas.width, 225); // Bodenfläche
    }
    // Schneemann zeichnen
    function drawSnowman() {
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
    function drawHouse() {
        // Rechteck
        ctx.beginPath();
        ctx.moveTo(200, 450);
        ctx.lineTo(300, 450);
        ctx.lineTo(300, 350);
        ctx.lineTo(200, 350);
        ctx.lineTo(200, 450);
        // ctx.stroke();
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
    function drawTree(x, y) {
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
    // Funktion zum Erzeugen zufälliger Positionen für die Schneeflocken
    function randomCoordinates() {
        return {
            x: Math.floor(Math.random() * canvas.width), // Zufällige x-Position
            y: Math.floor(Math.random() * canvas.height) // Zufällige y-Position
        };
    }
    // Zufällige Farbe erzeugen
    function randomColor() {
        const colors = ["#FFFFFF"]; // Weiße Farbe für den Schnee
        return colors[Math.floor(Math.random() * colors.length)];
    }
    // Zufällige Schneeflocken zeichnen
    function drawSnowflake() {
        for (let i = 0; i < 30; i++) {
            const { x, y } = randomCoordinates(); // Zufällige Position für jede Schneeflocke
            const size = Math.floor(Math.random() * 20) + 10; // Zufällige Größe für jede Linie innerhalb von 10 und 30
            // Zeichnet eine Schneeflocke mit 6 Linien
            for (let j = 0; j < 6; j++) {
                ctx.beginPath();
                const angle = (Math.PI / 3) * j; // Winkel für jede Linie (60 Grad)
                const x1 = x + size * Math.cos(angle);
                const y1 = y + size * Math.sin(angle);
                const x2 = x + size * Math.cos(angle + Math.PI);
                const y2 = y + size * Math.sin(angle + Math.PI);
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.strokeStyle = randomColor();
                ctx.lineWidth = 1.5;
                ctx.stroke();
                ctx.closePath();
            }
        }
    }
    drawBackground();
    // drawMountain();
    drawSnowman();
    drawHouse();
    drawTree(450, 400);
    drawTree(600, 350);
    drawTree(700, 450);
    drawSnowflake();
}
//# sourceMappingURL=script.js.map