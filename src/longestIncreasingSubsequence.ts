// 300. Longest Increasing Subsequence
// Difficulty: Medium
// Source: https://leetcode.com/problems/longest-increasing-subsequence/
//
// Description:
// Given an integer array `nums`, return the length of the longest strictly increasing
// subsequence.
//
// Clarifying Questions:
// * what if if nums is empty?
// * what values can we expect in nums?
// * what is the range of nums.length?
//
// Constraints:
// `1 <= nums.length <= 2500`
// `-10^4 <= nums[i] <= 10^4`
//
// Solution Description:
// At any given point nums[i], the solution is the max of that element by itself, or the
// 1 + the best solution we can find for every element to the end of the array where
// n[i] < n[i+x]. Using Bottom Up Dynamic Programming, we can solve this problem in O(n^2)
// time and O(n) space.
//
// Note: This problem can also be solved in O(nlog(n)) time. However, even after reading
//       code for that solution, I still do not understand how it is working.

export default function lengthOfLIS(nums: number[]): number {
  const dp: number[] = new Array(nums.length);
  let max = 1;
  for (let i = dp.length - 1; i >= 0; --i) {
    dp[i] = 1;
    for (let j = i + 1; j < dp.length; ++j) {
      if (nums[i] < nums[j]) dp[i] = Math.max(dp[i], 1 + dp[j]);
    }
    max = Math.max(max, dp[i]);
  }

  return max;
}
