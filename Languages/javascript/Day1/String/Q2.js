let word = "Racecar";
let wordToCheck = "racecar";

word = word.toLowerCase();
wordToCheck = wordToCheck.toLowerCase();

let reversedWord = word.split('').reverse().join('');

if (reversedWord === wordToCheck) {
    console.log("Is palindrome");
} else {
    console.log("Not a palindrome");
}