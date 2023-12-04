const { input } = require('./input');

let totalFuel = 0;

input.forEach(num => {
    let total = calculateFuel(num)
    totalFuel += total
})

// Part 2 Answer
console.log(totalFuel)

function calculateFuel(num) {
    let newValue = Math.floor(num / 3) - 2
    if(newValue <= 0) return 0;
    return newValue + calculateFuel(newValue)
}