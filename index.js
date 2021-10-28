const fs = require('fs');

const puzzle1 = './puzzle1.txt';
console.log(puzzle1);

fs.readFile(`${puzzle1}`, (err, data) => {
	if (err) {
		console.log(err);
		throw new Error('Error Occured');
	}
	const directions = data.toString().split('');
	let floor = 0;
	directions.forEach((dir) => {
		switch (dir) {
			case '(':
				floor++;
				break;
			case ')':
				floor--;
				break;
			default:
				return;
				break;
		}
	});
	console.log(floor);
});
