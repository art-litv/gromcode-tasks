import { sum, mult } from "../calculator";

it("should 2 + 2 equal 4", () => expect(sum(2, 2)).toEqual(4));
it("should 2 - 4 equal -2", () => expect(sum(2, -4)).toEqual(-2));
it("should 2 * 2 equal 4", () => expect(mult(2, 2)).toEqual(4));
it("should 10 * -(1/2) equal -5", () => expect(mult(10, -1 / 2)).toEqual(-5));
