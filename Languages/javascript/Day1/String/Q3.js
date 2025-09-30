function removeSpaces(str) {
  return str.replace(" ", '');
}

const myString = "hello world";
const stringWithoutSpaces = removeSpaces(myString);
console.log(stringWithoutSpaces);