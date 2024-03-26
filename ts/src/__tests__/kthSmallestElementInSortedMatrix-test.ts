import kthSmallestElementInSortedMatrix, {
  kthSmallestNoHeap,
} from "../kthSmallestElementInSortedMatrix";

describe("kthSmallestElementInSortedMatrix", () => {
  // [1, 5, 9, 10, 11, 12, 13, 13, 15] (flat sorted)
  const matrix = [
    [1, 5, 9],
    [10, 11, 13],
    [12, 13, 15],
  ];
  const kthExpected: [number, number][] = [
    [1, 1],
    [2, 5],
    [6, 12],
    [8, 13],
    [9, 15],
  ];

  it("should return the kth smallest", () => {
    kthExpected.forEach(([kth, expected]) => {
      expect(kthSmallestElementInSortedMatrix(matrix, kth)).toEqual(expected);
    });
  });

  it("should return the kth smallest (no heap)", () => {
    kthExpected.forEach(([kth, expected]) => {
      expect(kthSmallestNoHeap(matrix, kth)).toEqual(expected);
    });
  });
});
