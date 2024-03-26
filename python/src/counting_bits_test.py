# 338. Counting Bits
# Difficulty: Easy
# Source: https://leetcode.com/problems/counting-bits/
# 
# Description:
# Given an integer `n`, return an array `ans` of length `n + 1` such that for each `i`
# `(0 <= i <= n)`, `ans[i]` is the number of `1`'s in the binary representation of `i`.
#
# Claifying Questions:
# What if n is negative?
# What if n is zero?
# What if n is None?
# What if n is very large?
#
# Constraints:
# `0 <= n <= 10^5`
#
# Solution Discussion:
# Notice that we are reusing values from previous computations. However, unlike many other
# dynamic programming examples, the previous function is dependent on the current most
# signifacant bit. We can calculate this by keeping track of an offset and updating it
# whenever we would add a new significant bit (ie. when 2*offset == i).
# Then we just create the array (top down) and return it.
#
# Complexity:
# O(n) time, O(n) space for the returned array

from typing import List

class Solution:
    def countBits(self, n: int) -> List[int]:
        dp = [0] * (n + 1)
        offset = 1
        for i in range(1, n + 1):
            if offset * 2 == i:
                offset = i
            dp[i] = dp[i - offset] + 1
        return dp
        
    
# Tests
import pytest
@pytest.mark.parametrize("n, expected", [
    (0, [0]),
    (1, [0, 1]),
    (2, [0, 1, 1]),
    (3, [0, 1, 1, 2]),
    (4, [0, 1, 1, 2, 1]),
    (5, [0, 1, 1, 2, 1, 2]),
])
def test_count_bits(n, expected):
  assert Solution().countBits(n) == expected