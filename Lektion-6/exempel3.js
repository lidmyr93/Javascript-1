// Deklarera en funktion med en parameter

function hello(message = "Welcome"){
    console.log(message);

}

//Anropa funktionen
hello("Här kommer meddelande 1");
hello("Här kommer meddelande 2");
hello("Här kommer meddelande 3");
hello("Här kommer meddelande 4");
// Data som skickas vid anropet kallas argument
hello(12345);
hello(true);
hello(); // undefined men löses med hjlp av en default parameter

console.log("------------------------------");
// Funktioner med två parametrar
// Skapa en funktion som beräknar summan av två tal
function sum(x = 0,y = 0){
    console.log(x+y);

}
sum(7,9);
sum();
sum(123,456,789);
console.log("--------------------");

function fullname(firstName, lastName){
    console.log("Hej " + firstName + lastName +"!");
}

fullname("Magnus", "Lidmyr");

// Skapa en funktion som multiplicerar två tal
function multiply(a=0, b=0){
    console.log(a*b);
}
multiply(10,5);             // 50
multiply();                 // 0
multiply(100);              // 0
multiply('text',50);        // NaN
multiply();                 // 0 pga förvalda parametrar (default parameter)



function log(text){
    console.log('******************');
    console.log('*' + text);
    console.log('******************');
}
log('Hej');

// En funktion som anropar en anna funktion

function hello3(name){
    log('Hello' + ' ' + name);
}
hello3('Magnus');
hello3('Lidmyr');
hello3('Magnus Lidmyr');

// Funktioner med tre parametrar

function age(firstName, lastName, age){
    console.log(firstName + ' är ' + age + ' år gammal ! ');
    console.log(` ${firstName} är ${age} år gammal  `); // Template string
}
age("magnus","lidmyr",25);

// En funktion med ett godtyckligt antal parametrar

function manyThings(...things){ // ... skapar en  array
    console.log(things);
}

manyThings(1);
manyThings(1,2);
manyThings(1,2,3,4,5,6,7,8,9,10,false,"Magnus","Lidmyr",10,54,23);
manyThings();