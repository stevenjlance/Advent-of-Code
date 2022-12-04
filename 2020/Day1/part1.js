const { input } = require('./input');

const vals = []
for(let i = 0; i < input.length; i++){
    let currentVal = input[i];
    for(let j = i; j < input.length; j++){
        let nextVal = input[j]
        if(currentVal + nextVal === 2020){
            vals[0] = currentVal;
            vals[1] = nextVal
        }
    }
}
console.log(vals[0] * vals[1])