// leetcode 198: House Robber
// https://leetcode.com/problems/house-robber/

// You are a professional robber planning to rob houses along a street. Each house has
// a certain amount of money stashed, the only constraint stopping you from robbing
// each of them is that adjacent houses have security systems connected and it will
// automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the
// maximum amount of money you can rob tonight without alerting the police.


// O(n)
export default function houseRobber(nums: number[]): number {
  let nm1 = 0;
  let nm2 = 0;
  for (let i=0; i<nums.length; i++) {
    const bestAtI = Math.max(nums[i] + nm2, nm1);
    nm2 = nm1;
    nm1 = bestAtI;
  }
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

  return Math.max(memo[i], memo[i+1]);
}
