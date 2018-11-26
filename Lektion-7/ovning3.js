function swap (x,y){
    x = x + y; 
    y = x - y;
    x = x - y;
    return [x, y];
};
console.log(swap(67,56));

// Senaste sättet 
let foo = 10;
let bar = 20;
console.log(foo,bar);
[foo,bar] = [bar,foo];
console.log(foo,bar);