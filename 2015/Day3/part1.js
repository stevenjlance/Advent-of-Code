const { input } = require('./input');

let xPosition = 0;
let yPosition = 0;
const coordinates = []

// Get all coordinate points
for(let i = 0; i < input.length; i++){
    if(input[i] === "^"){
        yPosition++;
    }
    if(input[i] === "v"){
        yPosition--;
    }
    if(input[i] === ">"){
        xPosition++
    }
    if(input[i] === "<"){
        xPosition--
    }
    coordinates.push([xPosition, yPosition])
}

// Find unique coordinate points
// Make a set of the coordiante points
const hashedSet = new Set(coordinates.map(pair => pair.toString()))
const d = {};
const out = [];
hashedSet.forEach(val => {
    const item = val;
    // Push if it is not already stored in the object
    if (!d[val]) {
        d[val] = true;
        out.push(item);
    }
})
// Unique number of locations
console.log(out.length)