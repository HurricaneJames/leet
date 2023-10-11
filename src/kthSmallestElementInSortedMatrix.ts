
const matrix = [
  [1, 5, 9],
  [10, 11, 13],
  [12, 13, 15],
];
// const x = [1, 5, 9, 10, 11, 12, 13, 13, 15];

const expected: [number, number][] = [
  [1, 1],
  [2, 5],
  [6, 12],
  [8, 13],
  [9, 15],
];

function kthSmallest(matrix: number[][], kth: number): number {
  // time
  // flat() => O(n)
  // sort() => O(n^2) worst | O(nlog(n)) average
  // sm[kth - 1] => O(1)
  // -> total: O(n^2) | O(nLog(n)) average
  // space
  // flat =. O(n)
  // sort => O(log(n))
  // total => O(n)
  const sm = matrix.flat().sort((a, b) => a - b);
  return sm[kth - 1];
}

function main() {
  expected.forEach(([kth, expect]) => {
    const result = kthSmallest(matrix, kth);
    console.log(`kthSmallest(${kth}) = ${result} ${result === expect ? '==' : '!='} ${expect}`)
  });
}
main();