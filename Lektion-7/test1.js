//Skapa ett objekt som beskriver en bil

let car = {
    // Egenskaper
    name   : 'Fiat',
    model  : '500',
    weight : '850kg',
    color  : 'White',
    //Metoder
    start:function(){console.log('Startar bilen');},
    drive:function(){console.log('Kör bilen')},
    brake:function(){console.log('Bromsar bilen')},
    stop:function(){console.log('Stannar bilen')},

}

console.log(car.name);
car.drive();