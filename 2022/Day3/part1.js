const { input } = require('./input')
const { scoreObject } = require("./scores")

// Split string into an array that contains each half.
const half = str => {
    let middle = Math.floor(str.length / 2)
    return [str.substr(0, middle), str.substr(middle, str.length)]
}

// Split strings
const splitRuckSack = input.map(item => {
    return half(item)
})

const foundLetters = []

splitRuckSack.forEach(word => {
    // iterate through first string
    let flag = true
    for(let i = 0; i < word[0].length; i++){
        // iterate through inner string only if we haven't found the letter yet
        for(let j = 0; j < word[1].length; j++){
            if(word[0][i] === word[1][j] && flag){
                foundLetters.push(word[0][i])
                flag = false;
            }
        }
    }
    flag = true;
})

let score = 0;
foundLetters.forEach(letter => {
    let letterScore = scoreObject[letter]
    score += letterScore
})

console.log(score)