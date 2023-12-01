const { input } = require('./input');

// Get the first digit
function getFirstDigit(str) {
    for(let i = 0; i < str.length; i++){
        // return the digit if string is a valid number value
        if(!isNaN(str[i])) return str[i]
    }
}
// Get the last digit
function getLastDigit(str) {
    for(let i = str.length - 1; i >= 0; i--){
        // return the digit if string is a valid number value
        if(!isNaN(str[i])) return str[i]
    }
}

// Get for all values and sum them up
let sum = 0;
for(let i = 0; i < input.length; i++){
   let firstDigit = getFirstDigit(input[i])
   let lastDigit = getLastDigit(input[i])
   let digit = firstDigit + lastDigit
   sum += Number(digit)
}
console.log(sum)