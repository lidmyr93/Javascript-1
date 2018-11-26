    /* • Mina får förökar sig snabbt
och jag behöver ett
program som kan räkna ut
hur många de kommer att
vara inom ett år.
• Varje månad kommer fåren
att multipliceras med 4. */

let startS = 4;
let multi = 4;
let duration = 12;

function mySheeps(antal){
    
    
for(let i = 1; i <= duration; i++){
   antal *=  multi;
}
return antal;

}

console.log(mySheeps(startS));