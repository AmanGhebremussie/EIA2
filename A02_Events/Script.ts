namespace EventExercise {    // Namespace erstellen um globalen Scope sauber zu halten
    window.addEventListener("load", handleLoad);    // Warten bis die Seite vollständig geladen ist

    function handleLoad(): void {
        // HTML-Elemente aus dem DOM holen und als TypeScript-Typen definieren
        const button: HTMLButtonElement = document.querySelector("#myButton") as HTMLButtonElement;
        const div1: HTMLDivElement = document.querySelector("#div1") as HTMLDivElement;

        // Event-Listener für Button-Klick hinzufügen
        button.addEventListener("click", function(event: MouseEvent): void {
            // Mausposition aus dem Event-Objekt auslesen
            let x: number = event.clientX;    // X-Koordinate der Maus
            let y: number = event.clientY;    // Y-Koordinate der Maus

            // Neuen HTML-Inhalt erstellen mit den Mauskoordinaten
            div1.innerHTML = `<span>Mausposition beim Klick: X=${x}, Y=${y}</span>`;
        });
    }
}