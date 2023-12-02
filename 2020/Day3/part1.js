const { input } = require('./input');

const right = 3;
const down = 1;

let currentRow = 0;
let currentCol = 0;
let treeCount = 0;
while (currentRow < 322) {
    currentRow += down
    currentCol += right
    let maxCol = input[0].length
    // Reset the grid if it's at the end
    if(currentCol >= maxCol) {
        currentCol = currentCol - maxCol;
    }
    if(input[currentRow][currentCol] === "#") treeCount++;
}
// Part 1 Answer
console.log(treeCount)