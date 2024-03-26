import romanToInt from "../romanToInteger";

describe("integerToRoman", () => {
  [
    { s: "I", expected: 1 },
    { s: "II", expected: 2 },
    { s: "III", expected: 3 },
    { s: "IV", expected: 4 },
    { s: "V", expected: 5 },
    { s: "VI", expected: 6 },
    { s: "VII", expected: 7 },
    { s: "VIII", expected: 8 },
    { s: "IX", expected: 9 },
    { s: "X", expected: 10 },
    { s: "XI", expected: 11 },
    { s: "XIV", expected: 14 },
    { s: "XV", expected: 15 },
    { s: "XL", expected: 40 },
    { s: "XLIX", expected: 49 },
    { s: "L", expected: 50 },
    { s: "LVIII", expected: 58 },
    { s: "XC", expected: 90 },
    { s: "C", expected: 100 },
    { s: "CXL", expected: 140 },
    { s: "CXLIX", expected: 149 },
    { s: "CL", expected: 150 },
    { s: "CD", expected: 400 },
    { s: "CDL", expected: 450 },
    { s: "D", expected: 500 },
    { s: "CM", expected: 900 },
    { s: "MCMXCIV", expected: 1994 },
    { s: "MCMXCVIII", expected: 1998 },
    { s: "MMXXIII", expected: 2023 },
  ].forEach(({ s, expected }) => {
    it(`${s} => ${expected}`, () => {
      expect(romanToInt(s)).toBe(expected);
    });
  });
});
