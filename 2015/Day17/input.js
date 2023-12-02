const path = require('path');
const fs = require('fs');

let input = fs
	.readFileSync(path.join(__dirname, 'raw.txt'), 'utf8')
	.toString()
	.trim()
    .split("\n")
    .map(str => parseInt(str));

module.exports = {
	input,
};