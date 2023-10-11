import MinHeap from "./utils/MinHeap";

export default function kthSmallestElementInSortedMatrix(matrix: number[][], kth: number): number {
  // todo input validation if kth > matrix.sumRowLengths then throw
  if (kth < 0) throw new Error("invalid input, kth must be greater than 0");
  const heap = matrix.reduce((acc, row) => {
    acc.addAll(row);
    return acc;
  }, new MinHeap());
  let result = heap.pop();
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

