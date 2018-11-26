// Objekt Number
let PI = 3.14159;
// Avrundar till två decimaler
console.log(PI.toFixed(2));//3,14
console.log(PI.toPrecision(2));//3,1

// Visa Max-value och Min-value på ett nummer i JS
console.log(Number.MAX_VALUE);
console.log(-Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(-Number.MIN_VALUE);
console.log(Number.MAX_VALUE * 2);
console.log(-Number.MAX_VALUE * 2);

// Nan
let x;
console.log(x);
x = x + 2; // Nan
// statiska metoder
console.log(Number.isNaN(x));


// Objektet Math
PI = Math.PI
console.log(PI);

console.log(Math.pow(3,2));// 9
console.log(Math.sqrt(25));// 5

// Avrunda till närmsta heltal

let pris = 10.40;
console.log(Math.round(pris)); // 10
pris = 10.50;
console.log(Math.round(pris)); // 11


// Ceil och floor

let tal = 20.1
console.log(Math.ceil(tal));
console.log(Math.floor(tal));

// Max och min

console.log(Math.max(10,30,19,17));
console.log(Math.min(70,34,63,23));

function maxArray(x){
    let y = Math.max(...x) // ... är en operator i JS som heter Spread operator
    return y;
}

let arr = [10,20,30];
console.log(maxArray(arr));

// Slumpttal

console.log(Math.random());// Mellan 0 och 1
console.log(Math.random()*10); // Mellan 1 och 10
console.log(Math.floor( Math.random() * 10));
console.log(Math.floor( Math.random() * 10)+1);
console.log(Math.ceil( Math.random() * 10));


