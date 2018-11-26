function maxMin(x){
max = Math.max(...x);
min = Math.min(...x);
return 'Max is ' + max + '. Min is ' + min + '.';
}
console.log(maxMin([10,20,30]));