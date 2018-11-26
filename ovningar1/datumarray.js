let date = new Date();
dag = date.getDay();
dagen = date.getDate();
month = date.getMonth();
year = date.getFullYear();

let veckodagar = ['söndag','måndag','tisdag','onsdag','torsdag','fredag','lördag'];
let månader = ['januari','februari','mars','april','maj','juni','juli','augusti','september','oktober','november','december'];

console.log(veckodagar[dag]+' den '+dagen+' '+månader[month] + ' '+year);