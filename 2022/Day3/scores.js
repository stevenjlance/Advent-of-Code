let string = ""
let score = 1;
let scoreObject = {}

for ( i = 97; i <= 122 ; i += 1) {    
    string = String.fromCharCode(i);
    scoreObject[string] = score;
    score++
};
for ( i = 65; i <= 90 ; i += 1) {     
    string = String.fromCharCode(i);
    scoreObject[string] = score;
    score++
};

module.exports = {
	scoreObject,
};