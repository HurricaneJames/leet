import longestCommonPrefix from "../longestCommonPrefix";

describe("longestCommonPrefix", () => {
  [
    { strs: ["flower", "flow", "flight"], expected: "fl" },
    { strs: ["dog", "racecar", "car"], expected: "" },
  ].forEach(({ strs, expected }) => {
    it(`${strs} => ${expected}`, () => {
      expect(longestCommonPrefix(strs)).toBe(expected);
    });
  });
});
