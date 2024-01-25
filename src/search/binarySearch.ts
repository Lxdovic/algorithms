export const binarySearch = (arr: number[], target: number) => {
  let left = 0;
  let right = arr.length - 1;
  let mid = 0;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    if (arr[mid] > target) right = mid - 1;
  }
  return -1;
};

export const binarySearchRecursive = (
  arr: number[],
  target: number,
  left: number = 0,
  right: number = arr.length - 1,
): number => {
  if (left > right) return -1;

  const mid = Math.floor((left + right) / 2);

  console.log("mid:", mid);

  if (arr[mid] == target) return mid;
  if (arr[mid] < target)
    return binarySearchRecursive(arr, target, mid + 1, right);
  if (arr[mid] > target)
    return binarySearchRecursive(arr, target, left, mid - 1);

  return -1;
};

export const test = (
  arrayLength: number = 30_000_000,
  target: number = Math.floor(Math.random() * arrayLength),
) => {
  console.log("Initializing array with", arrayLength, "items...");

  const testArray = [];

  for (let i = 0; i < arrayLength; i++) {
    testArray.push(i);
  }

  console.log("Starting search...");

  const start = performance.now();
  const index = binarySearchRecursive(testArray, target);

  console.log("Time:", performance.now() - start, "ms");
  console.log("Answer:", index);
  console.log("Answer is:", testArray[index] == target);
};
