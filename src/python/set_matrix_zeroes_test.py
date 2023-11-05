# 73. Set Matrix Zeroes
# Difficulty: Medium
# Source: https://leetcode.com/problems/set-matrix-zeroes/
#
# Description:
# Given an `m x n` integer matrix `matrix`, if an element is `0`, set its entire row and
# column to `0`'s, and return the matrix.
# You must do it in place.
#
# Clarifying Questions:
# * can the matrix be empty?
# * what is the range of len(matrix) and len(matrix[0])?
# * what is the range of values in the matrix?
#
# Constraints:
# * `m == matrix.length`
# * `n == matrix[i].length`
# * `1 <= m, n <= 200`
# * `-2^31 <= matrix[i][j] <= 2^31 - 1`
#
# Follow up:
# * A straightforward solution using `O(mn)` space is probably a bad idea.
# * A simple improvement uses `O(m + n)` space, but still not the best solution.
# * Could you devise a constant space solution?
#
# Solution Discussion:
# The brute force solution would be to copy the matrix and identify all 0s, then expand them.
# A better solution would be to keep a pair of "mask" arrays that say whether the row/col
# needs to be set to 0. This would require O(m + n) space, but keep the algorithm at O(mn)
# time.
# We can reduce memory consumption even more by reusing the first row and column of the
# matrix as the mask arrays. We just need to be careful of the overlap at matrix[0][0].
# Instead, we only use the first column from 1..end and keep a separate `temp` variable to
# represent whether or not to blank row 0.
#
# Complexity:
# Time: O(mn) as we walk the matrix twice
# Space: O(1)

from typing import List


class Solution:

    def setZeroes(self, matrix: List[List[int]]) -> None:
        ROWS, COLS = len(matrix), len(matrix[0])

        # process the first row first because of the special row/col overlap on 0, 0
        # we could also handle this with an if statment in the main loop, but that adds
        # a branch at every cell where we do not need it
        zeroInFirstRow = False
        for i in range(COLS):
            if (matrix[0][i]) == 0:
                zeroInFirstRow = True
        for row in range(1, ROWS):
            for col in range(COLS):
                if matrix[row][col] == 0:
                    matrix[0][col] = 0
                    matrix[row][0] = 0
        
        for row in range(1, ROWS):
            for col in range(1, COLS):
                if (matrix[0][col] == 0 or matrix[row][0] == 0):
                    matrix[row][col] = 0
        if matrix[0][0] == 0:
            for i in range(ROWS):
                matrix[i][0] = 0
        if zeroInFirstRow:
            for i in range(COLS):
                matrix[0][i] = 0

import pytest
@pytest.mark.parametrize("matrix, expected", [
    ([[1,1,1],[1,0,1],[1,1,1]], [[1,0,1],[0,0,0],[1,0,1]]),
    ([[0,1,2,0],[3,4,5,2],[1,3,1,5]], [[0,0,0,0],[0,4,5,0],[0,3,1,0]]),
])
def test_set_zeroes(matrix, expected):
    Solution().setZeroes(matrix)
    assert matrix == expected
        