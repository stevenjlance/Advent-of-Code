const { map } = require('./input');
let seeds = map['seeds'][0].split(" ").map(val => Number(val))

let locations = []
for(let i = 0; i < seeds.length; i++){
    let soil = seedCalculator(map['seed-to-soil map'], seeds[i])
    let fertilizer = seedCalculator(map['soil-to-fertilizer map'], soil)
    let water = seedCalculator(map['fertilizer-to-water map'], fertilizer)
    let light = seedCalculator(map['water-to-light map'], water)
    let temperature = seedCalculator(map['light-to-temperature map'], light)
    let humidity = seedCalculator(map['temperature-to-humidity map'], temperature)
    let location = seedCalculator(map['humidity-to-location map'], humidity)
    locations.push(location)
}

// Part 1 Answer
console.log(Math.min.apply(Math, locations))

// Function works with test, but breaks with puzzle data due to size of numbers
function seedCalculator(grid, seed){
    for(let i = 0; i < grid.length; i++){
        if(seed < grid[i][1] || seed > grid[i][1] + grid[i][2] - 1) {
            continue
        }
        else {
            let offset = seed - grid[i][1];
 
            return grid[i][0] + offset
        }
    }
    return seed
}
