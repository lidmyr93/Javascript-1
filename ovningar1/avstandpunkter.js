// Räkna ut avståndet mellan två punkter i ett koordinatsystem

function distance(x1,x2,y1,y2){
    avstand = Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));
return avstand.toFixed(4);

}
console.log(distance(5,7,8,10));
