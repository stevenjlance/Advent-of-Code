const { input } = require('./input');
const data = input[0]

let char1 = data[0];
let char2 = data[1];
let char3 = data[2];
let char4 = ""
for(let i = 3; i < data.length; i++){
    char4 = data[i]
    if(char1 === char2 || char1 === char3 || char1 === char4 || char2 === char3 || char2 === char4 || char3 === char4){
        // reassign values if true
        char1 = char2
        char2 = char3
        char3 = char4
    }
    else {
        console.log(char1 + char2 + char3 + char4)
        console.log(i + 1)
        break
    }
}