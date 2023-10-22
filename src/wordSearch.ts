// 79. Word Search
// Difficulty: Medium
// Source: https://leetcode.com/problems/word-search/
//
// Description:
// Given an `m x n` grid of characters, `board`, and a string, `word`, return `true` if
// `word` exists in the grid.
// The word can be constructed from letters of sequentially adjacent cells, where adjacent
// cells are horizontally or vertically neighboring. The same letter cell may not be used
// more than once.
//
// Clarifying Questions:
// * What if we receive an empty board?
// * What if we receive an empty word?
// * What are the max dimensions of a board?
// * Do board cells have more than a single letter?
// * What charsets do we need to consider?
//
// Constraints:
// * `m == board.length`
// * `n = board[i].length`
// * `l === word.length`
// * `1 <= m, n <= 6`
// * `1 <= word.length <= 15`
// * `board` and `word` consists of only lowercase and uppercase English letters.
//
// Follow-up Questions:
// * could you use search pruning to make your solution faster with a larger `board`?
//
// Complexity Analysis:
// O(m * n * 4^l) time complexity, O(m * n + l) space complexity
export default function exist(board: string[][], word: string): boolean {
  const rows = board.length;
  const cols = board[0].length;

  // O(m * n) time/space complexity
  const visited: boolean[][] = new Array(rows).fill(0).map(() => new Array(cols).fill(false));

  // O(4^l) time complexity, O(l) space complexity
  function dfs(row: number, col: number, index: number): boolean {
    if (row < 0 || row >= rows || col < 0 || col >= cols) return false;
    if (board[row][col] !== word[index]) return false;
    if (visited[row][col]) return false;

    visited[row][col] = true;
    const nextIdx = index + 1;

    // O(4^l) time complexity, O(l) space complexity
    const result =
      nextIdx === word.length ||
      dfs(row + 1, col, nextIdx) ||
      dfs(row - 1, col, nextIdx) ||
      dfs(row, col + 1, nextIdx) ||
      dfs(row, col - 1, nextIdx);
    if (result) return true;

    visited[row][col] = false;
    return false;
  }

  // O(m * n * 4^l) time complexity, O(l) space complexity
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // dfs from board[row][col]
      if (dfs(row, col, 0)) return true;
    }
  }
  return false;
}
