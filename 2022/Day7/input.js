const path = require('path');
const fs = require('fs');

let input = fs
	.readFileSync(path.join(__dirname, 'raw.txt'), 'utf8')
	.toString()
	.trim()
	.split('\n')
	
/*
[{
    name: plws, 
    sub: [
        {name: ffpzc},
        {name: frcmjzts},
        [92461, svjvhflz]
        [218008, wjlmgq]
    ]}, 
    {name: pwlbgbz}, 
    {name: pwtpltr}, 
    {name: szn}]
*/

module.exports = {
	input,
};