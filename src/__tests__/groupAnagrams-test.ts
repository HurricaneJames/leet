import groupAnagrams from "../groupAnagrams";

describe("groupAnagrams", () => {
  [
    {
      strs: ["eat", "tea", "tan", "ate", "nat", "bat"],
      expected: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]],
    },
    { strs: [""], expected: [[""]] },
    { strs: ["a"], expected: [["a"]] },
  ].forEach(({ strs, expected }) => {
    test(`${JSON.stringify(strs)} => ${JSON.stringify(expected)}`, () => {
      const result = groupAnagrams(strs);
      expect(result.length).toEqual(expected.length);
      for (let exp of expected) {
        expect(
          result.findIndex(
            (res) => res.length === exp.length && res.every((val) => exp.includes(val))
          )
        ).toBeGreaterThan(-1);
      }
    });
  });
});
