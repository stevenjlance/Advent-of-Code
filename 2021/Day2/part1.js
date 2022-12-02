const { input } = require('./input');
let horizontal = 0;
let vertical = 0;

input.map(val => {
    let result = val.split(" ")
    if(result[0] == "forward"){
        horizontal += parseInt(result[1])
    }
    if(result[0] == "down"){
        vertical += parseInt(result[1])
    }
    if(result[0] == "up"){
        vertical -= parseInt(result[1])
    }
})

console.log(`RESULT ${horizontal * vertical}`)

