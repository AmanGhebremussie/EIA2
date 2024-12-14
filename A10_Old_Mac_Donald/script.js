"use strict";
let _display = document.getElementById("display");
let foodStash = { "grass": 250, "grains": 50, "meat": 100, "fruits": 100, "mud": 100 };
// Klasse Animal erstellen mit class "Name". In einer Klasse werden alle Eigenschaften eingetragen
class Animal {
    name;
    sound;
    food;
    amount;
    species;
    // Um die Einzelnen Attribute der Tiere nicht immer wieder aufzuschreiben, kann man den Kontruktor nutzen.
    constructor(_name, _sound, _food, _amount, _species) {
        this.name = _name;
        this.sound = _sound;
        this.food = _food;
        this.amount = _amount;
        this.species = _species;
    }
    sing() {
        // Animalheader ist die Überschrift und das soll ein h2 Element erstellen mit den Inhalt des Tieres.
        let animalHeader = document.createElement("h2");
        animalHeader.textContent = this.name;
        let songText = document.createElement("p");
        songText.innerHTML = `
            Old MacDonald had a farm, Ee i ee i o<br>
            And on his farm he had a ${this.species}, Ee i ee i o<br>       
            With a ${this.sound} here and a ${this.sound} there,<br>
            Here a ${this.sound}, there a ${this.sound}, everywhere a ${this.sound}.
        `;
        _display.appendChild(animalHeader);
        _display.appendChild(songText);
    }
    eat() {
        if (foodStash[this.food] >= this.amount) {
            foodStash[this.food] -= this.amount;
        }
        else {
            console.warn(`Not enough ${this.food} for ${this.name}.`);
        }
        let stashText = document.createElement("p");
        stashText.innerHTML = `Remaining ${this.food}: ${foodStash[this.food]} units`;
        _display.appendChild(stashText);
    }
}
// Tiere erstellen
let cow = new Animal("Bessie", "Moo", "grass", 5, "Cow");
let chicken = new Animal("Cluckie", "Cluck", "grains", 3, "Chicken");
let dog = new Animal("Rover", "Woof", "meat", 4, "Dog");
let horse = new Animal("Pegasus", "Prrrr", "fruits", 1, "Horse");
let pig = new Animal("Peppa", "Oink", "mud", 3, "Pig");
// Aufruf der Gesänge der Tiere 
cow.sing();
cow.eat();
chicken.sing();
chicken.eat();
dog.sing();
dog.eat();
horse.sing();
horse.eat();
pig.sing();
pig.eat();
//# sourceMappingURL=script.js.map