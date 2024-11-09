document.addEventListener("DOMContentLoaded", function () {
    var _a;
    // Funktion zum Erstellen eines neuen Platzhalters
    function createPlaceholder() {
        var _a;
        var taskContainer = document.createElement("div");
        taskContainer.classList.add("task"); // Klasse für die neue Aufgabe
        taskContainer.innerHTML = "\n            <h2>Neue Aufgabe</h2>\n            <p><strong>Zust\u00E4ndig:</strong> Name</p>\n            <p><strong>F\u00E4llig:</strong> Datum</p>\n            <p><strong>Kommentar:</strong> \"Kommentar hier\"</p>\n            <div class=\"button-container\">\n                <button class=\"Bearbeitenbtn\"> Bearbeiten </button>\n                <button class=\"L\u00F6schenbtn\"> L\u00F6schen</button>\n            </div>\n        ";
        // Hinzufügen des Lösch-Event-Listeners
        (_a = taskContainer.querySelector(".Löschenbtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
            if (confirm('Möchten Sie diese Aufgabe löschen?')) {
                taskContainer.remove(); // Aufgabe entfernen
            }
        });
        var container = document.querySelector(".container");
        var newTaskButton = document.querySelector(".NewTaskbtn"); // Button auswählen
        if (container && newTaskButton) {
            container.insertBefore(taskContainer, newTaskButton.nextSibling); // Neue Aufgabe unter dem Button einfügen
        }
    }
    (_a = document.querySelector(".NewTaskbtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        createPlaceholder(); // Platzhalter erstellen
    });
});
