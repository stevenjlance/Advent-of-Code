const { input } = require("./input");

let totalCode= 0;
let totalCharacters = 0;
input.forEach(val => {
    totalCode += val.length
    totalCharacters += eval(val).length
})
console.log(totalCode - totalCharacters)