const { input } = require('./input.js');

// Split the bingoNumbers from the boards
// 100 boards stored in list separated by a comma
const [bingoNumbersAsString, ...boardsAsString] = input.split('\n\n')

// convert bingo numbers from string to number
console.log(boardsAsString)
const bingoNumbers = bingoNumbersAsString
    .split(',')
    .map((numAsString) => Number(numAsString))

const boards = boardsAsString.map((boardAsString) => 
    boardAsString
        .split('\n')
)

console.log(boards)
