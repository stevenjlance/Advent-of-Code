const { input } = require('./input');

function makeGrid(x, y){
    const grid = [];
    
    for(i=1; i<=y; i++){
      const row = [];
      for(j=1; j<=x; j++){
      row.push(0)
    }
    grid.push(row)
    }
    return grid;
}
  
const grid = makeGrid(1000,1000);

input.forEach(val => {
    let command = val[0]
    let initial = val[1].split(",")
    let final = val[2].split(",")
    let range = [initial, final]
    const startingX = parseInt(initial[0])
    const startingY = parseInt(initial[1])
    const endingX = parseInt(final[0]);
    const endingY = parseInt(final[1]);
    if(command === "turn on"){
        for(let row = startingX; row <= endingX; row++){
            for(let col = startingY; col <= endingY; col++){
                grid[row][col]++;
            }
        }
    }
    if(command === "turn off"){
        for(let row = startingX; row <= endingX; row++){
            for(let col = startingY; col <= endingY; col++){
                if(grid[row][col] > 0){
                    grid[row][col]--
                }
            }
        }
    }
    if(command === "toggle"){
        for(let row = startingX; row <= endingX; row++){
            for(let col = startingY; col <= endingY; col++){
                grid[row][col] += 2
            }
        }
    }
})

let brightness = 0;
for(let row = 0; row < grid.length; row++){
    for(let col = 0; col < grid[row].length; col++){
        brightness += grid[row][col]
    }
}

console.log(brightness)