const path = require('path');
const fs = require('fs');

let raw = fs
	.readFileSync(path.join(__dirname, 'raw.txt'), 'utf8')
	.toString()
	.trim()
	.split('\n')
    // Split on colons and semicolons
    .map(str => str.split(/[\;:]/i))

// clean up the input so that the structure is [game id, commands]
let input = []
for(let i = 0; i < raw.length; i++){
    input.push([])
    for(let j = 0; j < raw[i].length; j++){
        if(j === 0){
            let str = raw[i][j].trim('').split(" ")
            input[i].push(Number(str[str.length - 1]))
        }
        else {
            let str = raw[i][j].trim().split(", ")
            str.forEach(command => {
                input[i].push(command)
            })
        }
    }
}


module.exports = {
	input,
};