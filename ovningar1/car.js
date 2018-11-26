let car = {
    name : 'fiat',
    model : '500',
    weight : '850',
    color : 'white',
    start(){
        console.log('brum');
    },
    drive(){
        console.log('kör');
    },
    brake(){
        console.log('bilen bromsar');
    },
    stop(){
        console.log('bilen har stannat');
    }
}
console.log(car);
car.start();
car.drive();
car.brake();
car.stop();

