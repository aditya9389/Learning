const score : Array<number>=[];
const names : Array<string>=[];

function identityOne(val: boolean | number): boolean | number{
    return val;
}

function identityTwo(val: any): any{
    return val;
}

function identityThree<Type>(val: Type): Type{
    return val;
}

function identityFour<T>(val: T): T{
    return val;
}

interface Bottle{
    brand: string,
    type: number
}

identityFour<Bottle>({brand: "coke", type: 1});

function getSearchProducts<T>(products: T[]):T{
    const myIndex= 1;
    return products[myIndex]!;  // ! means promise it will never be undefined
}

const getMoreSearchProducts=<T>(products: T[]):T=>{
    const myIndex= 1;
    return products[myIndex]!;  // ! means promise it will never be undefined
}

interface Database{
    connection: string,
    username: string,
    password: string
}
function anotherFunction<T,U extends Database>(valOne: T, valTwo: U): object{
    return {
        valOne,
        valTwo
    }
}
anotherFunction("hello", {connection: "test", username: "test", password: "test"});

interface Quiz{
    name: string,
    type: string
}
interface Course{
    name: string,
    author: string,
    subject: string
}
class Sellable<T>{
    public cart: T[] = [];
    addToCart(product: T){
        this.cart.push(product);
    }
}