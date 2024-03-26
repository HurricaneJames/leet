import divide from "../divideTwoIntegers";

describe("divideTwoIntegers", () => {
  [
    { dividend: 2, divisor: 2, expected: 1 },
    { dividend: 10, divisor: 3, expected: 3 },
    { dividend: 7, divisor: -3, expected: -2 },
    { dividend: 0, divisor: 1, expected: 0 },
    { dividend: 1, divisor: 1, expected: 1 },
    { dividend: -2147483648, divisor: -1, expected: 2147483647 },
    { dividend: -2147483648, divisor: 1, expected: -2147483648 },
    { dividend: 2147483647, divisor: 1, expected: 2147483647 },
    { dividend: 2147483647, divisor: 2, expected: 1073741823 },
    { dividend: 2147483647, divisor: 3, expected: 715827882 },
  ].forEach(({ dividend, divisor, expected }) => {
    it(`divide(${dividend} // ${divisor}) should return ${expected}`, () => {
      expect(divide(dividend, divisor)).toEqual(expected);
    });
  });
});
