let tid = new Date();
let dag = tid.getDay();
let månad = tid.getMonth();
let år = tid.getFullYear();
let dag2 = tid.getDate();

let dagar = ['Söndag','Måndag','Tisdag','Onsdag','Torsdag','Fredag','Lördag'];
let månader = ['Januari','Februari','Mars','April','Maj','Juni','Juli','Augusti','September','Oktober','November','December'];
console.log(dagar[dag] + ' den' +' ' +  dag2 + ' ' + månader[månad] + ' ' + år);