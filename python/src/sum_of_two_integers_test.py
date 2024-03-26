# 371. Sum of Two Integers
# Difficulty: Medium
# Source: https://leetcode.com/problems/sum-of-two-integers/
#
# Description:
# Given two integers `a` and `b`, return the sum of the two integers without using the
# operators `+` and `-`.
#
# Claifying Questions:
# * what is the range of a and b?
#
# Constraints:
# * `-1000 <= a, b <= 1000`
#
# Solution Discussion:
# This solution is almost impossible in Python because python allows arbitrary long ints.
# The only way to make it work is to constantly apply a mask to keep the values
# constrianed to 32bits. This is not necessary in other languages.
#
# Complexity:
# Time: O(1) we loop, but we loop at most the number of bits in the number, which is a
# bounded constant, so O(1)
# Space: O(1)

class Solution:
    def getSum(self, a: int, b: int) -> int:
        MAX_MASK = 0xffffffff
        while (b & MAX_MASK) > 0:
            carry = ((a & b) << 1)
            a = a ^ b
            b = carry

        return a & MAX_MASK if b > 0 else a
    
# Tests
import pytest
@pytest.mark.parametrize("a, b, expected", [
    (0, 0, 0),
    (0, 1, 1),
    (1, 0, 1),
    (1, 1, 2),
    (1, 2, 3),
    (-1, 1, 0),
    (-1, -1, -2),
])
def test_get_sum(a, b, expected):
  assert Solution().getSum(a, b) == expected