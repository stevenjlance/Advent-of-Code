const path = require('path');
const fs = require('fs');

let input = fs
	.readFileSync(path.join(__dirname, 'raw.txt'), 'utf8')
	.toString()
	.trim()
	.split('\n')
    .map(str => {
        const arr = str.split(" ");
        const obj = {
            to: arr[0],
            from: arr[2],
            distance: parseInt(arr[4],10)
        }
        return obj;
    })

const unique_cities_set = new Set();
const distances = {}
for(let { from, to, distance } of input){
    unique_cities_set.add(from).add(to)
    distances[`${from}${to}`] = distance;
	distances[`${to}${from}`] = distance;
}
const unique_cities = [...unique_cities_set]

module.exports = {
    input,
    unique_cities,
    distances
}