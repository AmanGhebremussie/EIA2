
const canvas = document.getElementById('myCanvas') as HTMLCanvasElement; // Holt sich das Canvas-Element aus der HTML-Datei
const ctx = canvas.getContext('2d'); // ctx = Canvas-Kontext, um auf Canvas zu zeichnen!


// Zufällige Farbe generieren
function randomColor(): string {
    const r = Math.floor(Math.random() * 256); // Generiert eine zufällige Zahl zwischen 0 und 255 für Rot/Grün/Blau
    const g = Math.floor(Math.random() * 256); 
    const b = Math.floor(Math.random() * 256); 
    return `rgb(${r}, ${g}, ${b})`; // ${r/g/b} = gibt den RGB-Farbwert als String zurück, z. B. 'rgb(123, 45, 67)'
}

// Zufällige Koordinaten und Größen generieren
function randomCoordinatesAndSize() {
    const x = Math.floor(Math.random() * canvas.width); // x wird erstellt und das bekommt eine Zufällige x-Koordinate innerhalb des Canvas-Bereichs
    const y = Math.floor(Math.random() * canvas.height); 
    const size = Math.floor(Math.random() * 200) + 40; // Zufällige Größe für die Form (zwischen 40 und 240)
    return { x, y, size }; // Gibt die zufälligen Werte als Objekt zurück
}

// Zufälligen Gradient-Hintergrund setzen
function setRandomGradientBackground() {
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height); // Erstellt einen linearen Farbverlauf vom oberen linken (0, 0) zum unteren rechten (canvas.width, canvas.height) Ende des Canvas
    gradient.addColorStop(0, randomColor()); // Fügt die erste zufällige Farbe am Anfang des Gradients hinzu (Position 0)
    gradient.addColorStop(1, randomColor()); // Fügt die zweite zufällige Farbe am Ende des Gradients hinzu (Position 1)
    ctx.fillStyle = gradient; // Setzt den Farbverlauf als die Fill-Farbe für die folgenden Zeichenoperationen
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Füllt das gesamte Canvas mit dem Gradient (Rechteck über die ganze Fläche)
}

// Zufällige Formen zeichnen
function drawRandomShapes() {
    for (let i = 0; i < 10; i++) { // Wiederholt das Zeichnen von Formen 10 Mal
        // Zufällige Vierecke zeichnen
        const rect = randomCoordinatesAndSize(); // Holt sich die zufälligen Werte für die Position und Größe des Rechtecks
        ctx.fillStyle = randomColor(); // Setzt eine zufällige Farbe für das Rechteck
        ctx.fillRect(rect.x, rect.y, rect.size, rect.size); // Zeichnet das Rechteck an der zufälligen Position mit der zufälligen Größe

        // Zufällige Kreise zeichnen
        const circle = randomCoordinatesAndSize(); // Holt sich die zufälligen Werte für den Kreis
        ctx.beginPath(); // Startet einen neuen Zeichenpfad
        ctx.arc(circle.x, circle.y, circle.size / 2, 0, 2 * Math.PI); // Zeichnet einen Kreis mit dem Mittelpunkt (x, y) und dem zufälligen Radius
        ctx.closePath(); // Schließt den Pfad (wird genutzt, um den Kreis zu beenden)
        ctx.fillStyle = randomColor(); // Setzt eine zufällige Farbe für den Kreis
        ctx.fill(); // Füllt den Kreis mit der aktuellen Füllfarbe

        // Zufällige Dreiecke zeichnen
        const triangle = randomCoordinatesAndSize(); // Holt sich die zufälligen Werte für das Dreieck
        ctx.beginPath(); // Startet einen neuen Pfad
        ctx.moveTo(triangle.x, triangle.y); // Bewegt den "Stift" zum ersten Punkt des Dreiecks
        ctx.lineTo(triangle.x + triangle.size, triangle.y); // Zeichnet eine Linie zum zweiten Punkt
        ctx.lineTo(triangle.x + triangle.size / 2, triangle.y - triangle.size); // Zeichnet eine Linie zum dritten Punkt
        ctx.closePath(); // Schließt den Pfad, wodurch das Dreieck fertig wird
        ctx.fillStyle = randomColor(); // Setzt eine zufällige Farbe für das Dreieck
        ctx.fill(); // .fill = Füllfarbe

        // Zufällige Linien zeichnen
        const line = randomCoordinatesAndSize(); // Holt sich die zufälligen Werte für die Linie
        ctx.beginPath(); // Startet einen neuen Pfad
        ctx.moveTo(line.x, line.y); // Bewegt den Startpunkt der Linie
        ctx.lineTo(line.x + line.size, line.y + line.size); // Zeichnet eine Linie zum Endpunkt der Linie
        ctx.strokeStyle = randomColor(); // .strokeStyle = Setzt eine zufällige Farbe für die Linie
        ctx.lineWidth = 5; // .lineWidth = Legt die Linienbreite fest
        ctx.stroke(); //  .stroke = Zeichnet die Linie
    }
}

// Beim Laden der Seite ein zufälliges Bild generieren
function drawRandomCanvas() {
    setRandomGradientBackground(); 
    drawRandomShapes(); 
}


drawRandomCanvas();
