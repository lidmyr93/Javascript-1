// Iterationer

// For-satsen : for ()

for (let i=0; i <=10; i++){ // i++ eller i = i + 1
    
   // console.log(i); skriver ut tal mellan 0 och 9
    
}

for (let i=1; i <=10; i++){ // i++ eller i = i + 1
    
    // console.log(i) skriver ut tal mellan 1 och 10
}
let str = '';
for (let i=1; i <=10; i=i+2){ // i++ eller i = i + 1
    str += i;
    if ( i < 9){

        str += ' , ';
    }
}
console.log(str); //skriver ut 1,3,5,7,9

// Exempel 4 modolus operator
for (let i = 1 ; i <= 10; i++){
    //Skriv ut alla tal som är jämnt delbart med 3
    if(i%3 === 0){ // ingen rest vid division med 3
       // console.log(i);
    }
}

for ( let i = 2; i<=20; i=  i++){
    if(i%2 === 0){ 

        //console.log(i);
    }
}

for ( let i = 1; i<=100; i++){
    if(i%5 === 0){

       // console.log(i);
    }
}