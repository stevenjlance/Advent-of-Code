const { input } = require("./input");

let floor = 0;
for(let i = 0; i < input.length; i++){
    if(input[i] === "(") floor++
    if(input[i] === ")") floor--
}

console.log(floor)