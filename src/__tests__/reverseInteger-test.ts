import reverseInteger, {reverseWithStrings} from "../reverseInteger";

describe("reverseInteger", () => {
  [
    { x: 123, expected: 321 },
    { x: -123, expected: -321 },
    { x: 120, expected: 21 },
    { x: 2147483647, expected: 0 },
    { x: 2147483646, expected: 0 },
    { x: -2147483648, expected: 0 },
    { x: 2147483641, expected: 1463847412 },
    { x: -2147483641, expected: -1463847412 },
  ].forEach(({ x, expected }) => {
    it(`${x} => ${expected}`, () => {
      expect(reverseInteger(x)).toBe(expected);
    });
    it(`reverseWithString: ${x} => ${expected}`, () => {
      expect(reverseWithStrings(x)).toBe(expected);
    });
  });
});
