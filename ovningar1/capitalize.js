let msg = 'hej och välkommen';

function capitalize(msg){

    msg = msg.charAt(0).toUpperCase() + msg.substring(1)
    return msg;
    
}
console.log(capitalize(msg));
