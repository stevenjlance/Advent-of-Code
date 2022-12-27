const path = require('path');
const fs = require('fs');

let input = fs
	.readFileSync(path.join(__dirname, 'raw.txt'), 'utf8')
	.toString()
	.trim()
    .split('\n')
    .map(line => {
        let cord = line.split(" -> ")
        let xy = []
        cord.map(val => {
            const point = {}
            let [x, y] = val.split(",");
            point.x = x;
            point.y = y;
            xy.push(point)
        })
        return xy
    })


module.exports = {
	input,
};