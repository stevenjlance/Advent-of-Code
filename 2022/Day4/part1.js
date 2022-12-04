const { input } = require('./input')

let firstRange = input[0][0].split('-')
let secondRange = input[0][1].split('-')

function between(num1, num2, min, max){
    num1 = parseInt(num1, 10);
    num2 = parseInt(num2, 10);
    min = parseInt(min, 10);
    max = parseInt(max, 10);
    if(num1 >= min && num1 <= max){
        if(num2 >= min && num2 <= max) return true
    }
    return false;
}

let count = 0;
for(let i = 0; i < input.length; i++){
    let firstRange = input[i][0].split('-')
    let secondRange = input[i][1].split('-')
    if(between(firstRange[0], firstRange[1], secondRange[0], secondRange[1]) || between(secondRange[0], secondRange[1], firstRange[0], firstRange[1])){
        count++
    }
}
console.log(count)