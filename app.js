console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds (count) {
	for (let i = 0; i < count; i++) {
		if (i % 3 === 0) {
			console.log("odd: ", i);
		}
	} 
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge (username, age) {
	let aboveSixteen = `"Congrats ${username}, you can drive!"`;
	let belowSixteen = `"Sorry ${username}, but you need to wait until you're 16."`;
	if (age < 16) {
		console.log(belowSixteen);
	} else if (age > 16) {
		console.log(aboveSixteen);
	} else {
		console.log("Not enough info provided");
	}
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function getPoint (x, y) {
	if (x < 0 & y > 0) {
		console.log(`"(${x}, ${y}) are in quadrant 2"`);
	} else if (x < 0 & y < 0) {
		console.log(`"(${x}, ${y}) are in quadrant 3"`);
	} else if (x > 0 & y > 0) {
		console.log(`"(${x}, ${y}) are in quadrant 1"`);
	}  else if (x > 0 & y < 0) {
		console.log(`"(${x}, ${y}) are in quadrant 4"`);
	} else if (x === 0) {
		console.log(`"(${x}, ${y}) is on the x axis"`);
	} else if (y === 0) {
		console.log(`"(${x}, ${y}) is on the y axis"`);
	} else if (x === 0 && y === 0) {
		console.log(`"(${x}, ${y}) is on the x & y axis"`);
	} else {
		console.log("point not recognized");
	}
}

function checkTriangle (a, b, c) {
	if (a === b === c) {
		console.log(`"Sides ${a}, ${b}, ${c} make an equilateral triangle"`);
	} else if (a === b && ((a + b) > c)) {
		console.log(`"Sides ${a}, ${b}, ${c} make an isoceles triangle"`);
	} else if ((a + b) <= c) {
		console.log(`"Sides ${a}, ${b}, ${c} make an invalid triangle"`);
	} else {
		console.log("parameters are not valid");
	}
}