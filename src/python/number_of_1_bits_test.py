# 191. Number of 1 Bits
# Difficulty: Easy
# Source: https://leetcode.com/problems/number-of-1-bits/
#
# Description:
# Write a function that takes an unsigned integer and returns the number of '1' bits it
# has (also known as the Hamming weight).
# Note:
# * Note that in some languages, such as Java, there is no unsigned integer type. In this
#   case, the input will be given as a signed integer type. It should not affect your
#   implementation, as the integer's internal binary representation is the same, whether
#   it is signed or unsigned.
# * In Java, the compiler represents the signed integers using 2's complement notation.
#   Therefore, in Example 3, the input represents the signed integer. -3.
#
# Clarifying Questions:
# * what is the range of the input?
# * what if the input is None?
# * do we need to wory about endianness?
#
# Constraints:
# * The input must be a binary string of length 32
#
# Follow-up:
# * If this function is called many times, how would you optimize it?
#
# Solution Discussion:
# Easy solution is to use bin(n) and count the number of 1s. This is O(n) time and O(n) space.
# The solution not using strings, is to mod the number by 2 and count all the times it is
# 1. This is O(n) time and O(1) space. Note: since we know n is 32 bits, this is really
# O(1) time and space.
# The best solution is to use a bit mask trick. We know that n & (n-1) will remove the
# last bit. So we can do this until we hit zero to count all the bits. It is still O(1)
# time and space and very maginally faster than iterating all 32 times as it will skip the
# spans of zeros.

class Solution:
    def hammingWeight(self, n: int) -> int:
        # return bin(n).count('1')
        count = 0
        while (n != 0):
            n &= (n-1)
            count += 1
        return count

    

import pytest
@pytest.mark.parametrize("n, expected", [
    (0b0000000, 0),
    (0b0000001, 1),
    (0b0000010, 1),
    (0b0000011, 2),
    (0b00000000000000000000000000001011, 3),
    (0b00000000000000000000000010000000, 1),
    (0b11111111111111111111111111111101, 31),
])
def test_hamming_weight(n, expected):
    assert Solution().hammingWeight(n) == expected