const { input } = require('./input');


const santaCords = [[0,0]]
let santaX = 0;
let santaY = 0;
const roboSantaCords = [[0,0]]
let roboX = 0;
let roboY = 0; 

for(let i = 0; i < input.length; i++){
    // Santa moves on even turns
    if(i % 2 === 0){
        if(input[i] === "^"){
            santaY++;
        }
        if(input[i] === "v"){
            santaY--;
        }
        if(input[i] === ">"){
            santaX++
        }
        if(input[i] === "<"){
            santaX--
        }
        santaCords.push([santaX, santaY])
    }

    // Robo santa moves on odd turns
    if(i % 2 === 1){
        if(input[i] === "^"){
            roboY++;
        }
        if(input[i] === "v"){
            roboY--;
        }
        if(input[i] === ">"){
            roboX++
        }
        if(input[i] === "<"){
            roboX--
        }
        roboSantaCords.push([roboX, roboY])
    }
}

// Find unique coordinate points
// Make a set of the coordiante points
const hashedSanta = new Set(santaCords.map(pair => pair.toString()))
const d = {};
const santaOut = [];
hashedSanta.forEach(val => {
    var item = val;
    // Push if it is not already stored in the object
    if (!d[val]) {
        d[val] = true;
        santaOut.push(item);
    }
})

const hashedRobo = new Set(roboSantaCords.map(pair => pair.toString()))
var e = {};
var roboOut = [];
hashedRobo.forEach(val => {
    const item = val;
    // Push if it is not already stored in the object
    if (!e[val]) {
        e[val] = true;
        roboOut.push(item);
    }
})
// Merge the two arrays together
const merge = santaOut.concat(roboOut)
// Remove duplicates
let uniqueHomes = [...new Set(merge)];
// Answer
console.log(uniqueHomes.length);