const { input } = require('./input');

// Make an array of objects for the passports
let passports = []
for(let i = 0; i < input.length; i++){
    passports.push({})
    for(let j = 0; j < input[i].length; j++){
        let str = input[i][j].split(':')
        passports[i][str[0]] = str[1]
        // console.log(str)
    }
}

let validCount = 0;
passports.forEach(passport => {
    let keys = Object.keys(passport)
    
    // If it doesn't have 8 keys or 7 keys with only cid missing, then the rest of the checks are not needed
    if(keys.length === 8 || (keys.length === 7 && !keys.includes("cid"))) {
        let valid = true;
        // Check everything except cid
        // byr (Birth Year) - four digits; at least 1920 and at most 2002.
        if(passport.byr.length > 4 || Number(passport.byr) <= 1920 ||  Number(passport.byr) >= 2022) valid = false;
        // iyr (Issue Year) - four digits; at least 2010 and at most 2020.
        if(passport.iyr.length > 4 || Number(passport.iyr) < 2010 || Number(passport.iyr) > 2020) valid = false;
        // eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
        if(passport.eyr.length > 4 || Number(passport.eyr) < 2020 || Number(passport.eyr) > 2030) valid = false;
        // hgt (Height) - a number followed by either cm or in:
            // If cm, the number must be at least 150 and at most 193.
            // If in, the number must be at least 59 and at most 76.
        let measurement = passport.hgt.substring(passport.hgt.length - 2)
        if(measurement === "cm" && (passport.hgt.substring(0, 3) < 150 || passport.hgt.substring(0, 3) > 193)) valid = false;
        if(measurement === "in" && (passport.hgt.substring(0, 3) < 59 || passport.hgt.substring(0, 3) > 76)) valid = false;
        // hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
        if(passport.hcl[0] !== "#") valid = false;
        if(/[g-z]/i.test(passport.hcl.substring(1))) valid = false
        // ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
        let allowedEyes = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"]
        if(!allowedEyes.includes(passport.ecl)) valid = false

        // pid (Passport ID) - a nine-digit number, including leading zeroes.
        if(passport.pid.length !== 9 || /[a-z]/i.test(passport.pid)) valid = false
        // If valid, update the count
        if(valid) validCount++;
    }
})

// Part 2 answer
console.log(validCount)