// 28. Find the Index of the First Occurrence in a string
// Difficulty: Easy
// Source: https://leetcode.com/problems/implement-strstr/
//
// Description:
// Given two strings `needle` and `haystack`, return the index of the first occurrence
// of `needle` in `haystack`, or `-1` if `needle` is not part of `haystack`.

// Clarification:
// What should we return when `needle` is an empty string? This is a great question to ask during an interview.
// For the purpose of this problem, we will return `0` when `needle` is an empty string.
// This is consistent to C's `strstr()` and Java's `indexOf()`.

// Constraints:
// 0 <= haystack.length, needle.length <= 10 ^ 4
// haystack and needle consist of only lower-case English characters.

// Clarification: can we use built-in functions?
// ie. cheat: return haystack.indexOf(needle);
// no, we cannot use built-in functions

// Time complexity: O(nm)
// Space complexity: O(1)
export default function strStr(haystack: string, needle: string): number {
  if (needle.length === 0) return 0;
  if (needle.length > haystack.length) return -1;

  const n = haystack.length;
  const m = needle.length;

  // O(n) * O(m) = O(nm)
  for (let i = 0; i < n; i++) {
    if (haystack[i] === needle[0]) {
      let j = 0;
      // O(m)
      while (j < m && haystack[i + j] === needle[j]) {
        j++;
      }
      if (j === m) return i;
    }
  }

  return -1;
}
