const { input } = require('./input');

let totalRibbon = 0;

input.forEach(val => {
    const numberArray = [parseInt(val[0], 10), parseInt(val[1], 10), parseInt(val[2], 10)]
    numberArray.sort(function(a, b){return a-b});
    const smallest = numberArray[0];
    const secondSmallest = numberArray[1];
    totalRibbon += smallest + smallest + secondSmallest + secondSmallest;
    totalRibbon += numberArray[0] * numberArray[1] * numberArray[2]
})

console.log(totalRibbon)