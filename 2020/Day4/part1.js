const { input } = require('./input');
let validCount = 0;
input.forEach(passport => {
    if(passport.length === 8) validCount++
    // Check if the only thing missing is cid
    if(passport.length === 7){
        console.log(passport)
        flag = true
        passport.forEach(value => {
            if(value.includes('cid')) flag = false
        })
        if(flag) validCount++
    }
})
// Part 1 Answer
console.log(validCount)