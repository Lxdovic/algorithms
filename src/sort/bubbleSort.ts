export const bubbleSort = (array: number[]) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        const next = array[j + 1];

        array[j + 1] = array[j];
        array[j] = next;
      }
    }
  }

  return array;
};

export const test = (arrayLength = 1000) => {
  console.log("Initializing array of size", arrayLength, "...");
  const testArray = new Array(arrayLength)
    .fill(0)
    .map(() => Math.floor(Math.random() * arrayLength));

  console.log("Unsorted array:", testArray);
  console.log("Starting sorting...");

  const start = performance.now();
  const sortedArray = bubbleSort(testArray);
  console.log("Time:", performance.now() - start, "ms");
  console.log("Sorted array:", sortedArray);
};
