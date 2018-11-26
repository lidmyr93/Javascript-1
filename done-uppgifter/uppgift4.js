let hiss = {

    plan     : 0 ,
    goTo:function (x){
        plan = x;
         console.log('Hissen åker till plan ' + x);
},

    where:function(){
        console.log('Hissen är på plan ' + plan);
    }

}
hiss.goTo(5);
hiss.where();