const { input } = require("./input");

let validPassword = 0;

input.forEach(value => {
    const minMax = value[0].split("-");
    const position1 = parseInt(minMax[0],10)
    const position2 = parseInt(minMax[1],10)
    const character = value[1];
    const password = value[2]
    if(password[position1 - 1] !== password[position2 - 1] && (password[position1 - 1] === character || password[position2 - 1] === character))
    {
        validPassword++;
    }
})

console.log(validPassword)