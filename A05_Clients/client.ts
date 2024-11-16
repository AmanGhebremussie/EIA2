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
            const response = await fetch(url);  // URL von GitHub Raw verwenden
            if (!response.ok) {
                throw new Error("Fehler beim Laden der Daten");
            }
            const data: Task[] = await response.json(); // Direktes Parsen der Task-Daten
            return data;
        } catch (error) {
            console.error("Fehler beim Laden der Startdaten:", error);
            return [];
        }
    }

    document.addEventListener("DOMContentLoaded", () => {
        // Event-Listener für den "Neue Aufgabe"-Button
        document.querySelector(".NewTaskbtn")?.addEventListener("click", async () => {
            // Die Daten von der Raw-URL laden
            const data = await loadInitialData("https://raw.githubusercontent.com/AmanGhebremussie/EIA2/main/A05_Clients/data.json");

            // Stelle sicher, dass Daten vorhanden sind
            if (data.length > 0) {
                // Die erste Aufgabe aus den geladenen Daten
                const firstTask = data[0]; // Du kannst auch eine andere Logik verwenden, um eine bestimmte Aufgabe zu wählen

                // Funktion zum Erstellen eines neuen Platzhalters mit den Daten
                const taskContainer = document.createElement("div");
                taskContainer.classList.add("task"); // Klasse für die neue Aufgabe
                taskContainer.innerHTML = `
                    <h2>${firstTask.taskItem}</h2>  <!-- Taskname wird angezeigt -->
                    <p><strong>Zuständig:</strong> ${firstTask.responsible}</p>
                    <p><strong>Fällig:</strong> ${firstTask.date}</p>
                    <p><strong>Kommentar:</strong> ${firstTask.comment || "Kein Kommentar"}</p>
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
            } else {
                console.log("Keine Daten zum Anzeigen");
            }
        });
    });
}
