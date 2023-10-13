import longestSubstringWithoutRepeatingCharacters from "../longestSubstringWithoutRepeatingCharacters";

describe("longestSubstringWithoutRepeatingCharacters", () => {
  const examples = [
    { example: 'aba', expected: 2 },
    { example: 'abc', expected: 3 },
    { example: "abcabcbb", expected: 3 },
    { example: "bbbbb", expected: 1 },
    { example: "pwwkew", expected: 3 },
  ];
  examples.forEach(({example, expected}) => {
    it(`${example} -> ${expected}`, () => {
      expect(longestSubstringWithoutRepeatingCharacters(example)).toBe(expected);
    })
  });
});
