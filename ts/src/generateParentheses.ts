// Given `n` pairs of parentheses, write a function to generate all combinations of
// well-formed parentheses.
// where: 1 <= n <= 8

export default function generateParentheses(n: number): string[] {
  const q: [string, number, number][] = [["", 0, 0]];
  const result: string[] = [];

  while (q.length > 0) {
    const [s, openCount, closedCount] = q.shift()!;
    if (s.length === n * 2) {
      result.push(s);
      continue;
    }
    if (openCount < n) {
      q.push([s + "(", openCount + 1, closedCount]);
    }
    if (closedCount < openCount) {
      q.push([s + ")", openCount, closedCount + 1]);
    }
  }

  return result;
}
