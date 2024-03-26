export function boardToString(board: string[][]): string {
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

export function spliceBoards(a: string, b: string): string {
  const B = b.split("\n");
  return a
    .split("\n")
    .map((row, idx) => {
      return row + "    " + B[idx];
    })
    .join("\n");
}
