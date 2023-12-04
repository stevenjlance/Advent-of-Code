const { input } = require('./input');
let seatIDs = []

input.forEach(seat => {
    let row = 0
    let col = 0

    // Determine row
    let maxRow = 128
    let minRow = 1
    let midpoint = Math.floor((maxRow + minRow)/2)
    for(let i = 0; i < 7; i++){
        if(seat[i] === "F"){
            maxRow = midpoint;
            midpoint = Math.floor((maxRow + minRow)/2)
        }
        else {
            minRow = midpoint
            midpoint = Math.floor((maxRow + minRow)/2)
        }
    }
    row = midpoint
    // Determine column
    let maxCol = 8
    let minCol = 1
    let midpointCol = Math.floor((maxCol + minCol)/2)
    for(let i = 7; i < 10; i++){
        if(seat[i] === "L"){
            maxCol = midpointCol;
            midpointCol = Math.floor((maxCol + minCol)/2)
        }
        else {
            minCol = midpointCol
            midpointCol = Math.floor((maxCol + minCol)/2)
        }
    }
    col = midpointCol
    // Calculate the seatID
    let seatID = (row * 8) + col;
    // Add it to the array
    seatIDs.push(seatID)
})

// Sort largest to smallest to determine largest seat
seatIDs.sort(function(a, b){return a - b}).reverse()
// Part 1 Answer
console.log(seatIDs[0])

module.exports = {
    seatIDs
}