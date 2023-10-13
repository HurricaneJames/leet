// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of
// rows like this: (you may want to display this pattern in a fixed font for better legibility)
//
// P   A   H   N
// A P L S I I G
// Y   I   R
//
// And then read line by line: "PAHNAPLSIIGYIR"
// Write the code that will take a string and make this conversion given a number of rows:
// 
// string convert(string s, int numRows);

// NOTE: could also solve this by checking the frequency, then taking that frequence for rows 0
//       and last, and 0, (intermediate freq), last for the middle rows
//       it has the potential to be slightly faster because it isn't pushing into multiple arrays
//       but overall order and psace complexity is the same

// perf: O(n) / space: O(n)
export default function convert(s: string, numRows: number): string {
  const sLength = s.length;
  if (sLength < 3 || sLength <= numRows) return s;
  let j = 0;
  let rows: string[][] = new Array(numRows).fill(undefined).map((_) => []);
  while (j < sLength) {
    for (let i = 0; i < numRows; i++) {
      rows[i].push(s[j++]);
    }
    for (let i = 0; i < numRows - 2; i++) {
      rows[numRows - 2 - i].push(s[j++]);
    }
  }
  return rows.map((r) => r.join("")).join("");
}
