// isArray() kollar om cars är en array (boolean)
let cars = [ "BMW", "Audi", "Jeep"];
let x = Array.isArray(cars);
console.log(x);


// Sort () sorterar elementen i bokstavsordning
let cars1 = ["Volvo", "Audi", "Jeep"];
 cars1.sort ();
 console.log(cars1);


// Reverse() skriver ordningen med sista elementet först

let cars2 = ["Mazda", "Opel", "Ferrari"];
cars2.reverse();
console.log(cars2);

// Concat() slår ihop två arrays och returnerar en ny array

let pets = ["Katt","Hund", "Häst"];
let uPets = ["Orm","Sköldpadda","Ödla"];
let allPets = pets.concat(uPets);
console.log(allPets);

// join() slår ihop elementen till en string och blir separerad av default seperator som är komma tecken.

let hus = ["Villa", "Lägenhet", "Sommarhus"];
let hus1 = hus.join();
console.log(hus1);

// toString(), samma som join() ?
let hus2 = ["Villa", "Lägenhet", "Sommarhus"];
hus2.sort();// La till sort för att lättare se resultatet från förra statementet.
let hus3 = hus2.toString(); 
console.log(hus3);

// copyWithin() koperiar array elements från samma array, man kan bestämma target, start och end genom (0 , 0, 0);

let myCars = ["Dodge", " Chevrolet", "Mazda", "Opel"];
let newMyCars = myCars.copyWithin(2, 0);
console.log(newMyCars);

console.log("-----------------");
// fill()

let myCars1 = ["Dodge", "Chevrolet"]
console.log(myCars1);
myCars1.fill("Ford", 1);
console.log(myCars1);

// from()

let letters = Array.from ("abcdefg");
console.log(letters);

// includes() kollar om ett element finns eller inte returnerar boolean.

let cars3 = ["Volvo", "Saab", " Audi", "BMW"];
let aCars3 = cars3.includes("Saab");
let aCars4 = cars3.includes("Dodge");
console.log(aCars3);
console.log(aCars4);

// indexOf() söker från början till slut
let spices = ["Peppar", "Salt", "Curry", "Vitpeppar"];
let aSpices = spices.indexOf("Curry");
console.log(aSpices);

// lastIndexOf() söker från slutet till början
let spices2 = ["Peppar", "Salt", "Curry", "Vitpeppar"];
let aSpices2 = spices2.lastIndexOf("Salt");
console.log(aSpices2);

// pop() tar ut sista elementet 
let spices3 = ["Peppar", "Salt", "Curry", "Vitpeppar"];
console.log(spices3.length);
let aSpices3 = spices3.pop(); // Lagrar elementet som tas ut
console.log(aSpices3); // Visar vilket element som togs ut
console.log(spices3.length);// visar hur många element som finns kvar


console.log("-------------");
// push()
let animals = ["Tiger", "Zebra", "Elefant", "Krokodil"];
console.log(animals);
animals.push("Flodhäst");
console.log(animals);

// shift() plockar ut första elementet
let spices4 = ["Peppar", "Salt", "Curry", "Vitpeppar"];
console.log(spices4.length);
let aSpices4 = spices4.shift();
console.log(aSpices4); 
console.log(spices4.length); // nya längden efter shift

//unshift() likadan som push fast lägger till elementet i början.

let animals1 = ["Tiger", "Zebra", "Elefant", "Krokodil"];
console.log(animals1);
animals1.unshift("Flodhäst");
console.log(animals1);

// slice()
// Skapar en literal array
let costumers = ["Göran","Anna","Gustav","Sören","Simon","Hanna"];


let lastCostumer = costumers.slice(-1);
console.log(lastCostumer);

// valueOf()

let sEngines = ["Google", " Yahoo", "Bing"];
let p = sEngines.valueOf();
console.log(p);

