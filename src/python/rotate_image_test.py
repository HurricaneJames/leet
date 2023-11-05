# 48. Rotate Image
# Difficulty: Medium
# Source: https://leetcode.com/problems/rotate-image/
# 
# Description:
# You are given an `n x n` 2D `matrix` representing an image, rotate the image by 90
# degrees (clockwise). You have to rotate the image in-place, which means you have to
# modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the
# rotation.
#
# Clafirying Questions:
# * are we guaranteed the matrix is square?
# * what are the possible values of matrix[i][j]?
# * what is the range of len(matrix)?
# * what if matrix is empty?
# * what if matrix is None?
#
# Constraints:
# * `n == matrix.length == matrix[i].length`
# * `1 <= n <= 20`
# * `-1000 <= matrix[i][j] <= 1000`
#
# Solution Description:
# The trick is brek the problem into shells. Then, we can rotate each shell by making
# swaps on each row in place.
#
# Complexity Analysis:
# Time: O(n^2) because it visits each cell once and there are n^2 cells.
# Space O(1)

from typing import List

class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        # l and r define the left/right and top/bottom boundaries of the current shell
        l, r = 0, len(matrix) - 1

        # we rotate each shell in place, then shrink the shell for the next layer
        # when l >= r we know we can stop because that means the shell is either empty or
        # a single element
        while l < r:
            for i in range(r - l):
                top, bottom = l, r
                # rotation is accomplished by pulling out the top left element
                temp = matrix[top][l + i]
                # then shifting the bottom left element into the top left
                matrix[top][l+i] = matrix[bottom-i][l]
                # followed by shifting the bottom right element into the bottom left
                matrix[bottom-i][l]  = matrix[bottom][r-i]
                # the top right element is then places in the bottom right
                matrix[bottom][r-i] = matrix[top+i][r]
                # finally the temp variable, which was the original top left, it placed in
                #   the top right
                matrix[top+i][r] = temp
            # shrink the shell for the next layer
            l += 1
            r -= 1


import pytest
@pytest.mark.parametrize("matrix, expected", [
    ([[1, 2, 3], [4, 5, 6], [7, 8, 9]], [[7, 4, 1], [8, 5, 2], [9, 6, 3]]),
    ([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], [[13, 9, 5, 1], [14, 10, 6, 2], [15, 11, 7, 3], [16, 12, 8, 4]]),
])
def test_rotate(matrix, expected):
    Solution().rotate(matrix)
    assert matrix == expected