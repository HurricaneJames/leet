import { test as testMaxHeap } from "./MaxHeap";
import { test as testMinHeap } from "./MinHeap";
import { test as testPriorityQueue } from './PriorityQueue';

function testAll() {
  testMaxHeap();
  testMinHeap();
  testPriorityQueue();
}
testAll();