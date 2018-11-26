/*Summa av en array (version 1)
• Skapa en funktion som tar emot en array som parameter
• Kalla funktionen arraySum()
• Funktionen ska summera alla ta i arrayen och returnerar summan.
• Exempel
arr = [1, 2, 3, 4];
console.log(arraySum(arr));
// Skriver ut 10 */
let arr = [1,2,3,4];
function arraySum(arr){
let sum = 0;
for(let i = 0; i < arr.length; i++){
    sum += arr[i];
}
return sum
}
console.log(arraySum(arr));
