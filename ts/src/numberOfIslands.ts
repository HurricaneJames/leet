// 200. Number of Islands
// Difficulty: Medium
// Source: https://leetcode.com/problems/number-of-islands/
//
// Description:
// Given an `m x n` 2D binary grid, `grid`, which represents a map of `'1'`s (land) and
// `'0'`s (water), return the number of islands.
//
// An island is surrounded by water and is formed by connecting adjacent lands horizontally
// or vertically. You may assume all four edges of the grid are all surrounded by water.
//
// Clarifying Questions:
// * if an empty grid, is it alright to return 0?
// * does water need to be on diagonals to count (problem says islands form horizontally
//   and vertically, but it does not say that it counts as an island without the diagonals)
// * can we modify the grid?
// * Is there a target complexity?
// * what if a grid cell is not a 1 or 0?
//
// Constraints:
// * `m == grid.length`
// * `n == grid[i].length`
// * `1 <= m, n <= 300`
// * `grid[i][j]` is `'0'` or `'1'`
//
// Complexity:
// * Time: O((n * m)^2)
// * Space: O(n * m)

const LAND = "1";
const VISITED_LAND = "2";

export default function numIslands(grid: string[][]): number {
  if (grid.length === 0 || grid[0].length === 0) return 0;
  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  // O(n * m) time and space
  function dfs(row: number, col: number) {
    if (row < 0 || row >= rows || col < 0 || col >= cols) return;
    if (grid[row][col] === LAND) {
      grid[row][col] = VISITED_LAND;
      dfs(row - 1, col);
      dfs(row + 1, col);
      dfs(row, col - 1);
      dfs(row, col + 1);
    }
  }

  // O((nm)^2) time and O(nm) space
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === LAND) {
        count++;
        dfs(row, col);
      }
    }
  }
  return count;
}
