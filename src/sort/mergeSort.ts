export const mergeSort = (array: number[]): number[] => {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle, array.length);

  const arrayLeft = mergeSort(left);
  const arrayRight = mergeSort(right);

  return merge(arrayLeft, arrayRight);
};

const merge = (left: number[], right: number[]): number[] => {
  const array: number[] = [];

  while (left.length && right.length) {
    left[0] > right[0] ? array.push(right.shift()!) : array.push(left.shift()!);
  }

  return [...array, ...left, ...right];
};

export const test = (arrayLength = 1000) => {
  console.log("Initializing array of size", arrayLength, "...");

  const testArray = new Array(arrayLength)
    .fill(0)
    .map(() => Math.floor(Math.random() * arrayLength));

  console.log("Unsorted array:", testArray);
  console.log("Starting sorting...");

  const start = performance.now();
  const sortedArray = mergeSort(testArray);

  console.log("Time:", performance.now() - start, "ms");
  console.log("Sorted array:", sortedArray);
};
