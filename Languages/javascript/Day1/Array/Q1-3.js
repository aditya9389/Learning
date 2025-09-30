let itemRates =[10,20,30,40,49,60];
let affordableItems=itemRates.filter((v)=>v<50);
console.log(affordableItems);
let sum=affordableItems.reduce((acc,curr)=>acc+=curr,0);
console.log(sum);