// Arbete med Date

// SKapar en instans av objektet Date
let today = new Date();
console.log(today);
console.log(today.getFullYear()); // 2018
console.log(today.getMonth()); // 9 = oktober (0:january, 1:february osv)
console.log(today.getDay()); // 3 = Onsdag (0:sunday, 1:monday osv)
console.log(today.getDate()); // 17
console.log('Klockan');
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
console.log(today.getMilliseconds());

console.log(today.toDateString());
console.log(today.toTimeString());