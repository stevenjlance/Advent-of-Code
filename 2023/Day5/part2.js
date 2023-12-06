const { map } = require('./input');
const { seedCalculator } = require('./part1');

let seeds = map['seeds'][0].split(" ").map(val => Number(val))

let updatedSeeds = []
for(let i = 0; i < seeds.length; i+=2){
    let min = seeds[i]
    let max = seeds[i] + seeds[i + 1] -1
    updatedSeeds.push([min, max])
}
console.log(updatedSeeds)

function batchProcessing(grid, seedsArr){
    for(let i = 0; i < seedsArr.length; i++){
        let min = seedsArr[i][0]
        let max = seedsArr[i][1]
        console.log(min, max)
        for(let j = 0; j < grid.length; j++){
            if(max < grid[i][1] || min > grid[i][1] + grid[i][2] - 1) {
                continue
            }
            else {
                console.log(min, max, grid[i])
                // let offset = seed - grid[i][1];
     
                // return grid[i][0] + offset
            }
        }
    }
    // return seed
}

let soil = batchProcessing(map['seed-to-soil map'], updatedSeeds)