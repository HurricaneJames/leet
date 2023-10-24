// 152. Maximum Product Subarray
// Difficulty: Medium
// Source: https://leetcode.com/problems/maximum-product-subarray/
//
// Description:
// Given an integer array `nums`, find the subarray that has the largest product and
// return the product.
// The test cases are generated so that the answer will fit in a 32-bit integer.
//
// Clarifying Questions:
// Can nums be negative?
// What is the range of nums.length?
// Can the subarray be empty? (ie. can we choose nothing if the only element is negative?)
//
// Constraints:
// * 1 <= nums.length <= 2 * 10^4
// * -10 <= nums[i] <= 10
// * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
//
// Solution Discussion:
// 1. Brute Force - O(n^2) generate every possible sub-string and see which has the
//    largest.
// 2. Dynamic Programming - O(n) keep track of the current max and min product. We want to
//    keep the minimum product as well as the max so we can handle negative numbers
//    effectively swapping max and min.
//
// Complexity:
// O(n^2) time / O(n^2) space

export default function maxProduct(nums: number[]): number {
  if (nums.length === 0) return 0;

  let max = nums[0];
  let curMin = max;
  let curMax = max;

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    const temp = curMax * num;
    // by checking both the product of previous and current and taking current by itself
    // we handle the 0 case. If max/min were previously 0, at least one of them will be
    // num after this iteration.
    curMax = Math.max(temp, num * curMin, num);
    curMin = Math.min(temp, num * curMin, num);
    max = Math.max(max, curMax);
  }

  return max;
}
