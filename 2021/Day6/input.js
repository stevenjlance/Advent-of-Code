const path = require('path');
const fs = require('fs');

const input = fs
	.readFileSync(path.join(__dirname, 'raw.txt'), 'utf8')
	.toString()
	.trim()
	.split('\n')
    .map(str => {
        const [points1, points2] = str.split(" -> ")
        const [x1, y1] = points1.split(",")
        const [x2, y2] = points2.split(",")
        return {
            cord1: [x1, y1], 
            cord2: [x2, y2]
        }
    })

module.exports = {
	input,
};