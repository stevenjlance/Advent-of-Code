const { input } = require('./input');

function treeCount(right, down, data){
    let currentRow = 0;
    let currentCol = 0;
    let treeCount = 0;
    while (currentRow < data.length - 1) {
        currentRow += down
        currentCol += right
        maxCol = data[0].length
        // Reset the grid if it's at the end
        if(currentCol >= maxCol) {
            currentCol = currentCol - maxCol;
        }
        if(data[currentRow][currentCol] === "#") treeCount++;
    }

    return treeCount;
}
// Test scenarios in the problem
const data = [treeCount(1, 1, input), treeCount(3, 1, input), treeCount(5, 1, input), treeCount(7, 1, input), treeCount(1, 2, input)]
// Multiply the answers together
const part2Answer = data.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    1
)
console.log(part2Answer)