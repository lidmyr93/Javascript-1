// Några användbara metoder i objektet window

// 1. Prompt - Inmatningsfält och alert(popup/meddelande ruta)

let person = prompt ('Vad heter du?');
//alert('Hej ' + person)

// 2. setTimeout - kör en funktion efter ett antal sekunder 1000 (ms) = 1sekund
function helloPopup(){
    alert('Hej ' + person);
}
setTimeout(helloPopup,3000);

// 3. setIntervall - kör och repeterar en funktion med en bestämd intervall(antal millisekunder)
setInterval(inter,1000);

function inter(){
    console.log(person);
}
