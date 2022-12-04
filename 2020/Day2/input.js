const path = require('path');
const fs = require('fs');

const input = fs
	.readFileSync(path.join(__dirname, 'raw.txt'), 'utf8')
	.toString()
	.trim()
    .split('\n')
    .map(str => str.split(" "))

input.forEach((val,i) => {
    val[1] = val[1].slice(0,-1)
})

module.exports = {
	input,
};