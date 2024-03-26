// 91. Decode Ways
// Difficulty: Medium
// Source: https://leetcode.com/problems/decode-ways/
//
// Description:
// A message containing letters from `A-Z` can be encoded into numbers using the following
// mapping:
// ```
// 'A' -> "1"
// 'B' -> "2"
// ...
// 'Z' -> "26"
// ```
// To decode an encoded message, all the digits must be grouped then mapped back into
// letters using the reverse of the mapping above (there may be multiple ways). For
// example, `"11106"` can be mapped into:
// * `"AAJF"` with the grouping `(1 1 10 6)`
// * `"KJF"` with the grouping `(11 10 6)`
// Note that the grouping `(1 11 06)` is invalid because `"06"` cannot be mapped into `'F'`
// since `"6"` is different from `"06"`.
// Given a string `s` containing only digits, return the **number** of ways to **decode** it.
// The answer is guaranteed to fit in a **32-bit** integer.
//
// Clarifying Questions:
// * What is the bounds on s.length?
// * What if we get a string of `0`s?
//
// Constraints:
// * `1 <= s.length <= 100`
// * `s` contains only digits and may contain leading zero(s).
//
// Solution Discussion:
// Use a recursive algorithm to solve this problem. We first figure out if taking a single
// or double digit will put the decoding into an invalid state, then we We figure out the
// number of ways we can decode the rest of the string.
// This would be really bad performance, so we use memoizaiton (dynamic programming) to
// keep a record of the number of ways we can decode substrings we already checked.
// This allows most checks to be O(1).
//
// Complexity:
// O(n) time complexity, O(n) space complexity
// O(n) time complexity because we only ever check each index once and cache the value.

export default function numDecodings(s: string): number {
  if (s.length === 0) return 1;

  let dp: number[] = new Array(s.length + 1);
  function _numDecodings(i: number): number {
    if (dp[i] != null) return dp[i];
    if (i === s.length) return 1;

    const char = s[i];
    if (char === "0") return 0;

    let result = 0;

    if (isNextInputValid(i)) {
      // single result
      result += _numDecodings(i + 1);
    }
    if (i < s.length - 1 && parseInt(s.slice(i, i + 2), 10) <= 26 && isNextInputValid(i + 1)) {
      // double digit result
      result += _numDecodings(i + 2);
    }
    dp[i] = result;
    return result;
  }
  function isNextInputValid(i: number): boolean {
    return i === s.length - 1 || s[i + 1] !== "0";
  }

  return _numDecodings(0);
}
