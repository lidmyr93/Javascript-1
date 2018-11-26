/*På en arbetsplats erbjuds
man följande lön.
Första dagen tjänar man
500kr och sedan får man
10% höjning varje månad.
Skriv ett program som
räknar ut hur länge man
behöver arbeta för att tjäna
ihop minst en miljon. */ 

let dag = 0;
let antaldagar = 0;
let lon = 170;
let totallon = 0;

while(totallon <= 1000000){
    if (dag<30){
     for(let i = 1; i <=30;i++)
     dag++
     totallon = lon * dag ;
    }
    else{
        antaldagar += dag;
        dag = 0;
        lon = lon * 1.1
    }
}
console.log('Du behöver jobba i ' +(antaldagar + 1) + ' dagar');