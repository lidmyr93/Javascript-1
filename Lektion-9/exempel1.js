// Arbeta med inbyggda globala JS-Objet

// 1. Objektet String

let firstName = 'Magnus';
console.log(typeof firstName); // typeof=string

let antal = firstName.length
console.log(antal); // 6
//Konverterar till små bokstäver
firstName.toLowerCase();
console.log(firstName);
// Obs måste lagra resultatet , string är = inmutable 
firstName = firstName.toLowerCase(); 
console.log(firstName);
firstName = firstName.toUpperCase();
console.log(firstName);

// Konkatenering 
let lastName = 'Lidmyr';
let fullName = firstName.concat(' ',lastName);
console.log(fullName);

// Substring()
console.log(fullName.substring(0,6));
console.log(fullName.substring(7));
// Söker efter första mellanslaget
let space = fullName.indexOf(' ');
console.log(space);
console.log(fullName.substring(space+1));

// Substr()
// Magnus Lidmyr
console.log(fullName.substr(7,2));
// String i JS indexeras med samma sätt som arrayer
console.log(fullName[0]);
// Skriv ut sista tecknet i en string
console.log(fullName[fullName.length-1]);

// skriv ut indexet på sista mellanslaget
console.log(fullName.lastIndexOf(' '));

console.log(fullName.charAt(2));

// split()

arrName = fullName.split(' '); // behöver en separator, i detta fall mellanslaget.
console.log(arrName);
x1 = 'Magnus;Lidmyr';
nameArray = x1.split(';');
 console.log(nameArray);

 fullName = 'Magnus;Karl;Lidmyr';
 console.log(fullName);
 //byta ut ; till mellanslag
 fullName = fullName.replace(';', ' ');
 console.log(fullName);
// Rensa alla mellanslag men behåll ett, 
 fullName= '    Magnus    Lidmyr  '
 nameArraytva = fullName.replace(/ +/g, ' ').trim();
 console.log(nameArraytva);

 //Escape tecken
 // \n = newline
 // \" för att visa " i en string
 // \' för att visa ' i en string
 // \t visar en tab
 // \\ visar backslash
 console.log('\"Hej\" \nVälkommen\n\n Hej');
 console.log('Namn E-post');
 console.log('Magnus magnus.lidmyr@gmail.com');
 console.log('Namn\tE-post');
 console.log('Magnus\tmagnus.lidmyr@gmail.com');
 console.log('visa en backslash \\');
 
