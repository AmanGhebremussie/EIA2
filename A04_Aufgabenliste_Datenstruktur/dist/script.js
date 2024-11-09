"use strict";
// import { data, Item, Data } from "./data";
var L04;
(function (L04) {
    document.addEventListener("DOMContentLoaded", () => {
        var _a;
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
                    taskContainer.remove(); // Entfernt das gesamte Task-Element
                    console.log("Aufgabe gelöscht");
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
        (_a = document.querySelector(".NewTaskbtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
            createPlaceholder(); // Platzhalter erstellen
            console.log("Neue Aufgabe erstellt");
        });
        // Event-Listener für bestehende Aufgaben hinzufügen (falls vorhanden)
        const existingTasks = document.querySelectorAll(".task"); // Alle bestehenden Aufgaben
        existingTasks.forEach(task => {
            const löschenButton = task.querySelector(".Löschenbtn");
            if (löschenButton) {
                löschenButton.addEventListener("click", () => {
                    task.remove(); // Entfernt das gesamte Task-Element
                    console.log("Aufgabe gelöscht");
                });
            }
        });
    });
})(L04 || (L04 = {}));
