# 190. Reverse Bits
# Difficulty: Easy
# Source: https://leetcode.com/problems/reverse-bits/
#
# Description: 
# Reverse bits of a given 32 bits unsigned integer.
# Note:
# * Note that in some languages such as Java, there is no unsigned integer type. In this
#   case, both input and output will be given as a signed integer type. They should not
#   affect your implementation, as the integer's internal binary representation is the
#   same, whether it is signed or unsigned.
# * In Java, the compiler represents the signed integers using 2's complement notation.
#   Therefore, in Example 2 above, the input represents the signed integer -3 and the
#   output represents the signed integer -1073741825.
#
# Clarifying Questions:
# * nothing to ask, 32 bit unsigned int is pretty clear
# * where will this be used? Will it be called frequently? Is there info we can use to
#   cache some values?
#
# Constraints:
# * The input must be a binary string of length 32


class Solution:
    def reverseBits(self, n: int) -> int:
        # simple solution is to use (bin(n)), reverse the string, then use int(result, 2)
        # to convert back to an int
        # however, we can do it with math and avoid the string manipulations
        result = 0

        count = 0
        while n > 0:
            result <<= 1 # double result
            result += n & 1 # add the least significant bit of n to result
            n >>= 1 # remove the least significant bit
            count += 1

        result <<= 32 - count # pad the result with 0s on the right
        return result
    

# Tests
import pytest
@pytest.mark.parametrize("n, expected", [
    (0b00000010100101000001111010011100, 0b00111001011110000010100101000000),
    (0b11111111111111111111111111111101, 0b10111111111111111111111111111111),
    # (0b101, 0b101),
    # (0b10, 0b01),
])
def test_reverse_bits(n, expected):
  assert Solution().reverseBits(n) == expected