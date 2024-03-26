import MinHeap from "./utils/MinHeap";

// total perf: O(n * log(n) + k * log(n)) => O((n+k)log(n)) =(since k <=n)=> O(n*log(n))
// total space: O(n)
export default function kthSmallestElementInSortedMatrix(matrix: number[][], kth: number): number {
  // todo input validation if kth > matrix.sumRowLengths then throw
  if (kth < 0) throw new Error("invalid input, kth must be greater than 0");
  // m - # rows | k - # cols

  // O(n * log(n)) // where n is # of elements in matrix (ie. n = m*k)
  // space (O(n) elements in heap)
  const heap = matrix.reduce((acc, row) => {
    // O(k log(k))
    acc.addAll(row);
    return acc;
  }, new MinHeap());
  let result = heap.pop();
  // O(k * log(n)) // k elements to remove * log(n) ops to remove element
  for (let i=1; i<kth; i++) { result = heap.pop(); }
  if (kth === undefined) throw new Error('Invalid input, kth must be less than number of elements in matrix');
  return result!;
}

// Time: O(n^2) | Space: O(n)
export function kthSmallestNoHeap(matrix: number[][], kth: number): number {
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

