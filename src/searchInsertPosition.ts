// 35. Search Insert Position
// Difficulty: Easy
// Source: https://leetcode.com/problems/search-insert-position/
//
// Description:
// Given a sorted array of distinct integers and a target value, return the index if the
// target is found. If not, return the index where it would be if it were inserted in
// order.
// You must write an algorithm with O(log n) runtime complexity.
//
// Clarifying Questions:
// * What is the input size of nums: 1 <= nums.length <= 10^4
// * What is the input size of target: -10^4 <= target <= 10^4
// * What is the range of numbers: -10^4 <= nums[i] <= 10^4
// * Are there any extreme test cases: nums = [1], target = 0 -> 0

export default function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}
