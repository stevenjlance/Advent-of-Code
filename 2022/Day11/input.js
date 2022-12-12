const path = require('path');
const fs = require('fs');

let input = fs
	.readFileSync(path.join(__dirname, 'raw.txt'), 'utf8')
	.toString()
	.trim()
	.split('\n\n')
    .map(item => item.split('\n'))

// let monkies = {
//     monkey1: {
//        items: [],
//        operation: "",
//        test: 3,
//        true: monkeyNum,
//        false: monkeyNum
//     },
// }
let monkies = {

}
input.forEach(val => {
    let [name, num] = val[0].split(" ")
    num = num.slice(0,-1)
    let [command, items] = val[1].split(": ")
    items = items.split(", ")
    let itemsArr = items.map(val => parseInt(val,10))
    let [remainStr, operation] = val[2].split("=")
    operation = operation.trim()
    let [old, operator, amount] = operation.split(" ")
    let test = val[3].split(" ")[5];
    test = parseInt(test, 10)
    let trueMonkey = val[4].split(" ")[9]
    let falseMonkey = val[5].split(" ")[9]
    monkies[num] = {
        itemsArr,
        operator,
        amount,
        test,
        true: trueMonkey,
        false: falseMonkey,
        inspectionCount: 0,
    }
})

module.exports = {
    monkies
}