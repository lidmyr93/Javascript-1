let score = 50;
// If-satsen
if (score>=50){
    congratulate();
}
// if-else satsen
else{
    encourage();
}

function congratulate(){
    console.log('Congratulations');
}
function encourage(){
    console.log('Have another try');
}

// if .... else-if satsen

let hour = new Date().getHours();
let greeting = '';
if (hour<12){
    greeting = 'God Morgon';
}
else if(hour < 17) {
    greeting = 'God dag';
}
else{
    greeting = 'God kväll';
}
console.log(greeting);


/*
// == eller ===

let x = '5'; // = string
let y = 5;   // = number

if (x==5){    // Farligt, kollar inte typen bara värdet
    console.log(x+5); // 55, konkatenering
}
if (y == 5){           // Ok för att båda värdena är samma type
    console.log(y+10);//15
}
if (x === 5){ // False
    console.log(x+100);
}
if (y === 5){ // True
    console.log(y+50);
} */

// Ternary-operator  ?:
// Villkor ? om sant : om falskt
function getFee(isMember){
    return isMember ? '20kr' : '100kr';
}
// exakt samma funktion med if-else istället för ternary-
function getFeeV2 (isMember){
    if (isMember){
        return '20kr';
    }else{
        return '100kr';
    }
}
console.log(getFee(true));
console.log(getFee(false));
console.log(getFeeV2(false));