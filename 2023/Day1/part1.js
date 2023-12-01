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
function sumAll(data){
    let sum = 0;
    for(let i = 0; i < data.length; i++){
        let firstDigit = getFirstDigit(data[i])
        let lastDigit = getLastDigit(data[i])
        let digit = firstDigit + lastDigit
        sum += Number(digit)
    }
    return sum
}

// Part 1 answer
console.log(sumAll(input))