const { input } = require("./input");

let total = 0;

function nestedLoop(obj) {
    const res = {};
    function recurse(obj, current) {
        for (const key in obj) {
            let value = obj[key];
            if(value === "red"){
                break;
            }
            if(value != undefined) {
                if (value && typeof value === 'object') {
                    let children = Object.values(value);
                    if(children.includes("red") && !Array.isArray(value)) {
                        console.log(value)
                        break
                    };
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