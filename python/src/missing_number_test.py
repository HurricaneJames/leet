# 268. Missing Number
# Difficulty: Easy
# Source: https://leetcode.com/problems/missing-number/
#
# Description:
# Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return the
# only number in the range that is missing from the array.
#
# Claifying Questions:
# 
# Constraints:
# * `n == nums.length`
# * `1 <= n <= 10^4`
# * `0 <= nums[i] <= n`
# * All the numbers of `nums` are unique.
#
# Solution Discussion:
# Brute force, sort the numbers then walk through the array looking for the first non
# monotonic pair. O(nlog(n) time and O(1) space.
# Alternatively, we could create a hash set [0..n] and then mark all the numbers in nums.
# We then walk the range again and return the first number not in the set. O(n) time/space.
#
# However, we can also use XOR to solve this problem. If we XOR all the numbers in the
# nums array, then XOR that with the XOR of all the possible numbers, we will erase all
# the values that are in common, leaving just the missing number.
#
# We could also do it by summing all the numbers in the nums array, then subtracting that
# from what we know the sum is supposed to be (n * (n + 1) / 2). This solution is easier
# to understand, however it will not work for n over a certain number. In this case, n is
# restricted to 10k, so the highest sum would be 10k * 10k + 1 / 2 = 50,005,000. That is
# withing 2^31 - 1, so we know it is safe to use. However, if we want to run the code
# on larger values of n, then we will need to use the XOR solution.
# 
# [0, 1] -> 2
#    00 | 01 => 01
#    len(nums) + 1 - binary or of all nums
#
# [0, 1, 2] -> 3
#   00 | 01 | 10 => 11
# Follow up:
# Could you implement a solution using only `O(1)` extra space complexity and `O(n)`
# runtime complexity?

from typing import List

class Solution:
    def missingNumberSums(self, nums: List[int]) -> int:
        result = len(nums)
        for i in range(len(nums)):
            result += i - nums[i]
        return result

    def missingNumber(self, nums: List[int]) -> int:
        x = len(nums)
        acc = 0
        for i in range(len(nums)):
           x ^= i
           acc ^= nums[i]
        return x ^ acc

    

# Tests
import pytest
@pytest.mark.parametrize("nums, expected", [
    ([0, 1], 2),
    ([3,0,1], 2),
    ([9, 6, 4, 2, 3, 5, 7, 0, 1], 8),
])
def test_missing_number(nums, expected):
  assert Solution().missingNumber(nums) == expected