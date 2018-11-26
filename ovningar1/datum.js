var date = new Date();
year = date.getFullYear();
year = year.toString().slice(2,4)
month = date.getMonth() + 1;
if (month < 10){
    month = '0' + month;
};
day = date.getDate();
if ( day < 10){
    day = '0' + day;
};
console.log(year+month+day);