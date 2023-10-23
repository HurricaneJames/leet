// 70. Climbing Stairs
// Difficulty: Easy
// Source: https://leetcode.com/problems/climbing-stairs/
//
// Description:
// You are climbing a stair case. It takes n steps to reach to the top.
// Each time you can either climb `1` or `2` steps. In how many distinct ways can you
// climb to the top?
//
// Clarifying Questions:
// Can n be negative?
// What is the larest possible value of n?
// Can n be florating point?
// Can n be 0?
// Can n be 1?
//
// Constraints:
// 1 <= n <= 45
//
// Solution:
//

export default function climbStairs(n: number): number {
  let values: number[] = [0, 1, 2];
  function _climb(n: number): number {
    if (!values[n]) {
      values[n] = _climb(n - 1) + _climb(n - 2);
    }
    return values[n];
  }
  return _climb(n);
}
