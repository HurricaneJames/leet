// 892. Alien Dictionary
// Difficulty: Hard
// Source: https://leetcode.com/problems/alien-dictionary/
//
// Description:
// There is a new alien language which uses the latin alphabet. However, the order among
// letters are unknown to you. You receive a list of non-empty words from the dictionary,
// where words are sorted lexicographically by the rules of this new language. Derive the
// order of letters in this language.
//
// Clarifying Questions:
// What if words is empty?
// Could words contain duplicates?
// What are the bounds of words.length?
// What are the bounds of words[i].length?
// Do words contain upper and lowercase, and are they considered the same lexographically?
// Do we need to validate the constraints of the input? (ie. assume input is not validated)
// Is it possible that some characters have equal lexigraphical weight? What is the output
//   if they are?
//
// Constraints:
// * 1 <= words.length <= 100
// * 1 <= words[i].length <= 100
// * words[i] consists of only lowercase English letters.
//
// Complexity Analysis:
// O(V + E + (nm)) time / O(V) space
// where n = words.length, V = number of unique characters, E = number of edges
// m = average length of each word
// and we know that E is related to mn, so the whole thing is O(V + mn) time

type GraphNode = {
  val: string;
  inbound: number;
  children: string[];
};
export default function alienOrder(words: string[]): string {
  if (words.length === 0) return "";

  // put V in graph
  const graph = new Map<string, GraphNode>();
  words.forEach((word) => {
    word.split("").forEach((char) => {
      if (!graph.has(char)) {
        graph.set(char, { val: char, children: [], inbound: 0 });
      }
    });
  });

  // add edges
  for (let i = 0; i < words.length - 1; i++) {
    // invalid dictionary ordering
    if (words[i].length > words[i + 1].length && words[i].startsWith(words[i + 1])) return "";
    const [a, b] = findDifferentChar(words[i], words[i + 1]);
    if (a !== "") {
      graph.get(a)!.children.push(b);
      graph.get(b)!.inbound++;
    }
  }

  // find possible start nodes since this could be a disconnected graph
  const startNodes = getStartNodes(graph);
  // if there are none, we know there is a cycle
  if (startNodes.length === 0) return "";

  // toposort of each start node
  const results = startNodes.map((node) => topoSort(graph, node));

  // we know nothing about the order of these results, so we can just join them as that is
  // a valid solution
  return results.join("");
}

// find the first different character between two strings and return the pair
// return ["", ""] if no different characters are found or if a is a prefix of b
// O(|word|) time
function findDifferentChar(a: string, b: string): [string, string] {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return [a[i], b[i]];
  }
  return ["", ""];
}

// O(V + E) time / O(V) space
function topoSort(graph: Map<string, GraphNode>, root: GraphNode): string {
  // O(1) time / O(V) space
  let visited = new Set<string>();
  let visiting = new Set<string>();

  // O(E) time / O(V) space (recursive stack)
  function _topoSort(graph: Map<string, GraphNode>, node: string): string {
    if (visiting.has(node)) throw new Error("loop");
    if (visited.has(node)) return "";
    visiting.add(node);

    const results = graph
      .get(node)!
      .children.reduce((acc, child) => acc + _topoSort(graph, child), "");
    visiting.delete(node);
    visited.add(node);
    return results + node;
  }
  // toposort postfix traversal
  // for all children, acc += toposort(child) + root.val
  let result = "";
  try {
    result = _topoSort(graph, root.val);
  } catch (e) {
    return "";
  }

  // O(V) time / O(V) space
  return result.split("").reverse().join("");
}

// O(V) time / O(V) space
function getStartNodes(graph: Map<string, GraphNode>): GraphNode[] {
  const startNodes = [];
  for (let node of graph.values()) {
    if (node.inbound === 0) startNodes.push(node);
  }
  return startNodes;
}
