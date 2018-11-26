function cord(x1,x2,y1,y2){
 avstand = Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2));
 return avstand;
}

console.log(cord(1,3,4,7));