const { input } = require("./input");

let total = 0;

function nestedLoop(obj) {
    const res = {};
    function recurse(obj, current) {
        for (const key in obj) {
            let value = obj[key];
            if(value != undefined) {
                if (value && typeof value === 'object') {
                    recurse(value, key);
                } else {
                  	// Do your stuff here to var value
                    res[key] = value;
                    if(typeof res[key] === "number"){
                        total += res[key]
                    }
                }
            }
        }
    }
    recurse(obj);
    return res;
}

nestedLoop(input)
console.log(total)