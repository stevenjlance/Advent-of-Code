const path = require('path');
const fs = require('fs');

let input = fs
	.readFileSync(path.join(__dirname, 'raw.txt'), 'utf8')
	.toString()
	.trim()
	.split('\n\n')
    .map(str => str.split('\n'))

const commandString = input[1]
const commands = []

commandString.forEach(command => {
    const fix = command.split(" ")
    // format is how many to move, starting col, ending col
    const arr = [fix[1], fix[3], fix[5]]
    commands.push(arr)
})


let stacks = input[0]
let updatedStack = []
for(let i = 0; i < stacks.length; i++){
    let arr = []
    for(let j = 0; j < stacks[i].length; j+=4){
        arr.push(stacks[i][j] + stacks[i][j + 1] + stacks[i][j + 2])
    }
    updatedStack.push(arr)
}
// remove column numbers
updatedStack.splice(8,1)

const organizedStacks = {
    "1": [],
    "2": [],
    "3": [],
    "4": [],
    "5": [],
    "6": [],
    "7": [],
    "8": [],
    "9": [],
}

for(let row = 0; row < updatedStack.length; row++){
    for(let col = 0; col < updatedStack[row].length; col++){
        if(!updatedStack[row][col].includes(" ")){
            let currentArr = organizedStacks[(col + 1).toString()]
            currentArr.push(updatedStack[row][col])
            organizedStacks[col + 1] = currentArr;
        }
    }
}

module.exports = {
	organizedStacks,
    commands,
};