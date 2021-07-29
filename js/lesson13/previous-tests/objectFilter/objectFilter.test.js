import objectFilter from "./objectFilter";

const TEST_CASES = {
	objectFilter: [
		{
			expect: [{ "John Doe": 19, Tom: 17, Bob: 18 }],
			toEqual: { "John Doe": 19, Bob: 18 },
		},
		{
			expect: [{ Ann: 56, Andrey: 7 }],
			toEqual: { Ann: 56 },
		},
		{
			expect: [{ "John Doe": 17, Tom: 17, Bob: 17 }],
			toEqual: {},
		},
	],
};

it("objectFilter", () => {
	for (let testCase of TEST_CASES.objectFilter) {
		const expected = objectFilter(...testCase.expect);
		expect(expected).toEqual(testCase.toEqual);
	}
});
