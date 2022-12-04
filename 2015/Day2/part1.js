const { input } = require('./input');

let squareFeet = 0;

const calculateArea = (l, w, h) => {
    return 2*parseInt(l,10)*parseInt(w,10) + 2*parseInt(w,10)*parseInt(h) + 2*parseInt(h)*parseInt(l,10);
}

const findMin = (l, w, h) => {
    return Math.min(parseInt(l,10)*parseInt(w,10), parseInt(w,10)*parseInt(h), parseInt(h)*parseInt(l,10))
}

input.forEach(val => {
    squareFeet += calculateArea(val[0], val[1], val[2]);
    squareFeet += findMin(val[0], val[1], val[2]);
})


console.log(squareFeet)

