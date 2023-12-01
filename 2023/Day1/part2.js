const { input } = require('./input');

function getFirstDigit(str) {
    let words = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let substring = ''
    let flag = false
    for(let i = 0; i < str.length; i++){
        // Continuously build a string and check it for the string numbers
        substring += str[i]
        let number
        words.forEach(word => {
            if(substring.includes(word)) {
                flag = true
                number = words.indexOf(word) + 1
            }
        })
        if(flag){
            return String(number)
        }
        // return the digit if you haven't spelled a number yet
        else if(!isNaN(str[i])) return str[i]
    }
}

function getLastDigit(str) {
    let words = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let flag = false
    let substring = ''
    for(let i = str.length - 1; i >= 0; i--){
        // Build the word in the reverse order so you can check if the word is present
        substring = str[i] + substring
        words.forEach(word => {
            if(substring.includes(word)) {
                flag = true
                number = words.indexOf(word) + 1
            }
        })
        if(flag){
            return String(number)
        }
        // return the digit if string is a valid number value
        else if(!isNaN(str[i])) {
            return str[i]
        }
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
// Part 2 Answer
console.log(sumAll(input))