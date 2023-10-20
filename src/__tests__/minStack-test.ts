import MinStack from "../minStack";

describe("minStack", () => {
  [
    {
      operator: ["MinStack", "push", "push", "push", "getMin", "pop", "top", "getMin"],
      operand: [[], [-2], [0], [-3], [], [], [], []],
      expected: [null, null, null, null, -3, null, 0, -2],
    },
  ].forEach(({ operator, operand, expected }, idx) => {
    test(`${idx}: `, () => {
      let minStack: MinStack | null = null;
      let result: number | null | undefined;
      for (let i = 0; i < operator.length; i++) {
        switch (operator[i]) {
          case "MinStack":
            minStack = new MinStack();
            result = null;
            break;
          case "push":
            operand[i].forEach((o) => minStack?.push(o));
            result = null;
            break;
          case "pop":
            minStack?.pop();
            result = null;
            break;
          case "getMin":
            result = minStack?.getMin();
            break;
          case "top":
            result = minStack?.top();
            break;
          default:
            throw new Error(`Unknown Operator: ${operator[i]}`);
        }
        expect(result).toEqual(expected[i]);
      }
    });
  });
});
