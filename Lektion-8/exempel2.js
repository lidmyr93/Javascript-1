// Skapa egna constructors
//Skapa en blueprint 

// Ex skapa en constructor som beskriver en person
// Person blir en ny typ (prototyp)
function Person(name,age){
    this.name = name;
    this.age  = age;
    this.bror =[];
    this.cars =[];
}
// Skapa en konstruktor(prototyp) som beskriver en bil
function Car (regnmr,fabrikat){
    this.regnmr = regnmr;
    this.fabrikat = fabrikat;
}
//Skapa en instans av car = skapa ett objekt ( en bil)
let c1 = new Car('ABC123','Volvo');
let c2 = new Car('XYZ7987', 'BMW');
let c3 = new Car('IGU582', 'AUDI');

// Skapa flera objekt av Person() = skapa nya instanser
let magnus = new Person('Magnus lidmyr',25);
let kalle  = new Person('Kalle', 10);

// magnus och kalle blir två nya referense till två olika objekt

// Lägga till c1 och c2 och c3 i magnus
magnus.cars.push(c1,c2,c3);
magnus.cars[0].regnmr;
magnus.cars[1].regnmr;
magnus.cars[2].regnmr;

// ändra magnus egenskaper (med dot notation)
magnus.name = 'Lidmyr Magnus';
magnus.age--;

// Lägg till egenskaper
magnus.weight = 90;

// Skapa en array av ett antal objekt
let persons = [magnus,kalle];
console.log(persons);
console.log(persons[0].name); // Visar info om första objektet
console.log(persons[0].name= 'Magnus Lidmyr');

// Objekt kan innehålla arrayer

//magnus.cars = [];

magnus.bror.push(kalle);
console.log(magnus);
