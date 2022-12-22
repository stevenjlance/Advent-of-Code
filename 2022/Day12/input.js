const path = require('path');
const fs = require('fs');

let lines = fs
	.readFileSync(path.join(__dirname, 'raw.txt'), 'utf8')
	.toString()
	.trim()
	.split('\n')

function getInput() {
    const res = {
        start: {},
        end: {},
    }
    res.map = lines.map((line, y) => 
        [...line].map((value, x) => {
            if(value === "S"){
                res.start = {
                    y,
                    x,
                }
                return 0;
            }
            if(value === "E"){
                res.end = {y, x};
                return 25;
            }
            return value.charCodeAt(0) - 'a'.charCodeAt(0);
    }))
    return res
}

let input = getInput()

module.exports = {
    input
}