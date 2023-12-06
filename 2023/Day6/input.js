const path = require('path');
const fs = require('fs');

let input = fs
	.readFileSync(path.join(__dirname, 'raw.txt'), 'utf8')
	.toString()
	.trim()
	.split('\n')
    .map(val => val.split(":"))

// get time and distance values 
let timeDistance = []
for(let i = 0; i < input.length; i++){
    for(let j = 0; j < input[i].length; j++){
        if(j !== 0){
            // trim the leading spaces, replace all non single spaces with a single space, split on single spaces
            let arr = input[i][j].trim().replace(/\s+/g, ' ').split(" ")
            timeDistance.push(arr)
        }
    }
}

module.exports = {
	timeDistance,
};