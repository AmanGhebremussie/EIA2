"use strict";
let _display = document.getElementById("display");
let foodStash = {
    grass: 250,
    grains: 50,
    meat: 100,
    fruits: 100,
    mud: 100
};
// Basisklasse Animal
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
        let animalHeader = document.createElement("h2"); // h2 um den Namen im Html zu erstellen
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
    // Diese Methode muss in den Subklassen implementiert werden
    doSpecialAction() {
        throw new Error("doSpecialAction must be implemented in a subclass.");
    }
}
// Subklassen für Tieraktionen. Extends erbt die Klasse Animal und erweitert folgendes.
class Cow extends Animal {
    constructor() {
        super("Bessie", "Moo", "grass", 5, "Cow"); // super wird verwendet, um auf Konstruktoren, Methoden oder Eigenschaften der Basisklasse zuzugreifen.
    }
    doSpecialAction() {
        let actionText = document.createElement("p");
        actionText.textContent = `${this.name} is giving milk.`;
        _display.appendChild(actionText);
    }
}
class Chicken extends Animal {
    constructor() {
        super("Cluckie", "Cluck", "grains", 3, "Chicken");
    }
    doSpecialAction() {
        let actionText = document.createElement("p");
        actionText.textContent = `${this.name} laid an egg.`;
        _display.appendChild(actionText);
    }
}
class Dog extends Animal {
    constructor() {
        super("Rover", "Woof", "meat", 4, "Dog");
    }
    doSpecialAction() {
        let actionText = document.createElement("p");
        actionText.textContent = `${this.name} barked at the animals.`;
        _display.appendChild(actionText);
    }
}
class Horse extends Animal {
    constructor() {
        super("Pegasus", "Prrrr", "fruits", 1, "Horse");
    }
    doSpecialAction() {
        let actionText = document.createElement("p");
        actionText.textContent = `${this.name} ran around .`;
        _display.appendChild(actionText);
    }
}
class Pig extends Animal {
    constructor() {
        super("Peppa", "Oink", "mud", 3, "Pig");
    }
    doSpecialAction() {
        let actionText = document.createElement("p");
        actionText.textContent = `${this.name} rolled in the mud.`;
        _display.appendChild(actionText);
    }
}
// Ein Array mit allen Tieren
let animals = [
    new Cow(),
    new Chicken(),
    new Dog(),
    new Horse(),
    new Pig()
];
// Iteriere über alle Tiere mit forEach und gib die Funktion wieder
animals.forEach(animal => {
    animal.sing();
    animal.eat();
    animal.doSpecialAction();
});
//# sourceMappingURL=script.js.map