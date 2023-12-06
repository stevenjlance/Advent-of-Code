// Initial input modification no longer works. Need to redo the process
const path = require('path');
const fs = require('fs');

let input = fs
	.readFileSync(path.join(__dirname, 'raw.txt'), 'utf8')
	.toString()
	.trim()
	.split('\n')
    .map(val => val.split(":"))

// Iterate through and pull off the time, distance values and concat them together
let timeDistance = []
for(let i = 0; i < input.length; i++){
    for(let j = 0; j < input[i].length; j++){
        if(j !== 0){
            // trim the leading spaces, replace all non single spaces with a single space, split on single spaces
            let arr = input[i][j].trim().replace(/\s+/g, ' ').split(" ")
            let str = "";
            arr.forEach(val => {
                str += val
            })
            timeDistance.push(Number(str))
        }
    }
}

let time = timeDistance[0]
let recordDistance = timeDistance[1]
// Same function as part 1
function calculateDistances(time, record){
    let winCount = 0
    for(let i = 0; i <= time; i++){
        let speed = i;
        let timeRemaining = time - i
        let totalDistance = speed * timeRemaining
        if(totalDistance > record) winCount++
   }
   return winCount;
}
// Part 2 Answer
console.log(calculateDistances(time, recordDistance))