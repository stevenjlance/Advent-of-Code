const { input } = require('./input');

let grid = []
let sumOfGearRatios = 0
for(let i = 0; i < input.length; i++){
    for(let j = 0; j < input[i].length; j++){
        // Find all * and generate numbers that touch it
        if(input[i][j] === "*"){
            // Generate numbers that surround the *
            grid.push(getNumbers(i, j, input))
        }
    }   
}

for(i = 0; i < grid.length; i++){
    if(grid[i].length > 1){
        let gearRatio = 1;
        for(j = 0; j < grid[i].length; j++){
            gearRatio *= Number(grid[i][j])
        }
        sumOfGearRatios += gearRatio;
        gearRatio = 1
    }
}

console.log(sumOfGearRatios)

function getNumbers(row, col, input){
    let numbers = []
    // iterate to the left until you reach a non-number or the end of the row
    if(col > 0){
        let number = ""
        for(let i = col - 1; i >= 0; i--){
            if(!isNaN(parseInt(input[row][i]))) {
                number = input[row][i] + number;
            }
            else {
                break
            }
        }
        if(number !== "") numbers.push(number)
    }
    // iterate to the right until you reach a non number or the end of the row
    if(col < input[row].length - 1){
        let number = ""
        for(let i = col + 1; i < input[row].length; i++){
            if(!isNaN(parseInt(input[row][i]))) {
                number += input[row][i];
            }
            else {
                break
            }
        }
        if(number !== "") numbers.push(number)
    }

    // Iterate along the top if it exists to pull off the number if it exists
    if(row > 0) {
        let starIndex = col;
        // Pull everything that could potentially touch the *
        let rowAbove = input[row - 1]
        let foundNums = []
        let num = ""
        for(let i = col - 3; i < starIndex + 4; i++){
            let currentVal = rowAbove[i]
            // If i is col - 3 verify that col - 2 and col - 1 has a number, if not, skip
            if(/^\d+$/.test(currentVal) && i === col - 3){
                if(/^\d+$/.test(rowAbove[col - 1]) && /^\d+$/.test(rowAbove[col - 2])){
                    num += currentVal
                }
                else {
                    continue
                }
            }
            else if(/^\d+$/.test(currentVal) && i === col - 2){
                if(/^\d+$/.test(rowAbove[col - 1])){
                    num += currentVal
                }
                else {
                    continue
                }
            }
            // If i is col + 2 verify that col + 1 has a number, if not, skip
            else if(/^\d+$/.test(currentVal) && i === col + 2){
                if(/^\d+$/.test(rowAbove[col + 1])){
                    num += currentVal
                }
                else {
                    continue
                }
            }
            // If i is col + 3 verify that col + 1 and col + 2 has a number, if not, skip
            else if(/^\d+$/.test(currentVal) && i === col + 3){
                if(/^\d+$/.test(rowAbove[col + 1]) && /^\d+$/.test(rowAbove[col + 2])){
                    num += currentVal
                }
                else {
                    continue
                }
            }
            else if(/^\d+$/.test(currentVal)) {
                num += currentVal
            }
            else if(num !== ""){
                foundNums.push(num)
                num = ""
            }
        }
        if(num !== "") foundNums.push(num)
        foundNums.forEach(val => numbers.push(val))
    }
    
    // Iterate along the bottom if it exists to pull off the number if it exists
    if(row < input.length - 1) {
        let starIndex = col;
        // Pull everything that could potentially touch the *
        let rowBelow = input[row + 1]
        let foundNums = []
        let num = ""
        
        for(let i = col - 3; i < starIndex + 4; i++){
            let currentVal = rowBelow[i]
            // If i is col - 3 or col - 2 verify that col - 1 has a number, if not, skip
            if(/^\d+$/.test(currentVal) && i === col - 3){
                if(/^\d+$/.test(rowBelow[col - 1]) && /^\d+$/.test(rowBelow[col - 2])){
                    num += currentVal
                }
                else {
                    continue
                }
            }
            else if(/^\d+$/.test(currentVal) && i === col - 2){
                if(/^\d+$/.test(rowBelow[col - 1])){
                    num += currentVal
                }
                else {
                    continue
                }
            }
            // If i is col + 2 or col + 3 verify that col + 1 has a number, if not, skip
            else if(/^\d+$/.test(currentVal) && i === col + 3){
                if(/^\d+$/.test(rowBelow[col + 1]) && /^\d+$/.test(rowBelow[col + 2])){
                    num += currentVal
                }
                else {
                    continue
                }
            }
            else if(/^\d+$/.test(currentVal) && i === col + 2){
                if(/^\d+$/.test(rowBelow[col + 1])){
                    num += currentVal
                }
                else {
                    continue
                }
            }
            else if(/^\d+$/.test(currentVal)) {
                num += currentVal
            }
            else if(num !== ""){
                foundNums.push(num)
                num = ""
            }
        }
        if(num !== "") foundNums.push(num)
        foundNums.forEach(val => numbers.push(val))
    }
    // return array with all the numbers touching
    return numbers
}