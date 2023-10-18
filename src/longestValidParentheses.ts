// 32. Longest Valid Parentheses
// Difficulty: Hard
// Source: https://leetcode.com/problems/longest-valid-parentheses/
//
// Description
// Given a string containing just the characters '(' and ')', find the length of the longest
// valid (well-formed) parentheses substring.
//
// Constraints:
// * 0 <= s.length <= 3 * 10^4
// * s[i] is '(', or ')'.

// O(n) time, O(n) space
// Note: it is possible to do this in O(1) space, but it requires O(n^2) time
export default function longestValidParentheses(s: string): number {
  if (s.length === 0) return 0;
  let longest = 0;

  // index of furthest back the string can be
  let left: number[] = [];
  // a stack pointing to the index of the '(' that matches the top of the stack
  const stack: number[] = [];

  if (s[0] === "(") {
    left[0] = 0;
    stack.push(0);
  } else {
    left[0] = 1;
  }

  // O(n)
  for (let i = 1; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
      // the furthest continuous string that we would get if we terminate here
      left[i] = s[i - 1] == ")" ? left[i - 1] : i;
    } else if (stack.length > 0) {
      // pop one off the stack
      const matchingParen = stack.pop()!;
      left[i] = left[matchingParen];
      longest = Math.max(longest, i - left[matchingParen] + 1);
    } else {
      left[i] = i + 1; // does not matter, cannot use it for anything
    }
  }
  return longest;
}
