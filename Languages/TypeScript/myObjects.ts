// // const User = {
// //     name: "Alice",
// //     email: "alice@gmail.com",
// //     isActive: true
// // }

// // function createUser({name: string, isPaid: boolean}){
// // }
// // function creatNewUser(user:{name: string,email: string, isActive: boolean}): string{
// //     return user.email;
// // }
// // createUser({name: "Adii", isPaid: false});

// // function createCourse(): {name: string, price: number}{
// //     return {name: "reactjs", price: 399};
// // }
// // function createNewCourse(): {name: string, email: string, isActive: boolean}{
// //     return {name: "reactjs", email:"myname@gmail.com", isActive: false};
// // }

// type User = {
//     name: string,
//     email: string,
//     isActive: boolean
// }
// function createUser(user: User): User{
//     return {name: "", email: "", isActive: false};
// }
// let newUser=createUser({name: "Adii", email: "", isActive: false});
// console.log(newUser);

type User={
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean
    credcardDetails?: number //optional property bcz of "?"
}

let myUser: User={
    _id: "12345",
    name: "Adii",
    email: "aditya@gmail.com",
    isActive: false,
    credcardDetails: 1234
}
myUser.email="h@fmmail.com";
//myUser._id="67890"; Error: Cannot assign to '_id' because it is a read-only property.
console.log(myUser);

type cardNumber={
    cardnumber: string
}
type cardDate={
    carddate: string
}
type cardDetails=cardNumber & cardDate & {
    cvv: number
}


export {};