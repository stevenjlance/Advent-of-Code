const path = require('path');
const fs = require('fs');

let input = fs
	.readFileSync(path.join(__dirname, 'raw.txt'), 'utf8')
	.toString()
	.trim()
	.split('\n\n')

function parseInput(){
	return input.map(group => {
		const [left, right] = group.split('\n').map(line => JSON.parse(line))
		return {
			left,
			right,
		}
	})
}
let data = parseInput()
module.exports = {
    data
}