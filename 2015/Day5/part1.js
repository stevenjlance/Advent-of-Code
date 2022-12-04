const { input } = require('./input');

let niceCount = 0;

input.forEach(str => {
    let vowelCount = 0;
    let doubleCount = 0;
    let naughtyFlag = false
    for(let i = 0; i < str.length; i++){
        let val = str[i].toLowerCase()
        if(val === "a" || val === "e" || val == "i" || val === "o" || val === "u") vowelCount++;
        // Check double count except for last letter
        if(i < str.length -1){
            if(val === str[i+1].toLowerCase()) {
                doubleCount++
            }
            let naughtyString = val + str[i+1].toLowerCase();
            if(naughtyString === "ab" || naughtyString === "cd" || naughtyString === "pq" || naughtyString === "xy") {
                naughtyFlag = true
            }
        }
    }
    if(!naughtyFlag && vowelCount >= 3 && doubleCount >= 1){
        niceCount++
    }
})

console.log(niceCount)