function capitalize_v1(str){
    let firstChar = str.charAt(0); // Hämtar första tecknet sparar i firstChar
    // Omvandlar första tecknet till versal
    firstChar = firstChar.toUpperCase();
    // Hämtar resten eller med substring()
    let resten = str.slice(1);
    // skapa en ny sträng
    let result = firstChar + resten;
    return result;
}
let test = 'hej och välkommen!';
console.log(capitalize_v1(test));


function capitalize_v2(str){
    return str.charAt(0).toUpperCase() + str.substring(1);
}

let x = 'hej och välkommen!';
console.log(capitalize_v2(x));