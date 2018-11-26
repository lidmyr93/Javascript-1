function Recept(titel,how,ing){
    this.titel = titel;
    this.how   = how;
    this.ing   = ing;
}

let recept1 = new Recept('Pannkakor','Blanda ihop allt bara, sen stek',['mjölk','mjöl','ägg']);
let recept2 = new Recept('Tacos','Blanda ihop allt i ett bröd',['köttfärs','bröd','såser']);

let kokbok = [recept1,recept2];
console.log(kokbok);