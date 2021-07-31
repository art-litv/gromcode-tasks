import { makeCounter } from "./index";

it("counter", () => {
	const counter1 = makeCounter();
	expect(counter1()).toEqual(0);
	expect(counter1()).toEqual(1);
	expect(counter1()).toEqual(2);

	const counter2 = makeCounter();
	expect(counter2()).toEqual(0);
	expect(counter2()).toEqual(1);
	expect(counter2()).toEqual(2);
});
