// Arbete med JavaScript globala objekt

//Varning , problem med var
//* Om du deklarerar med samma namn som objektets egenskaper då skriver du över dessa egenskaper 
// Lösning att man använder let för att deklarera variabler istället

var innerWidth = 100;
var innerHeight = 200;
    function demo(){
        console.log(this.innerWidth);
        console.log(this.innerHeight);
        // this pekar på ett objekt som heter window( i webbläsaren)
    }
    //demo()

    // 