import isPalindrome from "../palindromeNumber";

describe("palindromeNumber", () => {
  [
    { x: 121, expected: true },
    { x: -121, expected: false },
    { x: 10, expected: false },
    { x: 123454321, expected: true },
    { x: 1234554321, expected: true },
    { x: 123242321, expected: true },
    { x: 12345432, expected: false },
  ].forEach(({ x, expected }) => {
    it(`${x} => ${expected}`, () => {
      expect(isPalindrome(x)).toBe(expected);
    });
  });
});
