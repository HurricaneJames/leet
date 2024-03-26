import PriorityQueue from "../PriorityQueue";

describe("PriorityQueue", () => {
  it("should return items in priority order", () => {
    const pq = new PriorityQueue<number>();
    pq.enqueue(3, 2);
    pq.enqueue(4, 5);
    pq.enqueue(31, 1);
    pq.enqueue(1, 2); // priority queue does not maintain insertion order :p
    pq.enqueue(6, 3);

    const output = pq.toArray();
    expect(output).toEqual([31, 1, 3, 6, 4]);

    // console.log('%s PriorityQueue: %o', isEqualMark(output, ), output);
  });
  it("should report if there are more elements", () => {
    const pq = new PriorityQueue<number>();
    expect(pq.hasNext()).toBeFalsy();

    pq.enqueue(3, 2);
    expect(pq.hasNext()).toBeTruthy();

    pq.dequeue();
    expect(pq.hasNext()).toBeFalsy();
  });
});
