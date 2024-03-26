import intToRoman from "../integerToRoman";

describe("integerToRoman", () => {
  [
    { num: 1, expected: 'I' },
    { num: 2, expected: 'II' },
    { num: 3, expected: 'III' },
    { num: 4, expected: 'IV' },
    { num: 5, expected: 'V' },
    { num: 6, expected: 'VI' },
    { num: 7, expected: 'VII' },
    { num: 8, expected: 'VIII' },
    { num: 9, expected: 'IX' },
    { num: 10, expected: 'X' },
    { num: 11, expected: 'XI' },
    { num: 14, expected: 'XIV' },
    { num: 15, expected: 'XV' },
    { num: 40, expected: 'XL' },
    { num: 49, expected: 'XLIX' },
    { num: 50, expected: 'L' },
    { num: 90, expected: 'XC' },
    { num: 100, expected: 'C' },
    { num: 140, expected: 'CXL' },
    { num: 149, expected: 'CXLIX' },
    { num: 150, expected: 'CL' },
    { num: 400, expected: 'CD' },
    { num: 450, expected: 'CDL' },
    { num: 500, expected: 'D' },
    { num: 900, expected: 'CM' },
    { num: 1998, expected: 'MCMXCVIII' },
    { num: 2023, expected: 'MMXXIII' },
  ].forEach(({ num, expected }) => {
    it(`${num} => ${expected}`, () => {
      expect(intToRoman(num)).toBe(expected);
    });
  });
});
