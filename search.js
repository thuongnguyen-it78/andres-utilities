export const linearSearch = (numberList, target) => {
  if (!Array.isArray(numberList) || numberList.length === 0) return -1;
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (number === target) return i;
  }
  return -1;
};

// sorted and really large array

// assume: numberList is a sorted array
export const binarySearchRecursive = (numberList, target, left, right) => {
  if (!Array.isArray(numberList) || numberList.length === 0) return -1;
  // base case / termination point (required for recursion)
  if (right < left) return -1;
  const mid = left + Math.trunc((right - left) / 2);
  if (numberList[mid] === target) return mid;
  // search on the right part if target is greater than mid
  if (target > numberList[mid]) {
    return binarySearch(numberList, target, mid + 1, right);
  }
  // otherwise, try to search on the left part
  return binarySearch(numberList, target, left, mid - 1);
};

export const binarySearch = (numberList, target) => {
  if (!Array.isArray(numberList) || numberList.length === 0) return -1;
  let left = 0;
  let right = numberList.length;
  while (left <= right) {
    const mid = left + Math.trunc((right - left) / 2);
    if (numberList[mid] === target) return mid;
    if (target > numberList[mid]) {
      left = mid + 1;
    } else {
      right = right - 1;
    }
  }
  return -1;
};
