// 155. Min Stack
// Difficulty: Medium
// Source: https://leetcode.com/problems/min-stack/
//
// Description:
// Design a stack that supports push, pop, top, and retrieving the minimum element in
// constant time.
// Implement the MinStack class:
// * MinStack() initializes the stack object.
// * void push(val) pushes the element val onto the stack.
// * void pop() removes the element on the top of the stack.
// * int top() gets the top element of the stack.
// * int getMin() retrieves the minimum element in the stack.
//
// You must implement a solution with `O(1)` time complexity for each function.
//
// Clarifying Questions:
// * What happens when we call pop() on an empty stack?
// * What happens when we call top() on an empty stack?
// * What happens when we call getMin() on an empty stack?
// * What is the possible number of things we can push onto the stack?
//
// Constraints:
// * -2^31 <= val <= 2^31 - 1
// * Methods pop, top and getMin operations will always be called on non-empty stacks.
// * At most 3 * 10^4 calls will be made to push, pop, top, and getMin.
//
// Complexity:
// * Time: O(1)
// * Space: O(n) - we keep two stacks, one for the values and one for the min values

export default class MinStack {
  stack: number[] = [];
  minStack: number[] = [];

  constructor() {}

  push(val: number): void {
    this.stack.push(val);
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(val);
    }
  }

  pop(): void {
    const popped = this.stack.pop();
    if (popped === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}
