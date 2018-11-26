/*Summa av en array (version 2)
• Skapa en funktion som tar emot en 2D-Array som parameter
• Kalla funktionen arraySum2D()
• Funktionen ska summera alla ta i arrayen och returnerar summan.
• Exempel
arr2d = [
[1, 2, 3],
[4, 5, 6]
]
console.log(arraySum2D(arr2d));
// Skriver ut 21 */

let arr2d = [[1,2,3], [4,5,6]];
function arraySum2D(arr2d){
let sum1 = 0;
let sum2 = 0;
for (let i = 0; i < arr2d[0].length; i++){
    sum1 += arr2d[0][i];
    sum2 += arr2d[1][i];

//for (let i = 0; i < arr2d[1]; i++)
  //  sum2 +=  arr2d[1][i];

}
return sum1 + sum2;
}
//console.log(arraySum2D(arr2d));

console.log('-----test 2-----');
function tre (arr2d){
let sum = 0;
for (let i = 0; i < arr2d.length; i++){
    for (let j = 0; j < arr2d[i].length; j++)
    sum += arr2d[i][j];
}

return sum

}
console.log(tre(arr2d));