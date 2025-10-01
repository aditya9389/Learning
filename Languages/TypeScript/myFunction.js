function addTwo(num) {
    return num + 2;
}
addTwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("hello");
function signUpUser(name, email, isPaid) {
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) {
        isPaid = false;
    }
};
signUpUser("Adii", "aditya@gmail.com", false);
var num = loginUser("Adii", "aditya@gmail.com", true);
console.log(num);
