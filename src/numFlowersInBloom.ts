import MinHeap from "./utils/MinHeap";

type FlowerBloomWindow = number[];

// order analysis
//   m - # flowers
//   n - # people

// constraints
//   flowers[i].length === 2
//   flowers.length < 5k
//   people.length < 5k
//   nondestructive (I added this)

// flowers - [startTime: number, endTime: number][] - array of tuples of start/end times that are inclusive
// people - array of times people arrive
// Time: O(m*log(m) + n*log(n) + n + m * log(m)) => O(m*log(m) + n*log(n))
// Space: O(m + n)
export default function numFlowersInBloom(
  flowers: FlowerBloomWindow[],
  people: number[]
): number[] {
  // non-descrictive copy & sort by start times
  // sort: O(m*log(m))
  const flowersX = flowers
    .map((flowerWindow) => [...flowerWindow])
    .sort((a, b) => a[0] - b[0]);
  const output = people.reduce<{ [id: string]: number }>((acc, person) => {
    acc[person] = 0;
    return acc;
  }, {});
  // sort: O(n*log(n))
  const peopleX = Object.keys(output)
    .map((i) => parseInt(i, 10))
    .sort((a, b) => a - b);
  let curFlower = 0;

  const heap = new MinHeap();

  // O(n + m * log(m)))
  // O(m + n)
  for (let curPerson of peopleX) {
    // add any flowers that already started blooming
    // O(m * log(m)) time/space
    while (
      curFlower < flowersX.length &&
      flowersX[curFlower][0] <= curPerson
    ) {
      heap.add(flowersX[curFlower][1]);
      curFlower++;
    }

    // remove things that have stopped blooming
    // O(m * log(m))
    while (heap.values.length > 0 && heap.values[0] < curPerson) {
      // remove non-blooming flowers
      heap.pop();
    }
    // record remaining
    output[curPerson] = heap.values.length;

  }

  // map back to people
  // O(n)
  return people.map((person) => output[person]);
}

// time: O(n * O(flowersAtTime)) => O(mn)
// space: O(n)
export function numFlowersInBloomUnoptimized(
  flowers: FlowerBloomWindow[],
  people: number[]
): number[] {
  return people.map((arrivalTime) => flowersAtTime(flowers, arrivalTime));
}

// O(m)
function flowersAtTime(flowers: FlowerBloomWindow[], atTime: number): number {
  return flowers.reduce((acc, flowerWindow) => {
    if (atTime >= flowerWindow[0] && atTime <= flowerWindow[1]) return acc + 1;
    return acc;
  }, 0);
}
