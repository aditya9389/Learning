"use strict";
// // const User = {
// //     name: "Alice",
// //     email: "alice@gmail.com",
// //     isActive: true
// // }
Object.defineProperty(exports, "__esModule", { value: true });
var myUser = {
    _id: "12345",
    name: "Adii",
    email: "aditya@gmail.com",
    isActive: false,
    credcardDetails: 1234
};
myUser.email = "h@fmmail.com";
//myUser._id="67890"; Error: Cannot assign to '_id' because it is a read-only property.
console.log(myUser);
