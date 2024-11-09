// import { data, Item, Data } from "./data";
var L04;
(function (L04) {
    document.addEventListener("DOMContentLoaded", function () {
        var _a;
        // Funktion zum Erstellen eines neuen Platzhalters
        function createPlaceholder() {
            var taskContainer = document.createElement("div");
            taskContainer.classList.add("task"); // Klasse für die neue Aufgabe
            taskContainer.innerHTML = "\n            <h2>Neue Aufgabe</h2>\n            <p><strong>Zust\u00E4ndig:</strong> Name</p>\n            <p><strong>F\u00E4llig:</strong> Datum</p>\n            <p><strong>Kommentar:</strong> \"Kommentar hier\"</p>\n            <div class=\"button-container\">\n                <button class=\"Bearbeitenbtn\"> Bearbeiten </button>\n                <button class=\"L\u00F6schenbtn\"> L\u00F6schen</button>\n            </div>\n        ";
            // Den "Löschen"-Button finden und den Event-Listener hinzufügen
            var löschenButton = taskContainer.querySelector(".Löschenbtn");
            if (löschenButton) {
                löschenButton.addEventListener("click", function () {
                    taskContainer.remove(); // Entfernt das gesamte Task-Element
                    console.log("Aufgabe gelöscht");
                });
            }
            // Das neue Element in den DOM einfügen
            var container = document.querySelector(".container");
            var newTaskButton = document.querySelector(".NewTaskbtn");
            if (container && newTaskButton) {
                container.insertBefore(taskContainer, newTaskButton.nextSibling); // Neue Aufgabe unter dem Button einfügen
            }
        }
        // Event-Listener für den "Neue Aufgabe"-Button
        (_a = document.querySelector(".NewTaskbtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
            createPlaceholder(); // Platzhalter erstellen
            console.log("Neue Aufgabe erstellt");
        });
        // Event-Listener für bestehende Aufgaben hinzufügen (falls vorhanden)
        var existingTasks = document.querySelectorAll(".task"); // Alle bestehenden Aufgaben
        existingTasks.forEach(function (task) {
            var löschenButton = task.querySelector(".Löschenbtn");
            if (löschenButton) {
                löschenButton.addEventListener("click", function () {
                    task.remove(); // Entfernt das gesamte Task-Element
                    console.log("Aufgabe gelöscht");
                });
            }
        });
    });
})(L04 || (L04 = {}));
