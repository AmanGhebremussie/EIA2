"use strict";
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
if (ctx) {
    // Superklasse für bewegte Objekte
    class MovableObject {
        x;
        y;
        speed;
        constructor(x, y, speed) {
            this.x = x;
            this.y = y;
            this.speed = speed;
        }
    }
    // Subklasse Bird
    class Bird extends MovableObject {
        color;
        type;
        peckingOffset = 0;
        constructor(x, y, speed, color, type) {
            super(x, y, speed);
            this.color = color;
            this.type = type;
        }
        update() {
            if (this.type === "flying") {
                this.x += this.speed;
                if (this.x > canvas.width + 50)
                    this.x = -50;
                this.peckingOffset = Math.sin(Date.now() / 200) * 8;
            }
            else if (this.type === "pecking") {
                this.peckingOffset = Math.sin(Date.now() / 300) * 10;
            }
        }
        draw(ctx) {
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
            ctx.beginPath();
            ctx.ellipse(this.x, this.y, 15, 10, 0, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.beginPath();
            ctx.arc(this.x + 15, this.y - 5 + this.peckingOffset, 7, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }
    // Subklasse Snowflake
    class Snowflake extends MovableObject {
        size;
        constructor(x, y, speed, size) {
            super(x, y, speed);
            this.size = size;
        }
        update() {
            this.y += this.speed;
            if (this.y > canvas.height) {
                this.y = 0;
                this.x = Math.random() * canvas.width;
            }
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
    // Array für alle bewegten Objekte
    const movableObjects = [];
    const birdColors = ["red", "blue", "green", "yellow", "purple"];
    // Initialisiert die bewegten Objekte
    function initObjects() {
        for (let i = 0; i < 5; i++) {
            const x = Math.random() * canvas.width;
            const y = 500 + Math.random() * 50;
            const speed = Math.random() * 2 + 1;
            const color = birdColors[i % birdColors.length];
            movableObjects.push(new Bird(x, y, speed, color, "pecking"));
        }
        for (let i = 0; i < 15; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height / 2;
            const speed = Math.random() * 2 + 1;
            const color = birdColors[i % birdColors.length];
            movableObjects.push(new Bird(x, y, speed, color, "flying"));
        }
        for (let i = 0; i < 50; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const speed = Math.random() * 2 + 1;
            const size = Math.random() * 10 + 5;
            movableObjects.push(new Snowflake(x, y, speed, size));
        }
    }
    // Zeichnet den Hintergrund
    function drawBackground() {
        const sky = ctx.createLinearGradient(0, 0, 0, canvas.height);
        sky.addColorStop(0, "#87CEEB");
        sky.addColorStop(1, "#FFFFFF");
        ctx.fillStyle = sky;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 375, canvas.width, 225);
        // Sonne
        ctx.beginPath();
        ctx.arc(725, 75, 50, 0, Math.PI * 2);
        ctx.fillStyle = "#FFD700";
        ctx.fill();
        // Schneemann zeichnen
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
        ctx.fillStyle = gradient;
        ctx.fill();
        // Kopf
        ctx.beginPath();
        ctx.arc(150, 375, 25, 0, Math.PI * 2); // Kreis
        ctx.fillStyle = gradient;
        ctx.fill();
        // Knöpfe auf dem Körper
        ctx.beginPath();
        ctx.arc(150, 415, 5, 0, Math.PI * 2); // Knopf 1
        ctx.fillStyle = '#000000';
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
        ctx.fillStyle = '#000000';
        ctx.fill();
        ctx.beginPath();
        ctx.arc(160, 365, 3, 0, Math.PI * 2); // Rechtes Auge
        ctx.fillStyle = '#000000';
        ctx.fill();
        // Nase
        ctx.beginPath();
        ctx.moveTo(150, 375); // Startpunkt der Nase 
        ctx.lineTo(150, 385); // Unteres Ende der Nase
        ctx.lineTo(160, 380); // Spitze der Nase 
        ctx.closePath();
        ctx.fillStyle = '#FFA500';
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
        // Bäume hinzufügen
        drawTree(450, 400);
        drawTree(600, 350);
        drawTree(700, 450);
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
    // Animation
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBackground();
        movableObjects.forEach(obj => {
            obj.update();
            obj.draw(ctx);
        });
        requestAnimationFrame(animate);
    }
    initObjects();
    animate();
}
//# sourceMappingURL=script.js.map