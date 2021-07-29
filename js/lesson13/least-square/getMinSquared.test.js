import getMinSquared from "./getMinSquared";

it("getMinSquared", () => {
	expect(getMinSquared([])).toEqual(null);
	expect(getMinSquared("string")).toEqual(null);
	expect(getMinSquared([2, -2, 5, -5])).toEqual(4);
});
