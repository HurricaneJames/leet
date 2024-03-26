import letterCombinations from "../letterCombinationsOfAPhoneNumber";
import threeSumClosest from "../threeSumClosest";

describe("letterCombinationsOfAPhoneNumber", () => {
  [
    {
      digits: "23",
      expected: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"],
    },
    { digits: "", expected: [] },
    { digits: "2", expected: ["a", "b", "c"] },
    {
      digits: "32",
      expected: ["da", "ea", "fa", "db", "eb", "fb", "dc", "ec", "fc"],
    },
  ].forEach(({ digits, expected }) => {
    it(`"${digits}" => [${expected}]`, () => {
      const combinations = letterCombinations(digits);
      expect(combinations.length).toBe(expected.length);
      expect(new Set(combinations)).toEqual(new Set(expected));
    });
  });
});
