// 5. Longest Palindromic Substring
// Difficulty: Medium
// Source: https://leetcode.com/problems/longest-palindromic-substring/
//
// Description:
// Given a string s, return the longest palindromic substring in s.
//
// Solution Discussion:
// 1. brute force
// for i = s.length to 0
//   for j = 0 to s.length - i
//     if (isPalindrome(s.slice(0, i))) return i;
// return 1;
// this is O(n^3) time and O(n) space (for all the slices)
//
// 2. expansion
// for every chararacter in s, expand out the max palindrom from that character
// keep a record of the palindrome that was created if it is larger than the previous max
// return that palinrome
// going with solution 2 is much faster as n scales
//
// Complexity:
// perf: O(n^2) / space: O(1) or O(n) if counting slice at end

export default function longestPalindrome(s: string): string {
  if (s.length <= 1) return s;
  let maxLen = 0;
  let maxSubStr = [0, 0];

  // going to length - 1 because the last character will never be the palindrome
  // plus we won't need to check if i+1 is in the array
  for (let i = 0; i < s.length - 1; i++) {
    const odd = expandToLargestPalindrome(s, i, i);
    const even = expandToLargestPalindrome(s, i, i + 1);
    const biggestWindow = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    const windowLength = biggestWindow[1] - biggestWindow[0];
    if (windowLength > maxLen) {
      maxSubStr = biggestWindow;
      maxLen = windowLength;
    }
  }
  return s.slice(maxSubStr[0], maxSubStr[1] + 1);
}

// expand to the largest palindrom based around the window
// return [left, right] of the largest palindrome
// perf: O(n) / space: O(1)
function expandToLargestPalindrome(s: string, left: number, right: number): [number, number] {
  const maxRight = s.length - 1;
  let ret: [number, number] = [left, left];
  while (left >= 0 && right <= maxRight && s[left] === s[right]) {
    const pLen = right - left;
    ret = [left, right];
    left--;
    right++;
  }
  return ret;
}

//////////
// - MARK: longestPalindromByExpansion
//////////

// This solution is the easiest to read version of the O(n^2) algorithm
// it is slightly slower than the faster version above, but the same order complexity.
function longestPalindromByExpansion(s: string): string {
  if (s.length < 2) return s;

  let maxWindow = [0, 1];

  for (let i = 0; i < s.length; i++) {
    const evenWindow = expandToLargestPalindrome2(s, [i, i]);
    const oddWindow = expandToLargestPalindrome2(s, [i, i + 1]);

    const biggestWindow = evenWindow[1] > oddWindow[1] ? evenWindow : oddWindow;
    if (biggestWindow[1] > maxWindow[1]) maxWindow = biggestWindow;
  }

  return s.substring(maxWindow[0], maxWindow[0] + maxWindow[1]);
}

// expand to the lagest palindrome based around the window
// return the biggest window defined as [left, length]
// complexity: O(n) time, O(1) space
function expandToLargestPalindrome2(s: string, window: [number, number]): [number, number] {
  let [left, right] = window;
  if (s[left] !== s[right]) return [left, 1];
  while (left > 0 && right < s.length - 1 && s[left - 1] === s[right + 1]) {
    left--;
    right++;
  }
  return [left, right - left + 1];
}

//////////
// - MARK: longestPalindromeByCheckingAll
//////////

// This is the brute force solution, O(N^3) overall
// perf: O(n^3)
// space: O(n) - all the slices
function longestPalindromeByCheckingAll(s: string): string {
  // console.log(`longestPalindrome(${s})`);
  for (let substrLen = s.length; substrLen > 0; substrLen--) {
    for (let i = 0; i < s.length - substrLen; i++) {
      const j = i + substrLen;
      const x = isSubstringAPalindrome(s, i, j);
      const subs = s.slice(i, j + 1);
      // console.log(`(${i}, ${j}) ${subs} -> `, x);
      if (x) return subs;
    }
  }
  return "";
}

// perf: O(j-i)
// space: O(1)
export function isSubstringAPalindrome(s: string, i: number, j: number): boolean {
  if (i > j || i < 0 || j < 0 || i >= s.length || j >= s.length) return false;
  while (i < j) {
    if (s[i] !== s[j]) return false;
    i++;
    j--;
  }
  return true;
}

// n
// 2(n-1)
// 3(n-2)
// 4(n-3)
// E(i(n-(i-1))) as i in [0, n)
