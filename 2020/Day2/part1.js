const { input } = require("./input");

let validPassword = 0;

input.forEach(value => {
    const minMax = value[0].split("-");
    const min = parseInt(minMax[0],10)
    const max = parseInt(minMax[1],10)
    const character = value[1];
    const password = value[2]
    let count = 0;
    for(let i = 0; i < password.length; i++){
        if(password[i] === character) count++;
    }
    if(count >= min && count <= max) validPassword++;
})

console.log(validPassword)