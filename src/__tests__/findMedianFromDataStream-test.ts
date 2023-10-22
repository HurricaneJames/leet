import MedianFinder from "../findMedianFromDataStream";

describe("findMedianFromDataStream", () => {
  [
    {
      command: [
        "MedianFinder",
        "addNum",
        "findMedian",
        "addNum",
        "findMedian",
        "addNum",
        "findMedian",
      ],
      params: [[], [1], [], [2], [], [3], []],
      output: [null, null, 1, null, 1.5, null, 2],
    },
    {
      command: ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"],
      params: [[], [1], [2], [], [3], []],
      output: [null, null, null, 1.5, null, 2],
    },
    {
      command: ["MedianFinder", "addNum", "addNum", "addNum", "addNum", "findMedian"],
      params: [[], [1], [2], [3], [1], []],
      output: [null, null, null, null, null, 1.5],
    },
    {
      command: [
        "MedianFinder",
        "addNum",
        "findMedian",
        "addNum",
        "findMedian",
        "addNum",
        "findMedian",
        "addNum",
        "findMedian",
        "addNum",
        "findMedian",
      ],
      params: [[], [-1], [], [-2], [], [-3], [], [-4], [], [-5], []],
      output: [null, null, -1, null, -1.5, null, -2, null, -2.5, null, -3],
    },
  ].forEach(({ command, params, output }) => {
    test(`${JSON.stringify(command)}, ${JSON.stringify(params)} -> ${JSON.stringify(
      output
    )}`, () => {
      let medianFinder: MedianFinder | null = null;
      command.forEach((command, i) => {
        switch (command) {
          case "MedianFinder":
            medianFinder = new MedianFinder();
            break;
          case "addNum":
            params[i].forEach((param) => medianFinder?.addNum(param));
            break;
          case "findMedian":
            expect(medianFinder?.findMedian()).toEqual(output[i]);
            break;
          default:
            throw new Error(`Unknown command: ${command}`);
        }
      });
    });
  });
});
