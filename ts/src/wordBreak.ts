// 139. Word Break
// Difficulty: Medium
// Source: https://leetcode.com/problems/word-break/
//
// Description:
// Given a string `s` and a dictionary of words `wordDict`, determine if `s` can be
// segmented into a space-separated sequence of one or more dictionary words.
// Note that the same word in the dictionary may be reused multiple times in the
// segmentation.
//
// Clarifying Questions:
// * what if s is empty?
// * what if wordDict is empty?
// * can there be duplicates in wordDict?
// * what is the max length of s?
// * what is the max length of a word in wordDict?
// * what is the max length of wordDict?
// * what is the char set / string encoding?
// * do we need to worry about things like the backspace character?
// * can any of the words be empty?
// * can `s` or the words contain spaces?
//
// Constraints:
// * `1 <= s.length <= 300`
// * `1 <= wordDict.length <= 1000`
// * `1 <= wordDict[i].length <= 20`
// * `s` and `wordDict[i]` consist of only lowercase English letters.
// * All the strings of `wordDict` are unique.
//
// Solution Discussion:
// The naive solution is to recursively try every word in the dictionary and see if the
// substrings pass word break.
// We can speed this up by cachine solutions at points in the string d[i].
// We can speed this up even more by starting from the end of the string and working back.
//
// Complexity Analysis:
// O(mnl) time, O(n) space (for the memoization set)
// n = length of s
// m = length of longest word in wordDict
// l = length of the wordDict

export default function wordBreak(s: string, wordDict: string[]): boolean {
  const memo = new Set<number>();
  memo.add(s.length);
  // O(n) time for iterating through string * O(mn)
  for (let i = s.length - 1; i >= 0; i--) {
    // O(m) time for iterating through wordDict * O(n) time for string comparison
    for (let word of wordDict) {
      const cmpWord = s.slice(i, i + word.length);
      // O(n) time for string comparison
      if (s.slice(i, i + word.length) === word && memo.has(i + word.length)) {
        memo.add(i);
        break;
      }
    }
  }
  return memo.has(0);
}
