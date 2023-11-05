# 54. Spiral Matrix
# Difficulty: Medium
# Source: https://leetcode.com/problems/spiral-matrix/
#
# Description:
# Given an `m x n` matrix, return all elements of the matrix in spiral order.
#
# Clarifying Questions:
# * can the matrix be empty?
# * are we guaranteed the input is a matrix (ie. all rows have the same length)?
# * what is the range of len(matrix) and len(matrix[0])?
# * which direction for the spiral? right -> down -> left -> up?
#
# Constraints:
# * `m == matrix.length`
# * `n == matrix[i].length`
# * `1 <= m, n <= 10`
# * `-100 <= matrix[i][j] <= 100`
#
# Solution Description:
# Keep 4 pointers for the left, right, top, and bottom boundaries of the matrix. Walk the
# boundaries in a spiral fashion, appending the values to the result array.
# after each row/col combo, check if the left/right or top/bottom pointers have crossed.
# Return the results when the pointers cross.
#
# Complexity Analysis:
# Time: O(nm) because we touch each cell once
# Space: O(nm) because we store and return the result array

from typing import List

class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        ROWS, COLS = len(matrix), len(matrix[0])
        left, right = 0, COLS
        top, bottom = 0, ROWS
        result = []
        
        while left < right and top < bottom:
            for i in range(left, right):
                result.append(matrix[top][i])
            top += 1
            for i in range(top, bottom):
                result.append(matrix[i][right-1])
            right -= 1

            if (not (left < right and top < bottom)):
                break

            for i in range(right - 1, left - 1, -1):
                result.append(matrix[bottom - 1][i])
            bottom -= 1

            for i in range(bottom - 1, top - 1, -1):
                result.append(matrix[i][left])
            left += 1

        return result
    
import pytest
@pytest.mark.parametrize("matrix, expected", [
    ([[1, 2, 3], [4, 5, 6], [7, 8, 9]], [1, 2, 3, 6, 9, 8, 7, 4, 5]),
    ([[1,2,3,4],[5,6,7,8],[9,10,11,12]], [1,2,3,4,8,12,11,10,9,5,6,7]),
])
def test_spiral_order(matrix, expected):
    assert Solution().spiralOrder(matrix) == expected