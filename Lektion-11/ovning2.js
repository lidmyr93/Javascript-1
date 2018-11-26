let tabell = '';

console.log('x\tx2\tx3');

for (let x = 1; x <=12; x++){
    tabell += x + '\t' + Math.pow(x,2) + '\t' + Math.pow(x,3) + '\n';
}
console.log(tabell);