const { input } = require('./input');

let incremet = 0;
for(let i = 1; i < input.length; i++){
    if(input[i] > input[i-1]){
        incremet++;
    }
}

console.log(incremet)