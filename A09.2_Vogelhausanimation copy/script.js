"use strict";
// Zugriff auf das Canvas-Element und den 2D-Rendering-Kontext
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
// Sicherstellen, dass der Kontext verfügbar ist
if (ctx) {
    /**
     * Klasse für Vögel
     */
    class Bird {
        x; // Horizontale Position des Vogels
        y; // Vertikale Position des Vogels
        color; // Farbe des Vogels
        type; // Typ des Vogels (fliegend oder pickend)
        peckingOffset; // Bewegung des Kopfes beim Picken oder der Flügel beim Fliegen
        bodyOffset; // Bewegung des Körpers beim Picken
        constructor(x, y, color, type) {
            this.x = x; // Startposition auf der x-Achse
            this.y = y; // Startposition auf der y-Achse
            this.color = color; // Farbe des Vogels
            this.type = type; // Typ des Vogels
            this.peckingOffset = 0; // Initialer Offset für den Kopf oder die Flügel
            this.bodyOffset = 0; // Initialer Offset für den Körper
        }
        // Aktualisiert die Bewegung der Vögel
        update() {
            if (this.type === "flying") {
                this.x += 2; // Fliegende Vögel bewegen sich nach rechts
                if (this.x > canvas.width + 50)
                    this.x = -50; // Wiederholt die Bewegung
                this.peckingOffset = Math.sin(Date.now() / 200) * 8; // Flügelbewegung
            }
            else if (this.type === "pecking") {
                this.peckingOffset = Math.sin(Date.now() / 300) * 10; // Kopfbewegung
                this.bodyOffset = Math.sin(Date.now() / 300) * 5; // Körperbewegung
            }
        }
        // Zeichnet den Vogel
        draw() {
            // Flügel für fliegende Vögel
            if (this.type === "flying") {
                ctx.beginPath();
                ctx.moveTo(this.x, this.y); // Startpunkt des linken Flügels
                ctx.lineTo(this.x - 25, this.y - 20 + this.peckingOffset); // Linke Flügelspitze
                ctx.lineTo(this.x - 10, this.y); // Endpunkt des linken Flügels
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.beginPath();
                ctx.moveTo(this.x + 15, this.y); // Startpunkt des rechten Flügels
                ctx.lineTo(this.x + 35, this.y - 20 + this.peckingOffset); // Rechte Flügelspitze
                ctx.lineTo(this.x + 20, this.y); // Endpunkt des rechten Flügels
                ctx.fillStyle = this.color;
                ctx.fill();
            }
            // Körper des Vogels
            ctx.beginPath();
            ctx.ellipse(this.x, this.y + (this.type === "pecking" ? this.bodyOffset : 0), 15, 10, 0, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            // Kopf des Vogels
            ctx.beginPath();
            ctx.arc(this.x + 15, this.y - 5 + (this.type === "pecking" ? this.peckingOffset : 0), 7, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            // Schnabel des Vogels
            ctx.beginPath();
            ctx.moveTo(this.x + 20, this.y - 5 + (this.type === "pecking" ? this.peckingOffset : 0));
            ctx.lineTo(this.x + 30, this.y - 2 + (this.type === "pecking" ? this.peckingOffset : 0));
            ctx.lineTo(this.x + 20, this.y + 2 + (this.type === "pecking" ? this.peckingOffset : 0));
            ctx.closePath();
            ctx.fillStyle = "orange";
            ctx.fill();
            // Augen
            ctx.beginPath();
            ctx.arc(this.x + 17, this.y - 7 + (this.type === "pecking" ? this.peckingOffset : 0), 2, 0, Math.PI * 2);
            ctx.fillStyle = "white";
            ctx.fill();
            ctx.beginPath();
            ctx.arc(this.x + 19, this.y - 7 + (this.type === "pecking" ? this.peckingOffset : 0), 1, 0, Math.PI * 2);
            ctx.fillStyle = "black";
            ctx.fill();
            // Beine für pickende Vögel
            if (this.type === "pecking") {
                ctx.beginPath();
                ctx.moveTo(this.x - 5, this.y + 10 + this.bodyOffset); // Linkes Bein
                ctx.lineTo(this.x - 5, this.y + 20 + this.bodyOffset);
                ctx.moveTo(this.x + 5, this.y + 10 + this.bodyOffset); // Rechtes Bein
                ctx.lineTo(this.x + 5, this.y + 20 + this.bodyOffset);
                ctx.strokeStyle = "black";
                ctx.lineWidth = 1.5;
                ctx.stroke();
            }
        }
    }
    class Snowflake {
        x;
        y;
        size;
        speed;
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 10 + 5; // Größe der Schneeflocke
            this.speed = Math.random() * 2 + 1; // Geschwindigkeit der Schneeflocke
        }
        update() {
            this.y += this.speed; // Bewegung nach unten
            if (this.y > canvas.height) {
                this.y = 0;
                this.x = Math.random() * canvas.width; // Startet oben neu
            }
        }
        draw() {
            for (let j = 0; j < 6; j++) {
                ctx.beginPath();
                const angle = (Math.PI / 3) * j;
                const x1 = this.x + this.size * Math.cos(angle);
                const y1 = this.y + this.size * Math.sin(angle);
                const x2 = this.x + this.size * Math.cos(angle + Math.PI);
                const y2 = this.y + this.size * Math.sin(angle + Math.PI);
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.strokeStyle = "#FFFFFF"; // Weiße Schneeflocken
                ctx.lineWidth = 1.5;
                ctx.stroke();
                ctx.closePath();
            }
        }
    }
    const birds = [];
    const snowflakes = [];
    const birdColors = ["red", "blue", "green", "yellow", "purple", "pink", "brown", "black"];
    // Initialisiert die Vögel und Schneeflocken
    function initBirdsAndSnowflakes() {
        for (let i = 0; i < 5; i++) {
            const x = Math.random() * canvas.width;
            const y = 500 + Math.random() * 50;
            const color = birdColors[Math.floor(Math.random() * birdColors.length)];
            birds.push(new Bird(x, y, color, "pecking"));
        }
        for (let i = 0; i < 15; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height / 2;
            const color = birdColors[Math.floor(Math.random() * birdColors.length)];
            birds.push(new Bird(x, y, color, "flying"));
        }
        for (let i = 0; i < 50; i++) {
            snowflakes.push(new Snowflake());
        }
    }
    // Zeichnet den Hintergrund
    function drawBackground() {
        const sky = ctx.createLinearGradient(0, 0, 0, canvas.height);
        sky.addColorStop(0, "#87CEEB"); // Himmel
        sky.addColorStop(1, "#FFFFFF"); // Schnee
        ctx.fillStyle = sky;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 375, canvas.width, 225);
    }
    // Zeichnet die Sonne
    function drawSun() {
        ctx.beginPath();
        ctx.arc(725, 75, 50, 0, Math.PI * 2);
        ctx.fillStyle = "#FFD700";
        ctx.fill();
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
    // Baum zeichnen
    function drawTree(x, y) {
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
    // Animiert die Szene
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBackground();
        drawSun();
        drawSnowman();
        drawHouse();
        drawTree(450, 400);
        drawTree(600, 350);
        drawTree(700, 450);
        birds.forEach(bird => {
            bird.update();
            bird.draw();
        });
        snowflakes.forEach(flake => {
            flake.update();
            flake.draw();
        });
        requestAnimationFrame(animate);
    }
    initBirdsAndSnowflakes();
    animate();
}
//# sourceMappingURL=script.js.map