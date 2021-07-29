it("17 equals 17", () => {
	expect(17).toEqual(17);
});

it("18 not equals 17", () => {
	expect(18).not.toEqual(17);
});

it("getEvenNumbers", () => {
	const evenNums = getEvenNumbers([1, 2, 3, 4]);
	expect(evenNums).toEqual([2, 4]);
});

function getEvenNumbers(nums) {
	return nums.filter((num) => num % 2 === 0);
}
