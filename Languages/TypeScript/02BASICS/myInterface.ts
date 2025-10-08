interface User {
    readonly dbId: number;
    email: string;
    userId: number;
    googleId?: string;
    // startTrial: () => string;
    startTrial(): string;
    getCoupon(couponname: string,value:number): number;
}
interface User{  //can add new properties in same name interface
    githubToken: string;
} //reopening of interface

interface Admin extends User{
    role: "admin" | "ta" | "learner";
}

const hitesh: User = {
    dbId: 22,
    githubToken: "github",
    email: "hitesh@gmail",
    userId: 123,
    googleId: "google",
    startTrial: () => {
        return "trial started";
    },
    //name,num ,, name="adii", username everyting allowed
    getCoupon: (name:string,num:number) => {
        return num;
    }
}
let dis:number= hitesh.getCoupon("adii",20);
console.log(dis);

export {}