function maxArray(x){
 tal = Math.max(...x);
 return tal;
}
console.log(maxArray([10,15,30]));
console.log(maxArray([15,2,14]));
console.log(maxArray([1,2,3]));
console.log(maxArray([1000,15023,15023.1]));

function maxArrayTwo(x){// Obs sorterar arrayen, det kanske man inte vill. Men denna funkar.
x.sort();
x = x[x.length-1];
return x;
}
console.log(maxArrayTwo([50,35,20]));