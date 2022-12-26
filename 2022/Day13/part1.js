const {data} = require("./input");

let indexCount = 0;

function checkOrder(left, right, result) {
    const leftIsNumber = typeof left === "number";
    const rightIsNumber = typeof right === "number";
    if(leftIsNumber && rightIsNumber){
        if(left < right){
            result.rightOrder = true;
            return;
        }
        if(left > right){
            result.rightOrder = false;
            return;
        }
    }
    else if(!leftIsNumber && !rightIsNumber){
        let index = 0;
        // loop
        while(true){
            if(index > left.length - 1 && index <= right.length - 1){
                // left runs out of items
                result.rightOrder = true;
                return;
            }
            else if(index <= left.length - 1 && index > right.length - 1) {
                // right runs out of items
                result.rightOrder = false;
                return;
            }
            else if(index > left.length - 1 && index > right.length - 1){
                // Both lists run out of items. No decision
                return;
            }
            checkOrder(left[index], right[index], result)
            // Stop the loop if we don't have undefined
            if(typeof result.rightOrder !== "undefined"){
                return;
            }
            index++;
        }
        
    }
    else {
        // Transform left into an array
        if(leftIsNumber){
            checkOrder([left], right, result)
        }
        // Transform right into an array
        else {
            checkOrder(left, [right], result)
        }
    }
}

function part1() {
    let indexCount = 0;
    // checkOrder(data[3].left, data[3].right, result)
    data.map(({left, right}, index) => {
        let result = {}; //undefined until set
        checkOrder(left, right, result)
        if(result.rightOrder){
            indexCount += index + 1;
        }
    })
    console.log(`Part 1 Answer: ${indexCount}`)
}

part1();

module.exports = {
    checkOrder
}