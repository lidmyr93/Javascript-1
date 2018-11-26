let table = '';
console.log('x1\tx2\tx3');
for ( let i = 1; i<=10; i++){
    table += i + '\t' + Math.pow(i,2) + '\t' + Math.pow(i,3) + '\n';
}
console.log(table);