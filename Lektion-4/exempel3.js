// Arbete med primitivatyper ( datatyper)

// 1. String 
let firstName = "Magnus";
let lastName = 'Lidmyr';
console.log(firstName, lastName);
console.log("HejHej");
console.log(`Sås`); // Ecma-script 6 Template Strings (Backticks)(överkurs)

// 2. Number
let age=45;
const PI = 3.14159;
let price = 5.50;
let quantity = 10;
let total = price * quantity;
console.log(total);

// 3. boolean (antingen true eller false)
let again = false; // eller 0
if(again)
   console.log("Inne i if");
again = true;
if(again)
   console.log("Inne again i for-satsen");

// 4. undefined ( OBS! Detta är en typ i JS)
   let name;
   console.log(name);

   console.log(mobile); // OK eftersom mobile har deklarerats med var
   var mobile;
   mobile = "073-5834638649"

   let adress;
   adress = "Solnavägen";
   console.log(adress);

   // 5. null
   let ingenting = null;
    console.log(ingenting);
  
   
    console.log("------------------------");
   console.log(typeof firstName);
   console.log(typeof age);
   console.log(typeof again);
   console.log(typeof name);
   console.log(typeof ingenting);