// 207. Course Schedule
// Difficulty: Medium
// Source: https://leetcode.com/problems/course-schedule/
//
// Description:
// There are a total of `numCourses` courses you have to take, labeled from `0` to
// `numCourses - 1`. You are given an array `prerequisites` where
// `prerequisites[i] = [ai, bi]` indicates that you must take course `bi` first if you
// want to take course `ai`.
//
// * For example, the pair `[0, 1]`, indicates that to take course `0` you have to first
// take course `1`.
// Return `true` if you can finish all courses. Otherwise, return `false`.
//
// Clarifying Questions:
// * What happens when there are no prerequisites?
// * What happens when there are no courses?
// * What happens when a prerequisite is not in the numCourses range?
// * Are there duplicates in the prerequisites?
// * Is there a target complexity solution?
// * What is the maximum number of courses?
// * What happens if a course requires itself?
//
// Constraints:
// * 1 <= numCourses <= 2000
// * 0 <= prerequisites.length <= 5000
// * prerequisites[i].length == 2
// * 0 <= ai, bi < numCourses
// * All the pairs prerequisites[i] are distinct.
//
// Solution:
// Create an array to quickly look up the pre-reqs for each course. We do not need to use
// this. We could do an O(n) search on the `prerequisites` array every time we want to get
// the prereqs for a course. So, if we are memory bound, there is a compute solution.
//
// We also want to create another array to keep track of the in-degree for each course. We
// use this to know how many other courses directly rely on any given course as a pre-req.
// There is no way to avoid using this memory. We could shift it elsewhere, but ultimately
// we will need to have an O(n) storage to know if a node was included in the solution.
//
// The trick to this solution is to work backwards. If a solution exists, we know that any
// course that has `0` in-degree can come after courses that are requirements for other
// courses. So we remove all of them and reduce the in-degree for everything it requires.
// Any of those courses that now have `0` in-degree can now come after any other course.
// So we stick that on our queue to process.
//
// Once we have processed everythign in the queue, we know we have all the courses that
// can come after every other course. If there are any left in the queue, it is because
// they are a pre-req for a course that is a pre-req for them.
//
// We could modify this algorithm to return a valid walk as well. Instead of decrementing
// numCourses, we could push the course onto a stack. Then, when done processing courses,
// reverse the stack to get the walk. If the walk is the same length as numCourses, we
// have a valid solution. (see this solution implemented in courseSchedul2.ts).

export default function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const graph: number[][] = new Array(numCourses).fill(0).map(() => []);
  const inDegree: number[] = new Array(numCourses).fill(0);
  prerequisites.forEach(([course, prereq]) => {
    inDegree[prereq]++;
    graph[course].push(prereq);
  });
  const q: number[] = inDegree.reduce((memo, degree, idx) => {
    if (degree === 0) memo.push(idx);
    return memo;
  }, [] as number[]);
  while (q.length > 0) {
    const cur = q.shift()!;
    numCourses--;
    for (let prereq of graph[cur]) {
      inDegree[prereq]--;
      if (inDegree[prereq] === 0) q.push(prereq);
    }
  }
  return numCourses === 0;
}
