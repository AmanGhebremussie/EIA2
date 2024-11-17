namespace L05 {
    export interface Task {
        responsible: string;
        date: string;
        taskItem: string;
        comment: string;
    }

    // Daten von JSON laden
    export async function loadInitialData(url: string): Promise<Task[]> {
        try {
            const response = await fetch(url); // JSON-Daten laden
            if (!response.ok) {
                throw new Error("Fehler beim Laden der Daten");
            }
            const data: Task[] = await response.json(); // JSON-Daten in Task-Array umwandeln
            return data;
        } catch (error) {
            console.error("Fehler beim Laden der Startdaten:", error);
            return [];
        }
    }

    // Daten von einer Textdatei laden und in der Konsole anzeigen
    export async function loadFromURL(url: string): Promise<void> {
        try {
            const response = await fetch(url); // Textdaten laden
            if (!response.ok) {
                throw new Error(`Fehler beim Laden der Daten: ${response.statusText}`);
            }
            const data = await response.text(); // Textdaten abrufen
            console.log("Daten erfolgreich geladen:");
            console.log(data); // Ausgabe in der Konsole
        } catch (error) {
            console.error("Fehler beim Laden der Daten:", error);
        }
    }

    document.addEventListener("DOMContentLoaded", () => {
        // Event-Listener für den "Neue Aufgabe"-Button
        document.querySelector(".NewTaskbtn")?.addEventListener("click", async () => {
            // JSON-Daten laden
            const data = await loadInitialData(
                "https://raw.githubusercontent.com/AmanGhebremussie/EIA2/main/A05_Clients/data.json"
            );

            // Stelle sicher, dass Daten vorhanden sind
            if (data.length > 0) {
                // Die erste Aufgabe aus den geladenen Daten
                const firstTask = data[0]; // Beispiel: Erster Task

                // Funktion zum Erstellen eines neuen Platzhalters mit den Daten
                const taskContainer = document.createElement("div");
                taskContainer.classList.add("task"); // Klasse für die neue Aufgabe
                taskContainer.innerHTML = `
                    <h2>${firstTask.taskItem}</h2>  <!-- Taskname wird angezeigt -->
                    <p><strong>Zuständig:</strong> ${firstTask.responsible}</p>
                    <p><strong>Fällig:</strong> ${firstTask.date}</p>
                    <p><strong>Kommentar:</strong> ${firstTask.comment || "Kein Kommentar"}</p> 
                    <div class="button-container" style="display: none;"> 
                        <!-- Buttons anfangs verstecken -->
                        <button class="Bearbeitenbtn"> Bearbeiten </button>
                        <button class="Löschenbtn"> Löschen</button>
                    </div>
                `;

                // Buttons sichtbar machen, wenn die Aufgabe erstellt wurde
                const buttonContainer = taskContainer.querySelector(".button-container");
                if (buttonContainer) {
                    buttonContainer.style.display = "block";
                }

                // Den "Löschen"-Button finden und den Event-Listener hinzufügen
                const löschenButton = taskContainer.querySelector(".Löschenbtn");
                if (löschenButton) {
                    löschenButton.addEventListener("click", () => {
                        if (confirm("Möchten Sie diese Aufgabe wirklich löschen?")) {
                            taskContainer.remove(); // Entfernt das gesamte Task-Element
                            console.log("Aufgabe gelöscht");
                        } else {
                            console.log("Löschen abgebrochen");
                        }
                    });
                }

                // Das neue Element in den DOM einfügen
                const container = document.querySelector(".container");
                const newTaskButton = document.querySelector(".NewTaskbtn");
                if (container && newTaskButton) {
                    container.insertBefore(taskContainer, newTaskButton.nextSibling); // Neue Aufgabe unter dem Button einfügen
                }
            } else {
                console.log("Keine Daten zum Anzeigen");
            }

            // Daten von der Text-URL laden und in der Konsole ausgeben
            const testURL = "https://jirkadelloro.github.io/EIA2-Inverted/L05_Client/Material/Test.txt";
            await loadFromURL(testURL);
        });
    });
}
