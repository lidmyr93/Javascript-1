function Cars(reg,fab,gear,mil,year,fuel){
    this.reg = reg;
    this.fab = fab;
    this.gear = gear;
    this.mil = mil;
    this.year = year;
    this.fuel = fuel;
}

let car1 = new Cars('abc123','Volvo','Manuell','9000','2001','Bensin');
let car2 = new Cars('ybc 876', 'Saab', 'Automat','87000','1998','Diesel');

console.log(car1.gear);
console.log(car2.fab);