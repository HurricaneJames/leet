// 26. Remove Duplicates from sorted Array
// [Easy]
// Given an integer array nums sorted in non-decreasing order, remove the duplicates
// in-place such that each unique element appears only once. The relative order of the
// elements should be kept the same. Then return the number of unique elements in nums.
//
// Consider the number of unique elements of nums to be k, to get accepted, you need to
// do the following things:
//
// * Change the array nums such that the first k elements of nums contain the unique
//   elements in the order they were present in nums initially. The remaining elements of
//   nums are not important as well as the size of nums.
// * Return k.

/**
 * In place remove duplicates from a sorted array. The elements will remain in relative
 * order. Unique elements will be shifted to the first k elements of the array, and k
 * will be returned. Elements after k are undefined and should be ignored.
 * @complexity time: O(n) / space: O(1)
 *
 * @param nums an array of numbers sorted in non-decreasing order
 * @returns the number of unique elements in nums
 */
export default function removeDuplicates(nums: number[]): number {
  let current = nums[0];
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== current) {
      nums[k++] = nums[i];
      current = nums[i];
    }
  }
  return k;
}
