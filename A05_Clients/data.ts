namespace L05 {

    export interface Item {
        responsible: string;
        date: string;
        taskItem: string;
        comment: string;
    }

    export interface Data {
        initialItems: Item[]; // Ändere den Schlüssel zu 'initialItems'
    }

    // Initialisiere die Daten mit den Werten aus der JSON-Datei
    export let data: Data = {
        initialItems: [
            { responsible: "Lydia", date: "2024-11-08", taskItem: "Bad putzen", comment: "" },
            { responsible: "Kevin", date: "2024-11-10", taskItem: "Einkaufen", comment: "Milch und Brot besorgen" }
        ]
    };
}