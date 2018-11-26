let table = '';
console.log('x\tx/2\tx/3');
for(let i = 1; i<=10; i++){
    let h = i / 2;
    let t = i / 3;
    table += i + '\t' +  h.toFixed(2) + '\t' + t.toFixed(2) + '\n';
}
console.log(table);