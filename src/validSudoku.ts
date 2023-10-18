// 36. Valid Sudoku
// Difficulty: Medium
// Source: https://leetcode.com/problems/valid-sudoku/
//
// Description:
// Determine if a `9x9` Sudoku board is valid. Only the filled cells need to be validated
// according to the following rules:
// 1. Each row must contain the digits `1-9` without repetition.
// 2. Each column must contain the digits `1-9` without repetition.
// 3. Each of the 9 `3x3` sub-boxes of the grid must contain the digits `1-9` without
//    repetition.
// Note:
// * A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// * Only the filled cells need to be validated according to the mentioned rules.
//
// Clarifying Questions:
// * do we need to consider input validation (ie. not just a 9x9 grid, or not just
// [0-9] + '.' as input)?
// * Are we looking for a specific performance profile (ie. time complexity, space)?
// * Do you have pre-written test cases so I don't have to spend time writing them?
// * Can we use built-in collections, like Set?

// Perf: the main algorithm is technically O(n^2) time, O(n) space, where n is the length
//       of a side. However, a valid board is exactly 9x9, and can only be 9x9 according
//       to the rules, so this is techically O(81), which is O(1).

export default function isValidSudoku(board: string[][]): boolean {
  const rows = board.length;
  const cols = board[0].length;
  if (rows !== 9 || cols !== 9) throw new Error("Invalid board size");

  const squareSets = new Array(rows * cols).fill(null).map(() => new Set<string>());
  const colSets = new Array(cols).fill(null).map(() => new Set<string>());
  // O(n^2) time, O(n) space (where n is the length of a row or col)
  for (let rowIdx = 0; rowIdx < rows; rowIdx++) {
    const rowSet = new Set<string>();
    // O(n) time, O(1) space
    for (let colIdx = 0; colIdx < cols; colIdx++) {
      const cell = board[rowIdx][colIdx];
      if (cell === ".") continue;

      const squareIdx = Math.floor(rowIdx / 3) * cols + Math.floor(colIdx / 3);
      if (rowSet.has(cell)) return false;
      if (colSets[colIdx].has(cell)) return false;
      if (squareSets[squareIdx].has(cell)) return false;
      rowSet.add(cell);
      colSets[colIdx].add(cell);
      squareSets[squareIdx].add(cell);
    }
  }
  return true;
}
