import withdraw from "./withdraw";

const TEST_CASES = {
	withdraw: [
		{
			expect: [["Ann", "John", "User"], [1400, 87, -6], "John", 50],
			toEqual: 37,
		},
		{
			expect: [["Ann", "John", "User"], [1400, 87, -6], "User", 10],
			toEqual: -1,
		},
		{
			expect: [["Ann", "John", "User"], [1400, 87, -6], "Ann", 400],
			toEqual: 1000,
		},
	],
};

it("reverseArray", () => {
	for (let testCase of TEST_CASES.withdraw) {
		const expected = withdraw(...testCase.expect);
		expect(expected).toEqual(testCase.toEqual);
	}
});
