// 27. Remove Element
// Difficulty: Easy
// Source: https://leetcode.com/problems/remove-element/
//
// Description:
// Given an integer array nums and an integer val, remove all occurrences of val in nums
// in-place. The order of the elements may be changed. Then return the number of elements
// in nums which are not equal to val.
//
// Consider the number of elements in nums which are not equal to val be k, to get
// accepted, you need to do the following things:
// * Change the array nums such that the first k elements of nums contain the elements
//   which are not equal to val. The remaining elements of nums are not important as well
//   as the size of nums.
// * Return k.
//
// Constraints:
// * 0 <= nums.length <= 100
// * 0 <= nums[i] <= 50
// * 0 <= val <= 100

// perf: O(n) time / O(1) space
export default function removeElement(nums: number[], val: number): number {
  let left = 0;
  let right = 0;
  while (right < nums.length) {
    if (nums[right] === val) {
      while (right < nums.length && nums[right] === val) {
        right++;
      }
      if (right >= nums.length) break;
    }
    nums[left] = nums[right];
    left++;
    right++;
  }
  const k = nums.length - (right - left);
  return k;
}

// O(n^2) time / O(1) space
function removeElementWithSplice(nums: number[], val: number): number {
  // O(n)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      // O(n)
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
}
