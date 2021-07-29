import getSum, { getSquaredArray, getOddNumbers } from "./calculator";

const TEST_DATA = {
	getSquaredArray: [
		{ tested: [[1, 2, 3, 4]], expected: [1, 4, 9, 16] },
		{ tested: [[5, 9, 1, 5]], expected: [25, 81, 1, 25] },
	],

	getOddNumbers: [
		{ tested: [[1, 2, 3, 4]], expected: [1, 3] },
		{ tested: [[5, 9, 1, 5]], expected: [5, 9, 1, 5] },
	],

	getSum: [
		{ tested: [1, 2], expected: 3 },
		{ tested: [5, 10], expected: 15 },
	],
};

it("getSquaredArray", () => {
	for (let test of TEST_DATA.getSquaredArray) {
		const result = getSquaredArray(...test.tested);
		expect(result).toEqual(test.expected);
	}
});

it("getOddNumbers", () => {
	for (let test of TEST_DATA.getOddNumbers) {
		const result = getOddNumbers(...test.tested);
		expect(result).toEqual(test.expected);
	}
});

it("getSum", () => {
	for (let test of TEST_DATA.getSum) {
		const result = getSum(...test.tested);
		expect(result).toEqual(test.expected);
	}
});
