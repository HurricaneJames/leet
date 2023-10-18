import { boardToString } from "./__tests__/utils";
import isValidSudoku from "./validSudoku";

// 37. Sudoku Solver
// Difficulty: Hard
// Source: https://leetcode.com/problems/sudoku-solver/
//
// Description
// Write a program to solve a Sudoku puzzle by filling the empty cells.
// A sudoku solution must satisfy all of the following rules:
// 1. Each of the digits 1-9 must occur exactly once in each row.
// 2. Each of the digits 1-9 must occur exactly once in each column.
// 3. Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of
//    the grid.
// The '.' character indicates empty cells.
//
// Clarifying Questions:
// * do we need to consider input validation?
// * What do we do if a board is unsolvable? <it is guaranteed solvable>
// * Do you have pre-written test cases so I don't have to spend time writing them?
// * Are there any complexity constraints (time or space)?
// * Can we use built-in containers / operations (ie. Set, Map, etc.)?
//
// Constraints:
// * board.length == 9
// * board[i].length == 9
// * board[i][j] is a digit or '.'.
// * It is guaranteed that the input board has only one solution.

// ways to speed up
// 1. do not use the previously designed isValidSudoku function
//    instead we should keep an array of possible values for each row, column, and square
//    then we can check if something is valid simply by checking if those sets all contain
//    the value we are trying

// Complexity: n is the number of empty cells
//   time - O(9^n)ß
//   space - O(n)

export default function solveSudoku(board: string[][]): void {
  findRowValues(board, 0, possibleInRow(board, 0));
}

const VALID_DIGITS = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
function possibleInRow(board: string[][], row: number): Set<string> {
  if (row >= board.length) return new Set();
  const possibilities = new Set(VALID_DIGITS);
  for (let j = 0; j < 9; j++) possibilities.delete(board[row][j]);
  return possibilities;
}

function findRowValues(board: string[][], row: number, rowPossibilities: Set<string>): boolean {
  if (row >= board.length) return true;

  let pIdx = board[row].indexOf(".");
  // if nothing left in this row, check the next row
  if (pIdx < 0) return findRowValues(board, row + 1, possibleInRow(board, row + 1));

  for (let p of Array.from(rowPossibilities.values())) {
    board[row][pIdx] = p;
    rowPossibilities.delete(p);
    if (isValidSudoku(board) && findRowValues(board, row, rowPossibilities)) return true;
    board[row][pIdx] = ".";
    rowPossibilities.add(p);
  }

  return false;
}
