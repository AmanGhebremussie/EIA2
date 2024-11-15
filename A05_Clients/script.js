var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var L05;
(function (L05) {
    var _this = this;
    document.addEventListener("DOMContentLoaded", function () { return __awaiter(_this, void 0, void 0, function () {
        // Funktion zum Laden der Startdaten aus einer JSON-Datei
        function loadInitialData() {
            return __awaiter(this, void 0, void 0, function () {
                var response, data, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 4]);
                            return [4 /*yield*/, fetch('https://amanghebremussie.github.io/EIA2/data.json')];
                        case 1:
                            response = _a.sent();
                            if (!response.ok) {
                                throw new Error('Netzwerkantwort war nicht ok');
                            }
                            return [4 /*yield*/, response.json()];
                        case 2:
                            data = _a.sent();
                            console.log(data); // Hier kannst du die Daten verarbeiten und in die App einfügen
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _a.sent();
                            console.error('Fehler beim Laden der Daten:', error_1);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        }
        // Funktion zum Senden von Daten an den Server
        function sendData(data) {
            return __awaiter(this, void 0, void 0, function () {
                var loadingIndicator, response, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            loadingIndicator = document.createElement("div");
                            loadingIndicator.innerText = "Daten werden gesendet...";
                            document.body.appendChild(loadingIndicator); // Visuelles Signal hinzufügen
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, 4, 5]);
                            return [4 /*yield*/, fetch('http://127.0.0.1:8080/api', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify(data),
                                })];
                        case 2:
                            response = _a.sent();
                            if (!response.ok) {
                                throw new Error('Fehler beim Senden der Daten');
                            }
                            console.log('Daten erfolgreich gesendet');
                            return [3 /*break*/, 5];
                        case 3:
                            error_2 = _a.sent();
                            console.error('Fehler beim Senden der Daten:', error_2);
                            return [3 /*break*/, 5];
                        case 4:
                            document.body.removeChild(loadingIndicator); // Visuelles Signal entfernen
                            return [7 /*endfinally*/];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        }
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: 
                // Initiale Daten laden
                return [4 /*yield*/, loadInitialData()];
                case 1:
                    // Initiale Daten laden
                    _b.sent();
                    // Beispiel für das Senden von Daten (z.B. beim Klicken eines Buttons)
                    (_a = document.querySelector(".NewTaskbtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
                        var exampleData = { task: "Neue Aufgabe" }; // Beispiel-Daten
                        sendData(exampleData); // Daten senden
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    document.addEventListener("DOMContentLoaded", function () {
        var _a;
        // Funktion zum Erstellen eines neuen Platzhalters
        function createPlaceholder() {
            var taskContainer = document.createElement("div");
            taskContainer.classList.add("task"); // Klasse für die neue Aufgabe
            taskContainer.innerHTML = "\n                <h2>Neue Aufgabe</h2>\n                <p><strong>Zust\u00E4ndig:</strong> Name</p>\n                <p><strong>F\u00E4llig:</strong> Datum</p>\n                <p><strong>Kommentar:</strong> \"Kommentar hier\"</p>\n                <div class=\"button-container\">\n                    <button class=\"Bearbeitenbtn\"> Bearbeiten </button>\n                    <button class=\"L\u00F6schenbtn\"> L\u00F6schen</button>\n                </div>\n            ";
            // Den "Löschen"-Button finden und den Event-Listener hinzufügen
            var löschenButton = taskContainer.querySelector(".Löschenbtn");
            if (löschenButton) {
                löschenButton.addEventListener("click", function () {
                    // Sicherheitsabfrage zum Löschen
                    if (confirm("Möchten Sie diese Aufgabe wirklich löschen?")) {
                        taskContainer.remove(); // Entfernt das gesamte Task-Element
                        console.log("Aufgabe gelöscht");
                    }
                    else {
                        console.log("Löschen abgebrochen");
                    }
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
                    // Sicherheitsabfrage zum Löschen
                    if (confirm("Möchten Sie diese Aufgabe wirklich löschen?")) {
                        task.remove(); // Entfernt das gesamte Task-Element
                        console.log("Aufgabe gelöscht");
                    }
                    else {
                        console.log("Löschen abgebrochen");
                    }
                });
            }
        });
    });
})(L05 || (L05 = {}));
