const { input } = require('./input');

let total = 0;

// Iterate through each game
for(let i = 0; i < input.length; i++){
    // Set the max initially as 0
    let redMax = 0
    let greenMax = 0
    let blueMax = 0
    // Iterate through all the commands, but skip the game id
    for(let j = 1; j < input[i].length; j++){
        // split the commands on a space and convert count to a number
        let command = input[i][j].split(' ')
        command[0] = Number(command[0])
        // Check if value exceeds current max and update if it does
        if(command[1] === 'red' && command[0] > redMax) {
            redMax = command[0]
        }
        else if(command[1] === 'green' && Number(command[0]) > greenMax) {
            greenMax = command[0]
        }
        if(command[1] === 'blue' && Number(command[0]) > blueMax) {
            blueMax = command[0]
        }
    }
    // Determine powers and update total
    let powers =redMax * greenMax * blueMax
    total += powers
}

// Part 2 answer
console.log(total)