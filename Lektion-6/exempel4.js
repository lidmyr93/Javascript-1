// Funktioner med Return
//Version 1
function fullName_v1(firstName, lastName){
   let name;
   name=firstName + ' ' + lastName;
   return name;
}
//Version 2
function fullName_v2(firstName, lastName){
   // Snabbare och proffsigare ( Clean code)
    return firstName + ' ' + lastName;
  
  }
  
  let name1 = fullName_v1("Magnus", "Lidmyr");
  console.log("Hej"+ name1);
  // eller skriv ut dirket
  console.log('Hej!' + fullName_v2("Lidmyr","Magnus"));