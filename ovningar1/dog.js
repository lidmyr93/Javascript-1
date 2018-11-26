function dogs(breed,size,age,color){
    this.breed = breed;
    this.size = size;
    this.age = age;
    this.color = color;
    this.eat = function(){
        console.log('äter');
    }
    this.sleep = function(){
        console.log('sover');
    }
    this.sit = function (){
        console.log('sitter');
    }
    this.run = function(){
        console.log('springer');
    }
}

let dog1 = new dogs('Neapolitan Mastiff','Large','5','Black');
let dog2 = new dogs('Maltese','Small','2','White');
let dog3 = new dogs('Chow Chow','Medium','3','Brown');

console.log(dog1);
dog1.eat()