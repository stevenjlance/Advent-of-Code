const { input } = require("./input");

let Hx = 500;
let Hy = 500;
let Tx = 500;
let Ty = 500;

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
            // Update the Y position
            Hy++
            // Where to move tail
            // They are on top of one another and two away. Tail moves up one
            if(Hx === Tx && Hy === Ty + 2){
                Ty++
            }
            // If they are diagonal and two away. Tail moves to be the same x as the head and up one
            if(Hy === Ty + 2 && Hx === Tx - 1){
                Tx = Hx
                Ty++
            }
            // Other diagonal
            if(Hy === Ty + 2 && Hx === Tx + 1){
                Tx = Hx
                Ty++
            }
            grid[Tx][Ty] = grid[Tx][Ty] + 1;
        }
    }
    else if(direction === "D"){
        for(let i = 0; i < amount; i++){
            Hy--
            // Where to move tail
            // They are on top of one another and two away. Tail moves up one
            if(Hx === Tx && Hy === Ty - 2) Ty--;
            if(Hy === Ty - 2 && Hx === Tx - 1){
                Tx = Hx
                Ty--
            }
            // Other diagonal
            if(Hy === Ty - 2 && Hx === Tx + 1){
                Tx = Hx
                Ty--
            }
            grid[Tx][Ty] = grid[Tx][Ty] + 1;
        }
    }
    else if(direction === "R"){
        for(let i = 0; i < amount; i++){
            Hx++
            if(Hy === Ty && Tx + 2 == Hx) Ty++;
            if(Hy === Ty + 1 && Hx === Tx + 2){
                Ty = Hy;
                Tx++
            }
            if(Hy === Ty - 1 && Hx === Tx + 2){
                Ty = Hy;
                Tx++;
            }
            grid[Tx][Ty] = grid[Tx][Ty] + 1;
        }
    }
    else if(direction === "L"){
        for(let i = 0; i < amount; i++){
            Hx--
            if(Ty === Hy && Tx - 2 === Hx) Tx--;
            if(Ty + 1 === Hy && Tx - 2 === Hx){
                Ty = Hy;
                Tx--;
            }
            if(Ty - 1 === Hy && Tx - 2 === Hx){
                Ty = Hy;
                Tx--;
            }
            grid[Tx][Ty] = grid[Tx][Ty] + 1;
        }
    }
})
let counter = 0
grid.forEach(row => {
    row.forEach(val =>{
        if(val > 0){
            counter++
        }
    })
})

console.log(grid)