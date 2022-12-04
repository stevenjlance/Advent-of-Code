const { input } = require("./input");

const result = input.reduce((acc, line) => acc + (2 + line.replace(/\\/g, '\\\\').replace(/"/g, '\\"').length - line.length), 0);

console.log(result)