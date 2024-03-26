import myAtoi from "../stringToInteger";

describe("stringToInteger", () => {
  [
    { s: "", expected: 0 },
    { s: "    ", expected: 0 },
    { s: "words", expected: 0 },
    { s: "123", expected: 123 },
    { s: "    1", expected: 1 },
    { s: "   -1", expected: -1 },
    { s: " 42a", expected: 42 },
    { s: " -42a", expected: -42 },
    { s: "42-a", expected: 42 },
    { s: "00042", expected: 42 },
    { s: "   0032", expected: 32 },
    { s: "a32", expected: 0 },
    // only ' ' is considered whitespace, so tab is just another character
    { s: "\t32", expected: 0 },
    // rule 5 - clamping
    { s: " 2147483646", expected: 2147483646 },
    { s: "-2147483647", expected: -2147483647 },
    { s: " 2147483648", expected: 2147483647 },
    { s: "-2147483648", expected: -2147483648 },
    { s: " 91283472332", expected: 2147483647 },
    { s: "-91283472332", expected: -2147483648 },
    { s: "21474836460", expected: 2147483647 },
    { s: "-21474836460", expected: -2147483648 },
  ].forEach(({ s, expected }) => {
    it(`'${s}' => ${expected}`, () => {
      expect(myAtoi(s)).toBe(expected);
    });
  });
});
