// 33. Search in Rotated Sorted Array
// Difficulty: Medium
// Source: https://leetcode.com/problems/search-in-rotated-sorted-array/
//
// Description
// There is an integer array `nums` sorted in ascending order (with distinct values).
// Prior to being passed to your function, `nums` is possibly rotated at an unknown pivot
// index `k` (1 <= k < nums.length) such that the resulting array is
// `[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
// For example, `[0, 1, 2, 4, 5, 6, 7] might be rotated at pivot index 3 and become
// `[4, 5, 6, 7, 0, 1, 2]`.
// Given the array `nums` after the possible rotation and an integer `target`, return the
// index of `target` if it is in `nums`, or `-1` if it is not in `nums`.
// You must write an algorithm with `O(log n)` runtime complexity.
//
// Constraints:
// 1. 1 <= nums.length <= 5000
// 2. -10^4 <= nums[i] <= 10^4
// 3. All values of nums are unique.
// 4. nums is guaranteed to be rotated at some pivot.
// 5. all values of `nums` are unique.
// 6. `nums` is ascending order
// 7. `-10^4 <= target <= 10^4`
//
// Clarifing Questions:
// 1. Input size? - 1 <= nums.length <= 5000
// 2. Input range? - -10^4 <= nums[i] <= 10^4
// 3. Are there any space constraints? - No

export default function search(nums: number[], target: number): number {
  if (nums.length === 0) return -1;
  if (nums.length === 1) return nums[0] === target ? 0 : -1;

  const start = (findPivotPoint(nums) + 1) % nums.length;
  return binarySearch(nums, target, start);
}

function getMid(low: number, high: number): number {
  return low + Math.floor((high - low) / 2);
}

function mapIndex(index: number, start: number, length: number): number {
  return (index + start) % length;
}

function findPivotPoint(n: number[]): number {
  let low = 0;
  let high = n.length - 1;
  let mid = getMid(low, high);
  while (n[mid] < n[mid + 1]) {
    if (n[mid] < n[0]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
    mid = getMid(low, high);
  }
  return mid;
}

function binarySearch(nums: number[], target: number, start: number): number {
  let low = 0;
  let high = nums.length - 1;
  let mid = getMid(low, high);
  let mappedMid = mapIndex(mid, start, nums.length);

  while (low < high && nums[mappedMid] !== target) {
    if (low > high) return -1;
    if (nums[mappedMid] > target) {
      high = Math.max(mid - 1, low);
    } else {
      low = Math.min(mid + 1, high);
    }
    mid = getMid(low, high);
    mappedMid = mapIndex(mid, start, nums.length);
  }
  return nums[mappedMid] === target ? mappedMid : -1;
}
