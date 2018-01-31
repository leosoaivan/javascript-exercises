function add (a, b) {
	return a + b
}

function subtract (a, b) {
	return a - b 
}

function sum (array) {
	return array.reduce((total, num) => total + num, 0)
}

function multiply (array) {
	return array.reduce((total, num) => total * num)
}

function power(a, b) {
	return a ** b
}

function factorial(a) {
	if (a <= 1) return 1;
	let product = 1;
	while (a > 1) {
		product *= a
		a--
	}
	return product
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}