const { input } = require('./input');
const data = input[0]

let char1 = data[0];
let char2 = data[1];
let char3 = data[2];
let char4 = data[3];
let char5 = data[4];
let char6 = data[5];
let char7 = data[6];
let char8 = data[7];
let char9 = data[8];
let char10 = data[9];
let char11 = data[10];
let char12 = data[11];
let char13 = data[12];
let char14 = ""

for(let i = 13; i < data.length; i++){
    let found = false;
    char14 = data[i]
    const string = char1 + char2 + char3 + char4 +char5 + char6 + char7 + char8 + char9 + char10 + char11 + char12 + char13 + char14
    for(let j = 0; j < string.length; j++){
        const stringChar = string[j]
        // iterate through remainder of string
        for(let inner = j + 1; inner < string.length; inner++){
            if(stringChar === string[inner]){
                found = true;
                break
            }
        }
        if(found){
            break;
        }
    }
    if(found){
        char1 = char2
        char2 = char3
        char3 = char4
        char4 = char5
        char5 = char6
        char6 = char7
        char7 = char8
        char8 = char9
        char9 = char10
        char10 = char11
        char11 = char12
        char12 = char13
        char13 = char14
    }
    else {
        console.log(i + 1)
        break
    }
    
}