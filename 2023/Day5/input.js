const path = require('path');
const fs = require('fs');

let input = fs
	.readFileSync(path.join(__dirname, 'raw.txt'), 'utf8')
	.toString()
	.trim()
	.split('\n\n')

// build object
let map = {}
input.forEach(val => {
	let data = val.split(":")
	data[0] = data[0].trim()
	data[1] = data[1].trim().split('\n')
	
	
	if(data[1].length > 1){
		let arr = []
		data[1].forEach(val => {
			nums = val.split(" ")
			nums.forEach((num, index) => {
				nums[index] = Number(num)
			})
			arr.push(nums)
		})
		data[1] = arr
	}
	map[data[0]] = data[1]
})

module.exports = {
	map,
};