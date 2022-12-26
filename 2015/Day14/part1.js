const { input } = require('./input');

const commands = input.map((val, index) => {
    const deer = {}
    deer.name = val.split(' ')[0]
    deer.speed = parseInt(val.split(' ')[3])
    deer.restTime = parseInt(val.split(' ')[6])
    deer.rest = parseInt(val.split(' ')[13])
    deer.distance = 0
    deer.timeLeft = deer.restTime;
    deer.stop = false;
    deer.points = 0;
    return deer
})

let time = 1;
// 2504
while(time < 2504){
    commands.forEach(val => {
        if(!val.stop){
            val.distance = val.distance + val.speed
            val.timeLeft = val.timeLeft - 1;
            // make deer rest
            if(val.timeLeft === 0){
                val.stop = true;
                val.resume = time + val.rest;
            }
            
        }

        if(val.resume === time){
            val.stop = false;
            val.timeLeft = val.restTime   
        }
        
    })
    // Check for leader distance
    let furthest = 0;
    commands.forEach(val => {
        if(val.distance > furthest){
            furthest = val.distance;
        }
    })
    // award points
    commands.forEach(val => {
        if(val.distance === furthest){
            val.points = val.points + 1;
        }
    })
    time++
}

let winner = 0;
let winnerName = ""
commands.forEach(val => {
    if(val.distance > winner){
        winner = val.distance
        winnerName = val.name
    }
})

console.log(`Part 1 Winner: ${winner}, ${winnerName}`)

let part2Winner = 0;
let part2WinnerName = ""
commands.forEach(val => {
    if(val.points > part2Winner){
        part2Winner = val.points
        part2WinnerName = val.name
    }
})
console.log(`Part 2 Winner: ${part2Winner}, ${part2WinnerName}`)
