const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
function identityFour(val) {
    return val;
}
identityFour({ brand: "coke", type: 1 });
function getSearchProducts(products) {
    const myIndex = 1;
    return products[myIndex]; // ! means promise it will never be undefined
}
const getMoreSearchProducts = (products) => {
    const myIndex = 1;
    return products[myIndex]; // ! means promise it will never be undefined
};
export {};
