let antalDagar = 1;
let lon = 1;
for ( antalDagar = 1; lon <=10000000; antalDagar++) {
   lon *=2;
   
}
console.log('Du behöver jobba '+ antalDagar + ' dagar');

let dag = 1;
let lonen = 1; // 1kr
// Arbeta med villkoret ( minst 10 miljoner )
while(lonen<=10000000){
    dag++;
    // Lön fördubblas
    lonen *= 2
}
console.log(dag);