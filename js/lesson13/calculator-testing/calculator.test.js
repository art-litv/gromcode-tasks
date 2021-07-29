import { calc } from "./calculator";

it("calc", () => {
	expect(calc("1 + 2")).toEqual("1 + 2 = 3");
	expect(calc("2 - 1")).toEqual("2 - 1 = 1");
	expect(calc("2 * 5")).toEqual("2 * 5 = 10");
	expect(calc("5 / 2")).toEqual("5 / 2 = 2.5");
});
