// Arbete med constructor

// Skapa ett nytt objekt med en constructor
let magnus = new Object();
// Egenskaper
magnus.name = 'Magnus Lidmyr';
magnus.age  = 25;
magnus.work = false;

// Metod
magnus.print = function (){
    console.log(this.name + ' är '+ this.age + ' år gammal');
}
magnus.info = function (){
    //return this.name + ' är ' + this.age + ' år gammal';
    return `${this.name} är ${this.age} år gammal `; // Nytt sätt att skriva ut man slipper konkatenering av allt.
}
//Använd objektets egenskaper
console.log(magnus.name);
// Använd objektets metoder
magnus.print();
console.log(magnus.info());

// Repetition , skapa objekt literal
let magnus2 = {
    name : 'Magnus Lidmyr',
    age  : 25,
    work : false,
    print:function (){
        console.log(this.name + ' är '+ this.age + ' år gammal');
    },
    info:function(){
        return `${this.name} är ${this.age} år gammal `; // Nytt sätt att skriva ut man slipper konkatenering av allt.
    }
};
console.log(magnus2);
magnus2.print();
console.log(magnus2.info());

// Sammanfattning - Olika sätt att skapa ett objekt i JS
// 1. Literal notation
 let vadSomHelst = {};

// 2. Constructor notation
let ettAnnatObjekt = new Object();