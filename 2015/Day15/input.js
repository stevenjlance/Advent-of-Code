const path = require('path');
const fs = require('fs');

let input = fs
	.readFileSync(path.join(__dirname, 'raw.txt'), 'utf8')
	.toString()
	.trim()
    .split('\n')
    .map(item => {
        let itemObj = {};
        let str = item.split(" ");
        itemObj.name = str[0].slice(0,-1);
        itemObj.capacity = parseInt(str[2]);
        itemObj.durability = parseInt(str[4]);
        itemObj.flavor = parseInt(str[6]);
        itemObj.texture = parseInt(str[8]);
        itemObj.calories = parseInt(str[10]);
        return itemObj
    })
    
module.exports = {
	input,
};