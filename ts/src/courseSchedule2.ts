// 210. Course Schedul II
// Difficulty: Medium
// Source: https://leetcode.com/problems/course-schedule-ii/
//
// Description:
// There are a total of `numCourses` courses you have to take, labeled from `0` to
// `numCourses - 1`. You are given an array `prerequisites` where
// `prerequisites[i] = [ai, bi]` indicates that you must take course `bi` first if you
// want to take course `ai`.
// * For example, the pair `[0, 1]`, indicates that to take course `0` you have to first
//   take course `1`.
// Return the ordering of courses you should take to finish all courses. If there are
// many valid answers, return any of them. If it is impossible to finish all courses,
// return an empty array.
//
// Clarifying Questions:
// * What happens when there are no prerequisites?
// * What happens when there are no courses?
// * What happens when a prerequisite is not in the numCourses range?
// * Are there duplicates in the prerequisites?
// * Is there a target complexity solution?
//
// Constraints:
// * 1 <= numCourses <= 2000
// * 0 <= prerequisites.length <= numCourses * (numCourses - 1)
// * prerequisites[i].length == 2
// * 0 <= ai, bi < numCourses
// * ai != bi
// * All the pairs [ai, bi] are distinct.

export default function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const inDegree: number[] = Array(numCourses).fill(0);
  const graph: number[][] = Array(numCourses)
    .fill(0)
    .map(() => []);
  prerequisites.forEach(([course, prereq]) => {
    graph[course].push(prereq);
    inDegree[prereq]++;
  });
  const queue: number[] = [];
  inDegree.forEach((degree, course) => {
    if (degree === 0) queue.push(course);
  });
  const result: number[] = [];
  while (queue.length > 0) {
    const course = queue.shift()!;
    result.unshift(course);
    for (let prereq of graph[course]) {
      inDegree[prereq]--;
      if (inDegree[prereq] === 0) queue.push(prereq);
    }
  }
  if (result.length !== numCourses) return [];

  return result;
}
