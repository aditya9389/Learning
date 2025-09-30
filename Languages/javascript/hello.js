// console.log("hello");
// let b=10;
// b=30;
// console.log(b);
// const c=15;
// c=25;
// console.log(c);
/*let message = 'I am global';

    function globalFunction() {
      console.log(message); // Output: I am global
    }
    globalFunction();

*/
// function localFunction() {
//         let message = 'I am local';
//         console.log(message); 
//       }
//       localFunction(); // Output: I am local
// console.log(message); // Error: message is not defined


// function exampleFunction() {
//         if (true) {
//           let message = 'I am inside a block';
//           console.log(message); // Output: I am inside a block
//         }
//         console.log(message); // Error: mesaage is not defined
//       }
//       exampleFunction()

// let x = 30
// let y = "30"
// console.log(typeof x);
// console.log(typeof y);
// console.log("The output is ",x+y)


// let x=10;
// let y="10";
// //if(x==y)
// if(x===y)
// {
//     console.log("equal");
// }
// else{
//     console.log("not equal");
// }

// let a = 30
// if(a==30){
// console.log("Statement is True")
// }else{
// console.log("Statement is False")
// }


// let a=30;
// a==30? console.log("equal"):console.log("not");

// const arr1 = [1, 2, 3];
// const arr2 = [...arr1]; // Clone arr1
// const arr3 = [4, 5, ...arr1]; // Concatenate arr1 with arr3
// console.log(arr3);
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
     
console.log(sum(1, 2, 3, 4)); // Output: 10
console.log(sum(5, 10, 15)); // Output: 30