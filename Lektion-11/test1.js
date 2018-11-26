let data = [
    {name:'Magnus', email:'Magnus.lidmyr@gmail.com',
    adress: {
        street: 'Tomtebodavägen 3a',
        zipcode: '111 22',
    }
    
},
    {name:'Kalle', email:'kalle@gmail.com',  adress: {
        street: 'Tomtebodavägen 3a',
        zipcode: '111 22',
    }},
    {name:'Simon', email:'Simon@gmail.com',  adress: {
        street: 'Tomtebodavägen 3a',
        zipcode: '111 22',
    }},
    {name:'Sune', email:'Sune@gmail.com',  adress: {
        street: 'Tomtebodavägen 3a',
        zipcode: '111 22',
    }},


    
]
    for (let obj of data){
        console.log(obj.name + ' bor på '+ obj.adress.street);
    }