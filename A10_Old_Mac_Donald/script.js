var _display = document.getElementById("display");
// Klasse Animal erstellen mit class "Name". In einer Klasse werden alle Eigenschaften eingetragen
var Animal = /** @class */ (function () {
    // Um die Einzelnen Attribute der Tiere nicht immer wieder aufzuschreiben, kann man den Kontruktor nutzen.
    function Animal(_name, _sound, _food, _amount, _species) {
        this.name = _name;
        this.sound = _sound;
        this.food = _food;
        this.amount = _amount;
        this.species = _species;
    }
    Animal.prototype.sing = function () {
        // Animalheader ist die Überschrift und das soll ein h2 Element erstellen mit den Inhalt des Tieres.
        var animalHeader = document.createElement("h2");
        animalHeader.textContent = this.name;
        var songText = document.createElement("p");
        songText.innerHTML = "\n            Old MacDonald had a farm, Ee i ee i o<br>\n            And on his farm he had a ".concat(this.species, ", Ee i ee i o<br>       \n            With a ").concat(this.sound, " here and a ").concat(this.sound, " there,<br>\n            Here a ").concat(this.sound, ", there a ").concat(this.sound, ", everywhere a ").concat(this.sound, ".\n        ");
        _display.appendChild(animalHeader);
        _display.appendChild(songText);
    };
    return Animal;
}());
// Tiere erstellen
var cow = new Animal("Bessie", "Moo", "Grass", 5, "Cow");
var chicken = new Animal("Cluckie", "Cluck", "Grains", 3, "Chicken");
var dog = new Animal("Rover", "Woof", "Meat", 4, "Dog");
var horse = new Animal("Pegasus", "Prrrr", "Grass", 1, "Horse");
var pig = new Animal("Peppa", "Oink", "Mud", 3, "Pig");
// Aufruf der Gesänge der Tiere 
cow.sing();
chicken.sing();
dog.sing();
horse.sing();
pig.sing();
