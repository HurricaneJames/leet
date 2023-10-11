import { isEqualMark } from "./testHelpers";

type Node<T> = {
  val: T,
  priority: number,
}

type ComparisonOp<T> = (a: T, b: T) => number;
// a priority queue based on MinHeap (ie. lower priority number => higher priority)
export class PriorityQueue<T> {
  
  values: Node<T>[] = [];
  compare: ComparisonOp<Node<T>>

  constructor(compare: ComparisonOp<Node<T>> = (a, b) => a.priority - b.priority) {
    this.compare = compare;
  }

  enqueue(val: T, priority: number) {
    let newNode = { val, priority };
    this.values.push(newNode);
    let index = this.values.length - 1;
    const current = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (this.compare(parent, current) > 0 ) {
        this.values[parentIndex] = current;
        this.values[index] = parent;
        index = parentIndex;
      } else break;
    }
  }

  dequeue() {
    if (this.values.length === 0) return undefined;
    if (this.values.length <= 2) return this.values.shift();

    const min = this.values[0];
    const end = this.values.pop()!;
    this.values[0] = end;

    let index = 0;
    const length = this.values.length;
    const current = this.values[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;

      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (this.compare(leftChild, current) <= 0) swap = leftChildIndex;
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && this.compare(rightChild, current) < 0) ||
          (swap !== null && this.compare(rightChild, leftChild!) < 0)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = current;
      index = swap;
    }

    return min;
  }

  toArray() {
    const backup = [...this.values];
    let output = []
    let item;
    while ((item = this.dequeue()) !== undefined) {
      output.push(item.val);
    }
    this.values = backup;
    return output;
  }
}

export function testPriorityQueue() {
  const pq = new PriorityQueue<number>();
  pq.enqueue(3, 2);
  pq.enqueue(4, 5);
  pq.enqueue(31, 1);
  pq.enqueue(1, 2); // priority queue does not maintain insertion order :p
  pq.enqueue(6, 3);

  const output = pq.toArray();
  console.log('%s PriorityQueue: %o', isEqualMark(output, [31, 1, 3, 6, 4]), output);
}
export function test() {
  testPriorityQueue();
}