let _display: HTMLDivElement = <HTMLDivElement>document.getElementById("display");

// Klasse Animal erstellen mit class "Name". In einer Klasse werden alle Eigenschaften eingetragen
class Animal {
    name: string;
    sound: string;
    food: string;
    amount: number;
    species: string;

    // Um die Einzelnen Attribute der Tiere nicht immer wieder aufzuschreiben, kann man den Kontruktor nutzen.
    constructor(_name: string, _sound: string, _food: string, _amount: number, _species: string) {
        this.name = _name;
        this.sound = _sound;
        this.food = _food;
        this.amount = _amount;
        this.species = _species;
    }

    
    sing(): void {

        // Animalheader ist die Überschrift und das soll ein h2 Element erstellen mit den Inhalt des Tieres.
        let animalHeader: HTMLHeadingElement = document.createElement("h2");
        animalHeader.textContent = this.name;

        let songText: HTMLParagraphElement = document.createElement("p");
        songText.innerHTML = `
            Old MacDonald had a farm, Ee i ee i o<br>
            And on his farm he had a ${this.species}, Ee i ee i o<br>       
            With a ${this.sound} here and a ${this.sound} there,<br>
            Here a ${this.sound}, there a ${this.sound}, everywhere a ${this.sound}.
        `;
        _display.appendChild(animalHeader);
        _display.appendChild(songText);
    }
}

// Tiere erstellen
let cow = new Animal("Bessie", "Moo", "Grass", 5, "Cow");
let chicken = new Animal("Cluckie", "Cluck", "Grains", 3, "Chicken");
let dog = new Animal("Rover", "Woof", "Meat", 4, "Dog");
let horse = new Animal("Pegasus", "Prrrr", "Grass", 1, "Horse");
let pig = new Animal("Peppa", "Oink", "Mud", 3, "Pig");

// Aufruf der Gesänge der Tiere 
cow.sing();
chicken.sing();
dog.sing();
horse.sing();
pig.sing();
