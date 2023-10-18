// 34. Find First and Last Position of Element in Sorted Array
// Difficulty: Medium
// Source: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
//
// Description:
// Given an array of integers nums sorted in ascending order, find the starting and ending
// position of a given target value.
// If target is not found in the array, return [-1, -1].
// You must write an algorithm with O(log n) runtime complexity.
//
// Constraints:
// 1. 0 <= nums.length <= 10^5
// 2. -10^9 <= nums[i] <= 10^9
// 3. nums is a non-decreasing array.
// 4. -10^9 <= target <= 10^9

// Complexity: O(log(n)) time / O(1) space
export default function searchRange(nums: number[], target: number): number[] {
  if (nums.length === 0) return [-1, -1];
  if (nums.length === 1) return nums[0] === target ? [0, 0] : [-1, -1];

  const left = findLeft(nums, target);
  const right = findRight(nums, target);

  return [left, right];
}

// O(log n) time / O(1) space
function findLeft(nums: number[], target: number): number {
  // left search
  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
    let mid = low + Math.floor((high - low) / 2);

    const isTarget = nums[mid] === target;

    if (isTarget && (mid === 0 || nums[mid - 1] < target)) return mid;

    if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low === high && nums[low] === target ? low : -1;
}

// O(log n) time / O(1) space
function findRight(nums: number[], target: number): number {
  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
    let mid = low + Math.floor((high - low) / 2);

    const isTarget = nums[mid] === target;
    if (isTarget && (mid === nums.length - 1 || nums[mid + 1] > target)) return mid;

    if (nums[mid] <= target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low === high && nums[low] === target ? low : -1;
}
