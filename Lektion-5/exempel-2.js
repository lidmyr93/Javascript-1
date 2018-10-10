// Aritmetiska operatorer i JS

let y = 5;
let x;

x = y + 2; // 7
x = y - 2; // 3
x = x + 2; // 5 eftersom rad 7 ger nytt värde till x
x = x - 2; // 3 efter nytt värde på rad 8 ger 5
x = y * 2; // 10
x = x * 2; // 20
x = y / 2; // 2.5
// Modulus Operator
x = y % 2; // 1
x = 10 % 3; // 1
x = 5 % 7;

// Ökningsoperator
x=10;
x++;// ++ ökar alltid x med 1 svar 11
x++;// öker med 1 igen, svar 12
// Öka med två
x = x+2; // 14
// Eller
x += 2; // Lägg till 2
x += 5; // Lägg till 5

// Minsknings operator
x = 10;
x --; // Minska med ett = 9
// Minska med två
x = x - 2; // 7
// Eller
x -=2; // 5

//
x = "Text";
x = x / 2; // NaN ( Not a Number)
x = 2 / x; // NaN
x = x / x; // NaN

let x2;

console.log(x2/2); // NaN
console.log(2/x2); // NaN
console.log(x2/x2); // Nan

// Konkatenering

let firstName = "Magnus";
let lastName  = "Lidmyr";
let fullName  = "Hej " + firstName + " " + lastName + " !";
console.log(fullName);

x = "1" + "2"; //12
x = "1" + 2;  //12
x = 1 + "2";  // 12
x = "1" + 2 + 3; //123
x = 1 + 2 + "3"; // 33
x = "1"+ (2+3); // 15
x = "1" - "2"; // -1 tack vare en automatisk omvandling av string till number
// Implicit typomvandling
console.log(x);
