import numFlowersInBloom, { numFlowersInBloomUnoptimized } from "../numFlowersInBloom";

describe("numberFlowersInBloom", () => {
  const examples = [
    // [flower windows, people, expected]
    {
      flowerWindows: [
        [3, 3],
        [1, 10],
      ],
      people: [3, 3, 2],
      expected: [2, 2, 1],
    },
    {
      flowerWindows: [
        [1, 6],
        [3, 7],
        [9, 12],
        [4, 13],
      ],
      people: [2, 3, 7, 11],
      expected: [1, 2, 2, 2],
    },
  ];
  describe("examples", () => {
    examples.forEach(({ flowerWindows, people, expected }, idx) => {
      it(`${idx}: ${expected}`, () => {
        expect(numFlowersInBloom(flowerWindows, people)).toEqual(expected);
      });
      it(`${idx}: ${expected} (unoptimized)`, () => {
        expect(numFlowersInBloomUnoptimized(flowerWindows, people)).toEqual(expected);
      });
    });
  });
});
