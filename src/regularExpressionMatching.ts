// Given an input string `s` and a pattern `p`, implement regular expression matching with
// support for '.' and '*', where:
// * '.' matches any single character.
// * '*' matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).

// space: O(nm) for dp table
// time: O(nm) because we will never recompute something already in the table

export default function isMatch(s: string, p: string): boolean {
  // memo[sPos][pPos]
  const memo: boolean[][] = new Array(s.length + 1) // go a little over for overflow
    .fill(undefined)
    .map((_) => new Array(p.length + 1).fill(false));
  memo[s.length][p.length] = true;
  for (let i=s.length; i >= 0; i--) {
    for (let j=p.length - 1; j >=0; j--) {
      const firstMatch = i < s.length && (p[j] === '.' || p[j] === s[i]);
      if (j+1 < p.length && p[j+1] === '*') {
        memo[i][j] = memo[i][j+2] || (firstMatch && memo[i+1][j]);
      } else {
        memo[i][j] = firstMatch && memo[i+1][j+1];
      }
      // console.log(memo.map(r => r.map(c => c === undefined ? 'x' : !!c ? '+' : '-').join(' ')).join('\n'));
      // console.log('***** ***** *****')
    }
  }
  return memo[0][0];
}

function isMatchTopDown(s: string, p: string): boolean {
  let cacheHits = 0;
  // memo[sPos][pPos]
  const memo = new Array(s.length + 1) // go a little over for overflow
    .fill(undefined)
    .map((_) => new Array(p.length + 1).fill(undefined));
  function dp(i: number, j: number) {
    if (memo[i][j] === undefined) {
      let res = false;
      if (j === p.length) {
        res = i === s.length;
      } else {
        let firstMatch = i < s.length && (p[j] === "." || p[j] === s[i]);
        if (j + 1 < p.length && p[j + 1] === "*") {
          res = dp(i, j + 2) || (firstMatch && dp(i + 1, j));
        } else {
          res = firstMatch && dp(i + 1, j + 1);
        }
      }
      memo[i][j] = res;
    } else { cacheHits++; }
    return memo[i][j];
  }
  console.log('cacheHits: ', cacheHits);
  const result = dp(0, 0);
  // dump memo
  // console.log(memo.map(r => r.map(c => c === undefined ? 'x' : !!c ? '+' : '-').join(' ')).join('\n'));
  return result;
}
