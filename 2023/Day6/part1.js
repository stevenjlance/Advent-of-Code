const { timeDistance } = require('./input');

let totalWins = 1;
for(let i = 0; i < timeDistance[0].length; i++){
    let time = timeDistance[0][i]
    let recordDistance = timeDistance[1][i]
    totalWins *= calculateDistances(time, recordDistance)
}
// Part 1 Answer
console.log(totalWins)

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