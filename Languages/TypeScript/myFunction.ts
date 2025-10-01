function addTwo(num: number): number{
    return num + 2;
}
addTwo(5);

function getUpper(val: string){
    return val.toUpperCase();
}
getUpper("hello"); 

function signUpUser(name: string, email: string, isPaid: boolean){
}

let loginUser = (name: string, email: string, isPaid: boolean ) => {
    if(isPaid===void 0){ isPaid = false;}
};
signUpUser("Adii", "aditya@gmail.com", false);
let num=loginUser("Adii", "aditya@gmail.com", true);

console.log(num);

function getValue(myVal: number): boolean{
    if(myVal > 5){
        return true;
    }
    //return "200 OK"; Error: Type 'string' is not assignable to type 'boolean'
    return false;
}

const getHello = (s: string): string => {
    return "";
}

const heros = ["thor", "spiderman", "ironman"];

heros.map((hero:string):string => {
    return `hero is ${hero}`;
})

function consoleError(errmsg: string): void{
    console.log(errmsg);
}