import strStr from "../findIndexOfTheFirstOccurrenceInAString";

describe("findIndexOfTheFirstOccurrenceInAString", () => {
  [
    { haystack: "sadbutsad", needle: "sad", expected: 0 },
    { haystack: "leetcode", needle: "leeto", expected: -1 },
    { haystack: "leetcode", needle: "code", expected: 4 },
    { haystack: "leetcode", needle: "leetcode", expected: 0 },
    { haystack: "leetcode", needle: "leetcodeleetcode", expected: -1 },
    { haystack: "leetcode", needle: "", expected: 0 },
  ].forEach(({ haystack, needle, expected }) => {
    it(`[${haystack}], ${needle}) -> ${expected}`, () => {
      expect(strStr(haystack, needle)).toBe(expected);
    });
  });
});
