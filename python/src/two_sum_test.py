# 1. Two Sum
# Difficulty: Easy
# Source: https://leetcode.com/problems/two-sum/
#
# Description:
# Given an array of integers `nums` and an integer `target`, return indices of the two
# numbers such that they add up to `target`.
# You may assume that each input would have exactly one solution, and you may not use
# the same element twice.
# You can return the answer in any order.
#
# Claifying Questions:
# * what if there is no solution?
# * can nums be negative?
# * can target be negative?
# * can there be duplicates in nums? (ie. does cannot use the same element refer to the
#   index of the element or the value of the element?)
#
# Constraints:
# * `2 <= nums.length <= 10^4`
# * `-10^9 <= nums[i] <= 10^9`
# * `-10^9 <= target <= 10^9`
# * **Only one valid answer exists.**
#
# Follow up: Can you come up with an algorithm that is less than `O(n^2)` time
#
# Solution:
# * Brute force: compare all possible pairs, O(n^2) time, O(1) space
# * hash map: add all elements to a hash map, then iterate through each one and see if
#   the required pair is there and return if it is, O(n) time, O(n) space

from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        seenMap = {} # val: index
        for i, num in enumerate(nums):
            diff = target - num
            if diff in seenMap:
              return [seenMap[diff], i]
            seenMap[num] = i
        raise Exception("No solution")
      

# Tests
import pytest
@pytest.mark.parametrize("nums, target, expected", [
    ([3, 3],  6, [0, 1] ),
    ([3, 2, 4],  6, [1, 2] ),
    ([2, 7, 11, 15],  9, [0, 1] ),
    ([1, 1, 1, 1],  2, [0, 1] ),
])
def test_two_sum(nums, target, expected):
  assert Solution().twoSum(nums, target) == expected