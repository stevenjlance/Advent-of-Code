const { input } = require('./input');

let totalFuel = 0;

input.forEach(num => {
    // Fuel required to launch a given module is based on its mass. Specifically, to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.
    let fuel = Math.floor(num / 3) - 2
    totalFuel += fuel
})

// Part 1 answer
console.log(totalFuel)