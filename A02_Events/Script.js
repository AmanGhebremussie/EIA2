var EventExercise;
(function (EventExercise) {
    window.addEventListener("load", handleLoad); // Warten bis die Seite vollständig geladen ist
    function handleLoad() {
        // HTML-Elemente aus dem DOM holen und als TypeScript-Typen definieren
        var button = document.querySelector("#myButton");
        var div1 = document.querySelector("#div1");
        // Event-Listener für Button-Klick hinzufügen
        button.addEventListener("click", function (event) {
            // Mausposition aus dem Event-Objekt auslesen
            var x = event.clientX; // X-Koordinate der Maus
            var y = event.clientY; // Y-Koordinate der Maus
            // Neuen HTML-Inhalt erstellen mit den Mauskoordinaten
            div1.innerHTML = "<span>Mausposition beim Klick: X=".concat(x, ", Y=").concat(y, "</span>");
        });
    }
})(EventExercise || (EventExercise = {}));
