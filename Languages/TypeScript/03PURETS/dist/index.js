// class User{
//     email:string;
//     name:string;
//     private readonly city:string="Delhi";
//     constructor(email:string,name:string){
//         this.email=email;
//         this.name=name;
//     }
//     getCity():string{
//         return this.city;
//     }
// }
class User {
    email;
    name;
    userId;
    city = "Delhi";
    constructor(email, name, userId // optional parameter
    ) {
        this.email = email;
        this.name = name;
        this.userId = userId;
    }
    get getCity() {
        return this.city;
    }
    set setUserId(userId) {
        if (userId <= 0) {
            throw new Error("UserId cannot be negative or zero");
        }
        this.userId = userId;
    }
}
const hitesh = new User("aditya@gmail", "Aditya");
// console.log(hitesh.city); not allowed with private
console.log(hitesh.getCity);
// hitesh.city="Noida";
// console.log(hitesh.city);
console.log(hitesh.email);
hitesh.setUserId = 123;
console.log(hitesh);
class SubUser extends User {
    isFamily = true;
    changeCity() {
        this.city = "Noida";
    }
}
export {};
