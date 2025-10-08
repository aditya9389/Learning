let score: number | string = 33;  //can be used for multiple types
score = 44;
score = "55";

type User = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

let hitesh: User | Admin = {name: "hitesh", id: 3345};
hitesh = {username: "hitesh123", id: 3345};  //allowed because of union type

function getDbId(id: number | string){
     //id.toLowerCase(); error because id can be number or string
     //id - 2; error because id can be number or string
        if(typeof id === "string"){
            id=id.toLowerCase();
        }
        else{
            id=id+2;
        }
     console.log(`DB id is: ${id}`);
}

const data: number[]=[1,2,3];
const data2: string[]=["1","2","3"];
const data3: (string | number)[] = [1,"2",3,"4"];  //need() for array of union types else it will only take one type

let seatAllotment: "aisle" | "middle" | "window";  //literal types
seatAllotment = "aisle";
// seatAllotment = "crew"; error because not in the defined literal types