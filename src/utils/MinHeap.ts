export default class MinHeap {
  values: number[] = [];

  addAll(elements: number[]) {
    elements.forEach(elem => this.add(elem));
  }

  add(element: number) {
    this.values.push(element);
    let index = this.values.length - 1;
    const current = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (parent >= current) {
        this.values[parentIndex] = current;
        this.values[index] = parent;
        index = parentIndex;
      } else break;
    }
  }

  pop(): number | undefined {
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
        if (leftChild < current) swap = leftChildIndex;
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild < current) ||
          (swap !== null && rightChild < leftChild!)
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
}


