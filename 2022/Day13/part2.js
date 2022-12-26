const path = require('path');
const fs = require('fs');
const { checkOrder } = require("./part1");

let input = fs
	.readFileSync(path.join(__dirname, 'raw.txt'), 'utf8')
	.toString()
	.trim()

function getInput2() {
    return input
        .replace(/\n\n/g, "\n")
        .split("\n")
        .map((line) => JSON.parse(line));
}

function part2() {
    // Prase data and add two new values
    const data = getInput2().concat([[[2]], [[6]]]);
    // Sort the array using checkOrder
    const strings = data.sort((a, b) => {
        const result = {};
        checkOrder(a, b, result);
        return result.rightOrder ? -1 : 1;
    })
    // Stringify list to make it easy to search
    .map(x => JSON.stringify(x))
    // Find index and add 1 since we are doing index of 1
    const twoPosition = strings.indexOf("[[2]]") + 1;
    const sixPosition = strings.indexOf("[[6]]") + 1;
    // Final answer
    console.log(`PART 2 ANSWER: ${twoPosition * sixPosition}`)
    
}

part2();