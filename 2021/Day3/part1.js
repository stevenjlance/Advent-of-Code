const { input } = require('./input');

let counter = [
    [0, 0],
    [0,0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
]

input.map(val => {
    for(let i = 0; i < val.length; i++){
        if(val[i] === "0") {
            counter[i][0] += 1;
        }
        else {
            counter[i][1] += 1;
        }
    }
})

let gamma = ''
let epsilon = ''
for(let i = 0; i < counter.length; i++){
    if(counter[i][0] > counter[i][1]){
        gamma += "0"
        epsilon += "1"
    }
    else {
        gamma += "1"
        epsilon += "0"
    }
}

let result = parseInt(gamma, 2) * parseInt(epsilon, 2)
console.log(result)

module.exports = {
    gamma, epsilon
}