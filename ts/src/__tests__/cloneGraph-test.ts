import cloneGraph from "../cloneGraph";
import { graphFromAdjList, toAdjList } from "../utils/GraphNode";

describe("cloneGraph", () => {
  [
    { adj: [] },
    { adj: [[]] },
    { adj: [[2], [1]] },
    {
      adj: [
        [2, 3],
        [1, 3],
        [1, 2],
      ],
    },
    {
      adj: [
        [2, 4],
        [1, 3],
        [2, 4],
        [1, 3],
      ],
    },
  ].forEach(({ adj }) => {
    test(`${JSON.stringify(adj)}`, () => {
      const graph = graphFromAdjList(adj);
      const clone = cloneGraph(graph);
      expect(toAdjList(clone)).toEqual(adj);
      if (graph !== null) expect(clone).not.toBe(graph);
    });
  });
});
