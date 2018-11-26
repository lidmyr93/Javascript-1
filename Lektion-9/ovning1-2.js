let tid = new Date();
år = tid.getFullYear();
månad = tid.getMonth()+1;
dag = tid.getDate();
console.log(år + '\-' + månad + '\-'+ dag);


klockan = tid.toTimeString();
klockan = klockan.slice(0,8)
console.log(klockan);
