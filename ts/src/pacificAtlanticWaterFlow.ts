// 417. Pacific Atlantic Water Flow
// Difficulty: Medium
// Source: https://leetcode.com/problems/pacific-atlantic-water-flow/
//
// Description:
// There is an `m x n` rectangular island that borders both the Pacific Ocean and Atlantic
// Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean
// touches the island's right and bottom edges.
//
// The island is partitioned into a grid of square cells. You are given an `m x n` integer
// matrix heights where `heights[r][c]` represents the height above sea level of the cell
// at coordinate `(r, c)`.
//
// The island receives a lot of rain, and the rain water can flow to neighboring cells
// directly north, south, east, and west if the neighboring cell's height is less than or
// equal to the current cell's height. Water can flow from any cell adjacent to an ocean
// into the ocean.
//
// Return a 2D list of grid coordinates `result` where `result[i] = [ri, ci]` denotes that
// rain water can flow from cell `(ri, ci)` to both the Pacific and Atlantic oceans.
//
// Clarifying Questions:
// - what if heights is empty?
// - can there be negative numbers in heights?
// - what are the bounds of rows and columns?
// - what is the max/min value for a height?
// - does the result need to be sorted in any particular order?
// - are there any time complexities we need to observe?
// - where is this going to be used, is it the right solution?
//
// Complexity:
// O((nm)^2) time / O(nm) space

export default function pacificAtlantic(heights: number[][]): number[][] {
  if (heights.length === 0 || heights[0].length === 0) return [];
  if (heights.length === 1) return heights[0].map((_, n) => [0, n]);
  const rows = heights.length;
  const cols = heights[0].length;

  const PACIFIC = 0;
  const ATLANTIC = 1;
  // O(nm) time / space
  const visited = new Array(rows).fill(0).map(() => new Array(cols).fill(false));
  // O(nm) time / space
  const canReach = new Array(rows)
    .fill(0)
    .map((_, row) => new Array(cols).fill(0).map(() => [false, false]));

  // O(nm) time / space
  function markReachable(row: number, col: number, direction: 0 | 1, prevHeight: number) {
    if (row < 0 || row >= rows || col < 0 || col >= cols) return;
    const height = heights[row][col];
    if (height < prevHeight) return;
    if (visited[row][col] || canReach[row][col][direction]) return;

    canReach[row][col][direction] = true;

    visited[row][col] = true;
    markReachable(row - 1, col, direction, height);
    markReachable(row, col - 1, direction, height);
    markReachable(row + 1, col, direction, height);
    markReachable(row, col + 1, direction, height);
    visited[row][col] = false;
  }

  // O(m) * O(nm) time / space
  for (let col = 0; col < cols; col++) {
    markReachable(0, col, PACIFIC, heights[0][col]);
    markReachable(rows - 1, col, ATLANTIC, heights[rows - 1][col]);
  }
  // O(n) * O(nm) time / space
  for (let row = 0; row < rows; row++) {
    markReachable(row, 0, PACIFIC, heights[row][0]);
    markReachable(row, cols - 1, ATLANTIC, heights[row][cols - 1]);
  }

  // O(nm) time / space
  const results: number[][] = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (canReach[row][col][PACIFIC] && canReach[row][col][ATLANTIC]) results.push([row, col]);
    }
  }
  return results;
}
