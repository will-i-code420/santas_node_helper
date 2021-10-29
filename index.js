const fs = require('fs');

const puzzle1 = './puzzle1.txt';
console.log('running puzzle');

fs.readFile(`${puzzle1}`, (err, data) => {
	if (err) {
		console.log(err);
		throw new Error('Error Occured');
	}
	const directions = data.toString().split('');
	let floor = 0;
	let moveNum = 0;
	directions.some((dir) => {
		if (dir === '(') {
			floor++;
		} else if (dir === ')') {
			floor--;
		}
		moveNum++;
		return floor < 0;
	});
	console.log(moveNum);
});
