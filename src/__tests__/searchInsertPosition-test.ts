import searchInsert from "../searchInsertPosition";

describe("searchInsertPosition", () => {
  [
    { nums: [1, 3, 5, 6], target: 0, result: 0 },
    { nums: [1, 3, 5, 6], target: 1, result: 0 },
    { nums: [1, 3, 5, 6], target: 6, result: 3 },
    { nums: [1, 3, 5, 6], target: 7, result: 4 },
    { nums: [1, 3, 5, 6], target: 5, result: 2 },
    { nums: [1, 3, 5, 6], target: 2, result: 1 },
    { nums: [1], target: 0, result: 0 },
    { nums: [1, 3], target: 0, result: 0 },
    { nums: [1, 3], target: 2, result: 1 },
    { nums: [1, 3, 5], target: 3, result: 1 },
    { nums: [1, 3, 5], target: 4, result: 2 },
  ].forEach(({ nums, target, result }) => {
    it(`[${nums}], ${target} -> ${result}`, () => {
      expect(searchInsert(nums, target)).toEqual(result);
    });
  });
  it("should time comapison", () => {
    const nums = Array.from({ length: 1000000 }, (_, i) => i);
    const target = 999999;
    let start = Date.now();
    expect(searchInsert(nums, target)).toEqual(999999);
    let end = Date.now();
    expect(nums.findIndex((num) => num === target)).toEqual(999999);
    let endFindIndex = Date.now();
    console.log("Binary Search: %oms ", end - start);
    console.log("Find Index:    %oms ", endFindIndex - end);
  });
});
