const { input } = require("./input");
// Start in the middle so you don't go off the grid.
let Hx = 500;
let Hy = 500;
let tails = {
    one: [500, 500],
    two: [500, 500],
    three: [500, 500],
    four: [500, 500],
    five: [500, 500],
    six: [500, 500],
    seven: [500, 500],
    eight: [500, 500],
    nine: [500, 500],
}

let grid = [];
// Make 1000 x 1000 grid to hold counts
for(let i = 0; i < 1000; i++){
    let row = [];
    for(let j = 0; j < 1000; j++) {
        row.push(0)
    }
    grid.push(row)
}

input.forEach(val => {
    const direction = val[0];
    const amount = parseInt(val[1], 10);
    if(direction === "U"){
        for(let i = 0; i < amount; i++){
            Hy++
            if(tails.one[1] + 2 === Hy){
                tails.one[1] = tails.one[1] + 1;
            }
        }
        
    }
    else if(direction === "D"){
        for(let i = 0; i < amount; i++){
            Hy--
            
        }
    }
    else if(direction === "R"){
        Hx++
    }
    else if(direction === "L"){
        Hx--
    }
    console.log(tails.one)
})