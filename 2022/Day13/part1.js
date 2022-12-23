const { input } = require("./input");

let indexCount = 0;

input.forEach((val, index) => {
    let adjustedIndex = index + 1;
    let left = val[0];
    let right = val[1];
    let leftBracketCount = (left.match(/\[/g) || []).length;
    let rightBracketCount = (right.match(/\[/g) || []).length;
    // If true they are both integer lists
    if(leftBracketCount === 1 & rightBracketCount === 1){
        // if left side is less than or equal to the right side. If left side is bigger, than it will be out of order automatically.
        if(left.length <= right.length){
            left = left.slice(1,-1);
            right = right.slice(1,-1)
            let flag = true;
            for(let i = 0; i < left.length; i++){
                if(left[i] !== "," && left[i] > right[i]){
                    flag = false // Left side is not smaller than right so it is not in the right order.
                    break;
                }
            }
            if(flag) {
                indexCount += adjustedIndex;
            }
        }
    }
    
    else {
        left = left.slice(1,-1)
        right = right.slice(1,-1)
        for(let i = 0; i < left.length; i++){
            let num = left[i]
            
            console.log(left[i])
        }
        // console.log(left, right)
    }

})

// console.log(indexCount)