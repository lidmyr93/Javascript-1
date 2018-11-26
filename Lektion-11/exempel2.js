// Iteration över arrayer

let operativsystem = ['Windows','MacIntosh','Linux','Ubuntu'];

for (let i = 0; i < operativsystem.length; i++) {
    console.log(operativsystem[i]);
    
}

let data = [
    {name:'Magnus', email:'Magnus.lidmyr@gmail.com'},
    {name:'Kalle', email:'kalle@gmail.com'},
    {name:'Simon', email:'Simon@gmail.com'},
    {name:'Sune', email:'Sune@gmail.com'},
];
// Skriva ut email adresserna som finns i ett objekt i en array med iteration
for (let i = 0; i < data.length; i++) {
    console.log(i + ':' +data[i].email); 
    
}
console.log('------For-in--------');
// For-in sats , skräddarsydda loppar som använda för iteration över arrayer
for (let i in data){
    console.log(i + ':' + data[i].name);
}
console.log('--------For-of-------');
// For-of sats, skräddarsydda loppar som använda för iteration över arrayer

for (let obj of data){
    console.log(obj.email);
}

