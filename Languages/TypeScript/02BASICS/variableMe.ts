let greetings: string = "Hello Adii";
console.log(greetings);
greetings=greetings.toLowerCase();
console.log(greetings);
//greetings = 7; Error: Type 'number' is not assignable to type 'string'

//number
let myNum=7;
let userId: number=34567.45;
let hex: number=0xf00d;
let binary: number=0b1010;
let octal: number=0o744;
let sum: number;
sum=myNum+userId;

//userId="34567"; Error: Type 'string' is not assignable to type 'number'

//boolean
let isLoggedIn: boolean = false;
console.log(isLoggedIn);
//isLoggedIn="true"; Error: Type 'string' is not assignable to type 'boolean'

let hero;
function getHero() {
    return "thor";
}
hero = getHero();