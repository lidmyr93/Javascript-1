// Arbete med arrayer

// Skapa en tom array

let cars1 = []
let cars2 = ["Volvo", "Saab", "BMW"];
// Detta är en array-literal

// Skapa en array med en constructor

let cars3 = new Array (1 , 2 , 3);
let cars4 = new Array (); // tom array

// Att komma åt data

console.log(cars2[0]);
console.log(cars2[1]);
console.log(cars2[2]);
console.log(cars2);

// Hämta ett element och spara i en ny variabel
let bil1 = cars2 [0];
console.log(bil1);

// Ändrar ett element
cars2[0] = "Mazda";


console.log(cars2);
console.log(bil1); // Volvo står kvar för den är sparad i bil1

// En array i JS kan innehålla olika typer
let person = ["Magnus", "Lidmyr", 25 , false];

// Du kan skapa 4 olika variabler istället för en array
let firstName = "Magnus";
let lastName  = "Lidmyr";
let age       = 25;
let gift      = false;

// Hitta antal element med egenskapen length
let antal = person.length;
console.log(antal);

// Sortera en array

console.log(cars2);
cars2.sort();
console.log(cars2);


console.log("----------------------");
// Arbeta med Stack

let stack = []; // Skapar en tom array
stack.push("Javascript1"); // Lägger till element i arrayen
console.log(stack);
stack.push("Javascript2");
console.log(stack);
stack.push("Javascript3");
console.log(stack);

// Ta bort ett element ur array

console.log("---------------------");

stack.pop(); // tar bort sista
console.log(stack);
//Spara sista elementet innan borttagning
let kurs = stack.pop();
console.log(stack);
console.log(kurs);