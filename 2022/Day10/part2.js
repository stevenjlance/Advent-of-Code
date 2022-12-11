const { input } = require("./input")

let sprite = [0, 1, 2]; // [back, middle, front]

let cycle = 1;
let row = ""
let col  = 0; // col 1
let crt = [];

input.forEach(val => {
    let [command, amount] = val.split(" ");
    amount = parseInt(amount,10);

    if(command === "noop"){
        if(col === sprite[0] || col === sprite[1] || col === sprite[2]){
            row += "#";
        }
        else  {
            row += "."
        }
        cycle++;
        col++
    }
    else {
        // Cycle 1
        if(col === sprite[0] || col === sprite[1] || col === sprite[2]){
            row += "#";
        }
        else {
            row += "."
        }
        cycle++;
        col++
        if(col % 40 === 0){
            crt.push(row);
            row = "";
            col = 0;
        }
        // Cycle 2
        if(col === sprite[0] || col === sprite[1] || col === sprite[2]){
            row += "#";
        }
        else {
            row += "."
        }
        cycle++;
        col++
        sprite[0] = sprite[0] + amount
        sprite[1] = sprite[1] + amount
        sprite[2] = sprite[2] + amount
    }
    if(col % 40 === 0){
        crt.push(row);
        row = "";
        col = 0;
    }
})
// Draw image
for(let i  = 0; i < crt.length; i++){
    let row = "";
    for(let j = 0; j < crt[i].length; j++){
        row += crt[i][j]
    }
    console.log(row);
}