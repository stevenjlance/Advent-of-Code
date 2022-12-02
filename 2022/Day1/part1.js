const {input} = require('./input');

// Part 1
const sum = (a, b) => Number(a) + Number(b)
let calories = input.map((elf) => elf.reduce(sum));
let part1Answer = Math.max(...calories);
console.log(part1Answer)

// Part 2
calories = calories.map(cal => parseInt(cal, 10))
calories.sort((a, b) => b - a);
const part2Answer = calories[0] + calories[1] + calories[2]
console.log(part2Answer)