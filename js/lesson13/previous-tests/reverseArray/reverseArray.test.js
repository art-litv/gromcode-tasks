import reverseArray from "./reverseArray";

const TEST_CASES = {
	reverseArray: [
		{ expect: [[1, 2, 3, 4]], toEqual: [4, 3, 2, 1] },
		{ expect: ["Not array"], toEqual: null },
		{ expect: [[-1, 4.6, "value"]], toEqual: ["value", 4.6, -1] },
		{ expect: [[]], toEqual: [] },
	],
};

it("reverseArray", () => {
	for (let testCase of TEST_CASES.reverseArray) {
		const expected = reverseArray(...testCase.expect);
		expect(expected).toEqual(testCase.toEqual);
	}
});
