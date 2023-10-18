import validSudoku from "../validSudoku";

describe("validSudoku", () => {
  [
    {
      board: [
        ["5", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"],
      ],
      expected: true,
    },
    {
      board: [
        ["8", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"],
      ],
      expected: false,
    },
  ].forEach(({ board, expected }, idx) => {
    it(`${idx}: Board - expected: ${expected}\n${boardToString(board)}\n`, () => {
      expect(validSudoku(board)).toEqual(expected);
    });
  });
});

function boardToString(board: string[][]): string {
  const rowSep = "|-------|-------|-------|";
  return board
    .reduce(
      (buf, row, idx) => {
        buf.push(
          row
            .reduce(
              (out, col, idx) => {
                out.push(col);
                if (idx % 3 === 2) out.push("|");
                return out;
              },
              ["|"] as string[]
            )
            .join(" ")
        );
        if (idx % 3 === 2 && idx < board.length - 1) buf.push(rowSep);
        return buf;
      },
      ["-".repeat(rowSep.length)] as string[]
    )
    .concat("-".repeat(rowSep.length))
    .join("\n");
}
