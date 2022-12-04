const { input } = require('./input');

let niceCount = 0;

input.forEach(str => {
    let duplicateFlag = false;
    let repeatPlusOneFlag = false;
    for(let i = 0; i < str.length; i++){
        let letter = str[i]; 
        // Check for duplicated letter with one letter in between but not last two letters
        if(i < str.length - 2){
            if(letter === str[i+2]) repeatPlusOneFlag = true;
        }
        // Starting at current position + 2, check for duplicates
        if(i < str.length - 1){
            // Current letter to check
            let currentDouble = str[i] + str[i + 1];
            // Iterate through remaining string
            for(let j = i + 2; j < str.length - 1; j++){
                let holder = str[j] + str[j + 1]
                if(holder === currentDouble) duplicateFlag = true;  
            }
        }
    }
    // Are they nice?
    if(duplicateFlag && repeatPlusOneFlag) niceCount++;
})

console.log(niceCount)