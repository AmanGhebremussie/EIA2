namespace L05 {
    document.addEventListener("DOMContentLoaded", async () => {
        // Funktion zum Laden der Startdaten aus einer JSON-Datei
        async function loadInitialData() {
            try {
                const response = await fetch('https://amanghebremussie.github.io/EIA2/data.json'); // URL zur JSON-Datei
                if (!response.ok) {
                    throw new Error('Netzwerkantwort war nicht ok');
                }
                const data = await response.json();
                console.log(data); // Hier kannst du die Daten verarbeiten und in die App einfügen
            } catch (error) {
                console.error('Fehler beim Laden der Daten:', error);
            }
        }

        // Funktion zum Senden von Daten an den Server
        async function sendData(data: any) {
            const loadingIndicator = document.createElement("div");
            loadingIndicator.innerText = "Daten werden gesendet...";
            document.body.appendChild(loadingIndicator); // Visuelles Signal hinzufügen

            try {
                const response = await fetch('http://127.0.0.1:8080/api', { // Server-Endpunkt
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                if (!response.ok) {
                    throw new Error('Fehler beim Senden der Daten');
                }

                console.log('Daten erfolgreich gesendet');
            } catch (error) {
                console.error('Fehler beim Senden der Daten:', error);
            } finally {
                document.body.removeChild(loadingIndicator); // Visuelles Signal entfernen
            }
        }

        // Initiale Daten laden
        await loadInitialData();

        // Beispiel für das Senden von Daten (z.B. beim Klicken eines Buttons)
        document.querySelector(".NewTaskbtn")?.addEventListener("click", () => {
            const exampleData = { task: "Neue Aufgabe" }; // Beispiel-Daten
            sendData(exampleData); // Daten senden
        });
    });

    document.addEventListener("DOMContentLoaded", () => {
        // Funktion zum Erstellen eines neuen Platzhalters
        function createPlaceholder() {
            const taskContainer = document.createElement("div");
            taskContainer.classList.add("task"); // Klasse für die neue Aufgabe
            taskContainer.innerHTML = `
                <h2>Neue Aufgabe</h2>
                <p><strong>Zuständig:</strong> Name</p>
                <p><strong>Fällig:</strong> Datum</p>
                <p><strong>Kommentar:</strong> "Kommentar hier"</p>
                <div class="button-container">
                    <button class="Bearbeitenbtn"> Bearbeiten </button>
                    <button class="Löschenbtn"> Löschen</button>
                </div>
            `;

            // Den "Löschen"-Button finden und den Event-Listener hinzufügen
            const löschenButton = taskContainer.querySelector(".Löschenbtn");
            if (löschenButton) {
                löschenButton.addEventListener("click", () => {
                    // Sicherheitsabfrage zum Löschen
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
        }

        // Event-Listener für den "Neue Aufgabe"-Button
        document.querySelector(".NewTaskbtn")?.addEventListener("click", () => {
            createPlaceholder(); // Platzhalter erstellen
            console.log("Neue Aufgabe erstellt");
        });

        // Event-Listener für bestehende Aufgaben hinzufügen (falls vorhanden)
        const existingTasks = document.querySelectorAll(".task"); // Alle bestehenden Aufgaben
        existingTasks.forEach(task => {
            const löschenButton = task.querySelector(".Löschenbtn");
            if (löschenButton) {
                löschenButton.addEventListener("click", () => {
                    // Sicherheitsabfrage zum Löschen
                    if (confirm("Möchten Sie diese Aufgabe wirklich löschen?")) {
                        task.remove(); // Entfernt das gesamte Task-Element
                        console.log("Aufgabe gelöscht");
                    } else {
                        console.log("Löschen abgebrochen");
                    }
                });
            }
        });
    });
}