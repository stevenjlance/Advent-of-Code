let input = "hxbxwxba"

let found = false;

let password = input;

while(!found){
    // increment last letter
    password = updatePassword(password);

    // get charCodes for each letter
    let charObject = charCodes(password);

    // check for three letters in a row
    let straightCheck = checkForStraight(charObject)

    // check for i, o, l
    let iOL = checkForLetters(charObject)

    // check for duplicates
    let doubleCheck = checkDouble(charObject)

    // console.log(straightCheck, iOL, doubleCheck)


    if(straightCheck && iOL && doubleCheck) {
        found = true;
    }

}
console.log(password)
function updatePassword(str){
    let charObj = charCodes(password)
    let aCount = "";
    for(let i = str.length - 1; i >= 0; i--){
        if(charObj[i] < 121){
            let newLetter = String.fromCharCode(charObj[i] + 1);
            str = str.slice(0, i - 8);
            str = str + newLetter + aCount;
            return str;
        }
        aCount += "a";
    }
    
}

function charCodes(str){
    let charCodes = {};
    for(let i = 0; i < str.length; i++){
        const charCode = str[i].charCodeAt(0);
        charCodes[i] = charCode;
    }
    return charCodes
}

function checkForLetters(obj) {
    for(let key in obj){
        if(obj[key] === 105 || obj[key] === 111 || obj[key] === 108){
            return false;
        }
    }
    return true;
}

function checkForStraight(obj){
    let values = Object.values(obj);
    for(let i = 0; i < values.length - 2; i++){
        if(values[i] === values[i + 1] - 1 && values[i] === values[i + 2] - 2){
            return true;
        }
    }
    return false;
}

function checkDouble(obj){
    let values = Object.values(obj);
    let doubleCount = 0
    for(let i = 0; i < values.length - 1; i++){
        if(values[i] === values[i + 1]){
            doubleCount++;
            i++
            
        }
    }
    if(doubleCount >= 2){
        return true;
    }
    return false;
}