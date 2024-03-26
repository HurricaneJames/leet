// 31. Next Permutation
// Difficulty: Medium
// Source: https://leetcode.com/problems/next-permutation/
//
// Description:
// A permutation of an array of integers is an arrangement of its members into a sequence
// or linear order.
// * For example, for `arr=[1, 2, 3]`, the following are all the permutations of `arr`:
//   `[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], and [3, 2, 1]`.
// The *next permutation* of an array of integers is the next lexicographically greater
// permutation of its integer. More formally, if all the permutations of the array are
// sorted in one container according to their lexicographical order, then the **next
// permutation** of that array is the permutation that follows it in the sorted
// container. If such arrangement is not psosible, the array must be rearranged as the
// lowest possible order (i.e., sorted in ascending order).
// * for example, the next permutation of `arr=[1, 2, 3]` is `[1, 3, 2]`
// * Similarly, the next permutation of `arr = [2, 3, 1]` is `[3, 2, 1]`.
// * While the next permutation of `arr=[3, 2, 1]` is `[1, 2, 3]` because `[3, 2, 1]`
//   does not have a lexicographical larger rearrangement.
//
// Given an array of integers `nums`, find the next permutation of `nums`.
//
// The replacement must be in place and only use constant extra memory.
//
// Clarifying questions:
// 1. Can we use built-in functions? (yes, most)
// 2. What should we do if the array is empty? (do nothing)
// 3. What should we do if the array has only one element? (do nothing)
// 4. Are there any constraints on the size of the array? (see below)
//
// Constraints
// 1 <= nums.length <= 100
// 0 <= nums[i] <= 100

// O(n) time / O(1) space (where n is the length of nums)
export default function nextPermutation(nums: number[]): void {
  const nLength = nums.length;

  if (nLength <= 1) return;

  // find the index of the right item from the right that is smaller than it's right neighbor
  // O(n) time / O(1) space
  const pPoint = findLastIndex(nums, (n, i, arr) => n < arr[i + 1]);
  if (pPoint < 0) {
    // O(n) time / O(1) space
    nums.reverse();
    return;
  }

  // O(1) time / O(1) space
  if (pPoint === nLength - 2) {
    // swap last two elements
    const temp = nums[nLength - 1];
    nums[nLength - 1] = nums[pPoint];
    nums[pPoint] = temp;
    return;
  }

  // find the smallest number to the right of pPoint that is greater than nums[pPoint]
  // since we know everything from pPoint + 1 to the end is in reverse sorted order, we can
  // just look for the last index of an element that is greater than nums[pPoint]
  // O(5n) => O(n) time / O(1) space
  const newLeftIdx = findLastIndex(nums, (n, i, arr) => n > arr[pPoint]);
  const newLeft = remove(nums, newLeftIdx);
  const temp = nums[pPoint];
  nums[pPoint] = newLeft;
  const insertIdx = findLastIndex(nums, (n) => n > temp);
  insert(nums, temp, insertIdx + 1);
  reverse(nums, pPoint + 1);
}

// remove the element at index at, shifting all elements after at to the left
// returns the number removed
// note: it leaves the last element of the array in an undefined state
// O(n) time / O(1) space
function remove(nums: number[], at: number): number {
  if (at >= nums.length || at < 0) throw new Error("invalid index");
  const temp = nums[at];
  for (let i = at; i < nums.length - 1; i++) {
    nums[i] = nums[i + 1];
  }
  nums[nums.length - 1] = undefined as any;
  return temp;
}

// inserts n at index at, shifting all elements at and after at to the right
// O(n) time / O(1) space
function insert(nums: number[], n: number, at: number) {
  for (let i = nums.length - 1; i > at; i--) {
    nums[i] = nums[i - 1];
  }
  nums[at] = n;
}

// reverse the elements of nums starting at from
// O(n) time / O(1) space
function reverse(nums: number[], from: number) {
  const nLength = nums.length;
  const mid = Math.floor((nLength - from) / 2);
  for (let i = 0; i < mid; i++) {
    const temp = nums[i + from];
    nums[i + from] = nums[nLength - i - 1];
    nums[nLength - i - 1] = temp;
  }
}

// backfill for Array.findLastIndex because it isn't available on leetcode
// O(n) time / O(1) space
function findLastIndex(
  nums: number[],
  predicate: (n: number, i: number, arr: number[]) => boolean
): number {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (predicate(nums[i], i, nums)) return i;
  }
  return -1;
}
