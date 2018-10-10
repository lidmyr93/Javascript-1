// Objekt i JS

// Skapa objekt med hjälp av {} = objekt literal

let car = {};
let kalle ={};
let magnus = {
    // Egenskaper 
    name   : 'Magnus Lidmyr',
    age    : 25,
    length : 189,
    bilar  : [],
    // Metoder, funktion inne i ett objekt är metoder
    printInfo:function(){
        console.log(this.name +' är ' + this.age + ' gammal ');
    }
   
};
console.log(magnus); // skriver ut hela objektet
console.log(magnus.name);
console.log(magnus.age);
console.log(magnus.length);
magnus.printInfo();
console.log('-----------------------');
// Ändra egenskaper

magnus.name = 'Kalla anka';
magnus.age++; // Öka med ett
magnus.age += 1;
magnus.age --; // Minska med ett
console.log(magnus);
// Ta bort egenskaper

delete magnus.length;
console.log(magnus); // length finns inte , borttaget
console.log(magnus.length);// Undefined

// Lägga till egenskaper
magnus.height = 190;
console.log(magnus);

//Kopiera ett objekt(svårt tydligen)
let simon = {};
simon = magnus.name;
simon = magnus.age;
simon = magnus.height;
// O.s.v
// Arrayer är också objekt, objekt är referenstyper som lagras i "heap"
let arr1 = [1,2,3];
let arr2 = arr1; // Kopia?
arr1[0] = 100;
arr2[1] = 200; 
console.log(arr2);
console.log(arr1);

// Ta bort objektet

//magnus = null;
//console.log(magnus);




