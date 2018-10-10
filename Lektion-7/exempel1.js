// Scope ( räckvidd)
console.log('---------------Lokala Variabler----------------');

// Lokala variabler
{
let x = 10;
console.log('x =' + x);

}

//console.log(x); // ReferenceError: x  is not defined (x variablen försvinner efter kodblocket)

{
var y = 10;
console.log('y =' + y);

}
console.log('y =' + y);

console.log('-----------------------------');
//Variabler inne i funktioner är ALLTID lokala

function demo(){
 
    var local_1 = 1;
    let local_2 = 2;
    console.log(local_1);
    console.log(local_2);
}
demo();
// Att skriva ut lokala variabler utanför funktionen ==> ERROR
//console.log(local_1); ReferenceError: local_1 is not defined
//console.log(local_2); ReferenceError: local_2 is not defined

console.log('-------------Globala Variabler---------------');
// Globala variabler (The global scope)

var global_1 =10;
let global_2 =20;
console.log(global_1);
console.log(global_2);

console.log('-------------Globala och lokala Variabler---------------');

var global_3 = 'En global variabel';

function demo2(){
    let local_3 = 'En lokal variabel';
    console.log(local_3);
}
demo2();
//console.log(local_3);// ReferenceError: local_3 is not defined
console.log(global_3);