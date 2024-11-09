

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
        
        // Hinzufügen des Lösch-Event-Listeners
        taskContainer.querySelector(".Löschenbtn")?.addEventListener("click", () => {
            if (confirm('Möchten Sie diese Aufgabe löschen?')) {
                taskContainer.remove(); // Aufgabe entfernen
            }
        });

        const container = document.querySelector(".container"); 
        const newTaskButton = document.querySelector(".NewTaskbtn"); // Button auswählen
        if (container && newTaskButton) {
            container.insertBefore(taskContainer, newTaskButton.nextSibling); // Neue Aufgabe unter dem Button einfügen
        }
    }

    
    document.querySelector(".NewTaskbtn")?.addEventListener("click", () => {
        createPlaceholder(); // Platzhalter erstellen
    });
});

