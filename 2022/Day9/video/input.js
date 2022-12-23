const path = require('path');
const fs = require('fs');

let input = fs
	.readFileSync(path.join(__dirname, 'raw.txt'), 'utf8')
	.toString()
	.trim()
	.split('\n')
    .map(line => {
        const [letter, number] = line.split(" ")
        return {
            direction: letter,
            totalMoves: parseInt(number),
        }
    })
    

module.exports = {
    input
}