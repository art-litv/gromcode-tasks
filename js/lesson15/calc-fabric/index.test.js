import { createCalculator } from "./index";

it("calc fabric", () => {
	const calc = createCalculator();

	calc.add(5);
	expect(calc.getMemo()).toEqual(5);
	calc.decrease(4);
	expect(calc.getMemo()).toEqual(1);
	calc.reset();
	expect(calc.getMemo()).toEqual(0);
});
