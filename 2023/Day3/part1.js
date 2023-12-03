const { input } = require('./input');
let partNumberCount = 0;
let previousIsNumber = false
let currentNumber = ""
for(let i = 0; i < input.length; i++){
    for(let j = 0; j < input[i].length; j++){
        // Is the current character a number
        if(!isNaN(parseInt(input[i][j]))){
            currentNumber += input[i][j]
            previousIsNumber = true
        }
        // Was the previous value a number, but we have now reached the end of the current number
        else if(previousIsNumber){
            // Get all the values that touch the number that was found. Pass in 1 less than j since we overshot by one
            let box = makeBox(i, j - 1, currentNumber, input)
            let containsSymbols = box.some(e => /^[^0-9.\w]$/.test(e))
            if(containsSymbols) partNumberCount += Number(currentNumber)            
            // Reset values
            currentNumber = ""
            previousIsNumber = false
        }
        // If you are at the end of a row and you have a number, do the check as well
        if(j === input[i].length - 1 && previousIsNumber){
            let box = makeBox(i, j, currentNumber, input)
            let containsSymbols = box.some(e => /^[^0-9.\w]$/.test(e))
            if(containsSymbols) partNumberCount += Number(currentNumber)            
        }
    }
    // reset to starting values
    previousIsNumber = false
    currentNumber = ""
}

// Part 1 Answer
console.log(partNumberCount)

// Box building function
function makeBox(row, col, number, input) {
    // Return the standard box grid if it's not the first row, last row, or edges
    // Get box size
    const boxSize = number.length;

    let box = []
    let topColIterator = col + (boxSize * -1)
    for(let i = 0; i < boxSize + 2; i++){
        // -2 -1 0 1
        // Get all values in row above if they exist
        if(topColIterator >= 0 && row > 0) {
            box.push(input[row - 1][topColIterator])
        }
        // Get all values in row below if they exist
        if(topColIterator >= 0 && row < input.length -1) {
            box.push(input[row + 1][topColIterator])
        }
            
        topColIterator++
    }
    // Get value to left of number if exists
    // 1 digit ==> -1
    // 2 digit ==> -2
    // 3 digit ==> -3
    if(col - boxSize > 0){
        box.push(input[row][col - boxSize])
    }
    // Get value to right of number if exists
    if(col + 1 < input[row].length - 1){
        box.push(input[row][col + 1])
    }

    return box

}