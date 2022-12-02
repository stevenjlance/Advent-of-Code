const { input } = require('./input');
let horizontal = 0;
let vertical = 0;
let aim = 0;

input.map(val => {
    let result = val.split(" ")
    if(result[0] == "forward"){
        // Update vertical position
        horizontal += parseInt(result[1])
        // Value of current aim multiplied by the value provided by forward
        let hold = aim * parseInt(result[1])
        // Update vertical position with holder value
        vertical += hold
    }
    if(result[0] == "down"){
        aim += parseInt(result[1])
    }
    if(result[0] == "up"){
        aim -= parseInt(result[1])
    }
})

console.log(`RESULT ${horizontal * vertical}`)
