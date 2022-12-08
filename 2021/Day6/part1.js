const { input } = require('./input');

let grid = [];
for(let row = 0; row < 1000; row++){
    let rowArr = []
    for(let col = 0; col < 1000; col++){
        rowArr.push(0)
    }
    grid.push(rowArr)
}

input.forEach(line => {
    // Only  worry about horizontal and vertical lines
    // If the x values are equal, this is a vertical line
    if(line.cord1[0] === line.cord2[0]){
        const y1 = parseInt(line.cord1[1],10);
        const y2 = parseInt(line.cord2[1], 10);
        let starter = Math.min(y1, y2) - 1;
        let ending = Math.max(y1, y2) - 1;
        let row = parseInt(line.cord2[0], 10) - 1
        for(let i = starter; i <= ending; i++){
            let currentVal = grid[row][i]
            let nextVal = currentVal + 1;
            grid[row][i] = nextVal
        }


    }

    // if the y values are equal, this is a horizontal line
    else if(line.cord1[1] === line.cord2[1]){
        const x1 = parseInt(line.cord1[0],10);
        const x2 = parseInt(line.cord2[0], 10);
        let starter = Math.min(x1, x2) - 1;
        let ending = Math.max(x1, x2) - 1;
        let col = parseInt(line.cord2[1], 10) - 1
        for(let i = starter; i <= ending; i++){
            grid[i][col]  = grid[i][col] + 1;
            
        }
    }

    // Diagonal lines
    // else {
    //     const x1 = parseInt(line.cord1[0],10);
    //     const y1 = parseInt(line.cord1[1],10);
    //     const x2 = parseInt(line.cord2[0],10);
    //     const y2 = parseInt(line.cord2[1],10);
    //     const slope = (y2 - y1)/(x2 - x1)
    //     console.log(slope)
    //     // if slope is positive
    //     if(slope === 1){
    //         for(let )
    //     }
    //     // if slope is negative
    //     else {

    //     }
    // }
})

let total = 0;
grid.forEach(inner => {
    inner.forEach(val => {
        if(val > 1) {
            total++
        }
    })
})
console.log(total)

