const { input } = require('./input')

treeGrid = [];
for(let i = 0; i < input.length; i++){
    let row = []
    for(let j = 0; j < input[i].length; j++){
        row.push(false);
    }
    treeGrid.push(row)
}

// left view
let leftMaxTree = -1;
for(let i = 0; i < input.length; i++){
    for(let j = 0; j < input[i].length; j++){
        let val = parseInt(input[i][j], 10)
        if(val > leftMaxTree){
            leftMaxTree = val;
            treeGrid[i][j] = true
        }
    }
    // Reset the max tree when a new row starts
    leftMaxTree = -1;
}
// Right view
let rightMaxTree = -1;
let count  = 0;
for(let i = 0; i < input.length; i++){
    for(let j = input[i].length - 1; j >= 0; j--){
        let val = parseInt(input[i][j], 10)
        if(val > rightMaxTree){
            rightMaxTree = val;
            treeGrid[i][j] = true
        }
    }
    rightMaxTree = -1;
}
// Go down the column (Top view)
let topMaxTree = -1;
for(let i = 0; i < input[0].length; i++){
    for(let j = 0; j < input.length; j++){
        let val = parseInt(input[j][i], 10);
        if(val > topMaxTree){
            topMaxTree = val;
            treeGrid[j][i] = true
        }
    }
    topMaxTree = -1;
}

// Go up the column (bottom view)
let bottomMaxTree = -1;
for(let i = input[input.length - 1].length - 1; i >= 0; i--){
    for(let j = input.length - 1 ; j >= 0; j--){
        let val = parseInt(input[j][i], 10);
        if(val > bottomMaxTree){
            bottomMaxTree = val;
            treeGrid[j][i] = true
        }
        count++
    }
    bottomMaxTree = -1;
}

let total = 0;
for(let i = 0; i < treeGrid.length; i++){
    for(let j = 0; j < treeGrid[i].length; j++){
        if(treeGrid[i][j]) total++;
    }
}
console.log(total)