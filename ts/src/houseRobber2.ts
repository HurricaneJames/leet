// 213. House Robber II
// Difficulty: Medium
// Source: https://leetcode.com/problems/house-robber-ii/
//
// Description:
// You are a professional robber planning to rob houses along a street. Each house has a
// certain amount of money stashed. All houses at this place are arranged in a circle.
// That means the first house is the neighbor of the last one. Meanwhile, adjacent houses
// have a security system connected, and it will automatically contact the police if two
// adjacent houses were broken into on the same night.
//
// Given an integer array, `nums`, representing the amount of money of each house, return
// the maximum amount of money you can rob tonight without alerting the police.
//
// Clariification Questions:
//
// Solution:
// Use the same technique from house robber 1, but run it twice on sub-arrays that only
// include either the first or last element.
//
// Complexity:
// O(n) time | O(1) space
// note: solutions that use slice are actually using O(n) space and extra time for the
// copies. However, that does seem to be faster for the leetcode tests.
export default function rob(nums: number[]): number {
  const nLen = nums.length;
  if (nLen === 0) return 0;
  if (nLen === 1) return nums[0];
  return Math.max(_rob(nums, 0), _rob(nums, 1));
}

// O(n) time | O(1) space
function _rob(nums: number[], offset: number): number {
  let nm1 = 0;
  let nm2 = 0;
  for (let i = offset; i < nums.length - 1 + offset; i++) {
    let temp = nm1;
    nm1 = Math.max(nm1, nm2 + nums[i]);
    nm2 = temp;
  }
  return nm1;
}
