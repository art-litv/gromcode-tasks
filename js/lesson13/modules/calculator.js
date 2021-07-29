export function getSquaredArray(array) {
	return array.map((el) => el ** 2);
}

export function getOddNumbers(array) {
	return array.filter((num) => num % 2 !== 0);
}

export default (a, b) => a + b;
