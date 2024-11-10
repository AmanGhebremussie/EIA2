const subjects = ["Peter", "Lucky", "Luke", "Larry", "Lars"];           // Array mit subject,verb und prädikat
const verbs = ["baut", "schießt", "hasst", "kauft", "liebt"];
const predicate = ["Häuser", "Kugeln", "Fußball", "Pullover", "den Ort"];

// Funktion zur Generierung eines Verses
function getVerse(_subjects: string[], _verbs: string[], _predicate: string[]): string {
    let verse: string = "";                                      // Initialisiere die Vers-Variable mit einem leeren String

    // Zufallszahl für Subjekt
    const randomSubjectIndex: number = Math.floor(Math.random() * _subjects.length);
    verse += _subjects.splice(randomSubjectIndex, 1)[0] + " "; // Füge das Subjekt zur Vers-Variable hinzu

    // Zufallszahl für Verb
    const randomVerbIndex: number = Math.floor(Math.random() * _verbs.length);
    verse += _verbs.splice(randomVerbIndex, 1)[0] + " "; // Füge das Verb zur Vers-Variable hinzu

    // Zufallszahl für Objekt
    const randomObjectIndex: number = Math.floor(Math.random() * _predicate.length);
    verse += _predicate.splice(randomObjectIndex, 1)[0] + "."; // Füge das Objekt zur Vers-Variable hinzu, .splice ändert den INhalt im Array (hinzufügen, entfernen)

    return verse; // Gebe die Vers-Variable zurück
}

    // Füge einen Button hinzu, um den Vers auszugeben
    const button = document.createElement("button"); // Erstelle einen Button
    button.innerText = "Generiere Vers"; // Setze den Text des Buttons
    button.addEventListener("click", () => alert(getVerse(subjects, verbs, predicate))); // Füge die Funktion mit EventListener hinzu
    document.body.appendChild(button); // Füge den Button zum Dokument hinzu

