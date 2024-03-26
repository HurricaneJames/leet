import canFinish from "../courseSchedule";

describe("courseSchedule", () => {
  [
    { numCourses: 2, prereq: [], expected: true },
    { numCourses: 2, prereq: [[1, 0]], expected: true },
    {
      numCourses: 2,
      prereq: [
        [1, 0],
        [0, 1],
      ],
      expected: false,
    },
    {
      numCourses: 3,
      prereq: [
        [2, 1],
        [1, 0],
      ],
      expected: true,
    },
  ].forEach(({ numCourses, prereq, expected }) => {
    test(`${numCourses}, ${JSON.stringify(prereq)} -> ${expected}`, () => {
      expect(canFinish(numCourses, prereq)).toEqual(expected);
    });
  });
});
