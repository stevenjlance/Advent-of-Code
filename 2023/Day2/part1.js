const { input } = require('./input');

// Determine which games would have been possible if the bag had been loaded with only 12 red cubes, 13 green cubes, and 14 blue cubes. What is the sum of the IDs of those games?

const redMax = 12;
const greenMax = 13;
const blueMax = 14;
let idSum = 0;

// Iterate through input
for(let i = 0; i < input.length; i++){
    let flag = true;
    // Skip id in this iteration
    for(let j = 1; j < input[i].length; j++){
        // split the commands on a space
        let command = input[i][j].split(' ')
        // Check if each command exceeds the max allowed count. Lower the flag if so
        if(command[1] === 'red' && command[0] > redMax) flag = false
        else if(command[1] === 'green' && command[0] > greenMax) flag = false
        else if(command[1] === 'blue' && command[0] > blueMax) flag = false
    }
    // If the flag was never lowered, then it is allowed. Update the idSum with the game id stored at index of 0
    if(flag){
        idSum += Number(input[i][0])
    }
}

// Answer to Part 1
console.log(idSum)