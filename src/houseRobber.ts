// 198: House Robber
// Difficulty: Medium
// Source: https://leetcode.com/problems/house-robber/
//
// Description:
// You are a professional robber planning to rob houses along a street. Each house has
// a certain amount of money stashed, the only constraint stopping you from robbing
// each of them is that adjacent houses have security systems connected and it will
// automatically contact the police if two adjacent houses were broken into on the same night.
//
// Given an integer array nums representing the amount of money of each house, return the
// maximum amount of money you can rob tonight without alerting the police.
//
// Solution:
// For each house, we will look back at the max we could get from the previous two houses
// and determine the max we could get from taking the previous house vs this house plus
// the max we could get from two houses ago.

// O(n)
export default function houseRobber(nums: number[]): number {
  // max if we rob houses from 0 to i minus 1
  let nm1 = 0;
  // max if we rob houses from 0 to i minus 2
  let nm2 = 0;
  for (let i = 0; i < nums.length; i++) {
    // the best will be whatever we could do at `i - 1` vs this plus what we could do
    // at `i - 2` plus the current house
    const bestAtI = Math.max(nums[i] + nm2, nm1);
    // update nm1 and nm2 since we are going to advance `i`
    // we could also keep an array of all values to this point
    // however, that would require O(n) memory, and we can do this in O(1)
    nm2 = nm1;
    nm1 = bestAtI;
  }
  // return whatever we stored as the best at the last house in the array
  return nm1;
}

// O(n)
export function houseRobberSomewhatOptimized(nums: number[]): number {
  return maxFrom(nums, 0, []);
}

function maxFrom(nums: number[], i: number, memo: number[]): number {
  if (i >= nums.length) return 0; // out of bounds
  if (i === nums.length - 1) return nums[i]; // no more elements

  memo[i] = memo[i] ?? nums[i] + maxFrom(nums, i + 2, memo);
  memo[i + 1] = memo[i + 1] ?? nums[i + 1] + maxFrom(nums, i + 3, memo);

  return Math.max(memo[i], memo[i + 1]);
}
