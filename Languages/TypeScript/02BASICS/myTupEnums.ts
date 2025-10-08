// const user: (string | number)[] = ["Aditya", "John", 1];
let user: [string, number, boolean]=["Aditya", 1, true];
user = ["Aditya", 1, true];

let rgb: [number, number, number] = [255, 0, 0];

type User =[number,string];
const newUser: User = [1, "Aditya"];

newUser[1] = "John";

//newUser.push(true); not allowed