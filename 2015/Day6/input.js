const path = require('path');
const fs = require('fs');

let input = fs
	.readFileSync(path.join(__dirname, 'raw.txt'), 'utf8')
	.toString()
	.trim()
    .split('\n')
    .map(str => {
        if(str.includes("toggle")){
            let command = str.split(" ")
            command.splice(2,1)
            return command
        }
        if(str.includes("turn on")){
            let command = str.split(' ')
            command.splice(3,1)
            command[0] = "turn on";
            command.splice(1,1)
            return command
        }
        if(str.includes("turn off")){
            let command = str.split(' ')
            command.splice(3,1)
            command[0] = "turn off";
            command.splice(1,1)
            return command
        }
    })

module.exports = {
	input,
};