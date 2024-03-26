// 647. Palindromic Substrings
// Difficulty: Medium
// Source: https://leetcode.com/problems/palindromic-substrings/
//
// Description:
// Given a string `s`, return the number of palindromic substrings in it.
// A string is a palindrome when it reads the same backward as forward.
// A substring is a contiguous sequence of characters within the string.
//
// Clarifying Questions:
// * what is the bounds on the length of s?
// * what is the character set/encoding of s?
//
// Constraints:
// * 1 <= s.length <= 1000
// * s consists of lowercase English letters.
//
// Solution Discussion:
// 1. brute force
// for all n^2 substrings, check if it is a palindrome
// overall O(n^3) time and O(1) space (if we get fancy and avoid slicing the arrays)
//
// 2. expansion
// for each index i, get the max palindrome
// we know we can do this in O(n^2) time and O(1) space
// for each of those, we can count the number of substrings
//
// Complexity Analysis:
// O(n^2) time and O(1) space

export default function countSubstrings(s: string): number {
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    // odd length palindromes from i (this will also capture the single character at i)
    total += countPalindromes(s, i, i);
    // even length palindromes from [i, i+1]
    total += countPalindromes(s, i, i + 1);
  }
  return total;
}

// O(n) time and O(1) space
function countPalindromes(s: string, left: number, right: number): number {
  let count = 0;
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    count++;
    left--;
    right++;
  }
  return count;
}
