let myArr = ['spela data','äta chips','fiska','träna','plugga JS','dricka bärs','Sovmorgon'];

let dag = new Date();
let day = dag.getDay();
function dagen(day){
    let x = '';
switch(day){
    
    case 0: x ='Det är Söndag idag och du ska ' + myArr[day]; break;
    case 1: x ='Det är Måndag idag och du ska ' + myArr[day]; break;
    case 3: x ='Det är Tisdag idag och du ska ' + myArr[day]; break;
    case 2: x ='Det är Onsdag idag och du ska ' + myArr[day]; break;
    case 4: x ='Det är Torsdag idag och du ska ' + myArr[day]; break;
    case 5: x ='Det är Fredag idag och du ska ' + myArr[day]; break;
    case 6: x ='Det är Lördag idag och du ska ' + myArr[day]; break;
    
}//switch
return x;
}//function

/*function todo(day){
    let y = '';
    switch(day){
    case 0: y = myArr[day]; break;
    case 1: y = myArr[day]; break;
    case 2: y = myArr[day] ; break;
    case 3: y = myArr[day]; break;
    case 4: y = myArr[day]; break;
    case 5: y = myArr[day]; break;
    case 6: y = myArr[day]; break;
    }
 return y;
}
console.log('Det är ' +dagen(day) +' idag och du ska ' + todo(day));*/
console.log(dagen(day));