const MD5 = require('blueimp-md5')
const secretKey = "iwrupvqb";

let lowestFiveNum = 0;
let lowestSixNum = 0;
let hexCode = 0;

for (var i=0; i<99999999; i++) {

	//Converts puzzle input plus i integer to hexcode
	hexCode = MD5(secretKey + i.toString());

	//Test for five leading 0s in hexCode
	if (lowestFiveNum == 0 && /^00000/.test(hexCode)) {
		//Set the lowestFiveNum to current i integer
		lowestFiveNum = i;
	}
	//Test for six leading 0s in hexCode
	if (lowestSixNum == 0 && /^000000/.test(hexCode)) {
		//Set the lowestSixNum to current i integer
		lowestSixNum = i;
	}

	//If both numbers have been found break the loop
	if (lowestFiveNum > 0 && lowestSixNum > 0) {
		break;
	}
}
// Part 1
console.log('Lowest Number containing five 0s: ' + lowestFiveNum);
// Part 2
console.log('Lowest Number containing six 0s: ' + lowestSixNum);
