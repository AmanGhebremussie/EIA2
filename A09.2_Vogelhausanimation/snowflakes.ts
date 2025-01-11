const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

class Snowflake {
    constructor(x, y, size, speed) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
    }

    update() {
        this.y += this.speed; // Schneeflocke fällt nach unten
        if (this.y > canvas.height) this.y = 0; // Schneeflocke startet oben neu
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.closePath();
    }
}

class Snowfall {
    constructor() {
        this.snowflakes = [];
    }

    init() {
        // Schneeflocken initialisieren
        for (let i = 0; i < 30; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const size = Math.random() * 3 + 2; // Größe zwischen 2 und 5
            const speed = Math.random() * 2 + 1; // Geschwindigkeit zwischen 1 und 3
            this.snowflakes.push(new Snowflake(x, y, size, speed));
        }
    }

    update() {
        this.snowflakes.forEach(snowflake => snowflake.update());
    }

    draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Canvas löschen
        this.snowflakes.forEach(snowflake => snowflake.draw());
    }

    start() {
        this.init();
        const animate = () => {
            this.update();
            this.draw();
            requestAnimationFrame(animate);
        };
        animate();
    }
}

const snowfall = new Snowfall();
snowfall.start();
