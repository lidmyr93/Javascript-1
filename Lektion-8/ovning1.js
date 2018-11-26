function Info(kurs,larare,points,betyg,avklarad){
        this.kurs = kurs;
        this.larare = larare;
        this.points = points;
        this.betyg  = betyg;
        this.avklarad =avklarad; 
}

let intro = new Info('intro','Per Soderberg', 20,'VG',true);
let js1   = new Info('JavaScript-1','Mahmud Al Hakim',40,'Inte betygsatt',false);
let html  = new Info('Html och CSS','Mahmud Al Hakim',30,'Inte betygsatt',false);

let info2 = [intro,js1,html];
console.log(info2);