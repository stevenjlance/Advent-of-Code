const { input } = require("./input");

let total = 0;

function nestedLoop(obj) {
    const res = {};
    function recurse(obj, current) {
        for (const key in obj) {
            let value = obj[key];
            if(value != undefined) {
                if (value && typeof value === 'object') {
                    let flag = true;
                    if(!Array.isArray(value)){
                        for(let key in value){
                            if(value[key] === "red") flag = false;
                        }
                    }
                    if(flag) recurse(value, key);
                } else {
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