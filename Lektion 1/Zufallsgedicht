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

// Generiere einen Vers und gebe ihn aus
const verse = getVerse(subjects, verbs, predicate); //subject, verb, predicate werden  
console.log(verse); // Ausgabe des generierten Verses
