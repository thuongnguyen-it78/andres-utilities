export const mapOrder = (array, order, key) => {
  array.sort((a, b) => order.indexOf(a[key]) - order.indexOf(b[key]));
  return array;
};

const itemArray = [
  { id: 1, label: "One" },
  { id: 2, label: "Two" },
  { id: 3, label: "Three" },
  { id: 4, label: "Four" },
  { id: 5, label: "Five" },
];
const itemOrder = [5, 4, 2, 3, 1];

const orderedArray = mapOrder(itemArray, itemOrder, "id");
console.log("Ordered array:", orderedArray);
/**
 * Results:
 *
 * Ordered array:
 *   [
 *  {"id":5,"label":"Five"},
 *  {"id":4,"label":"Four"},
 *  {"id":2,"label":"Two"},
 *  {"id":3,"label":"Three"},
 *  {"id":1,"label":"One"}
 *  ]
 */

// reduce(arr, callbackFn, initialValue)
// rules:
// - arr should be an array and callbackFn should be a function
// - arr.length = 0 and initialValue === undefined --> throw error
// - arr.length = 0 and initialValue !== undefined --> return initialValue
export const reduce = (arr, callbackFn, initialValue) => {
  if (!Array.isArray(arr) || typeof callbackFn !== "function") {
    throw new Error("Invalid parameters");
  }
  // arr is an array
  if (arr.length === 0) {
    if (initialValue === undefined) {
      throw new Error("Should have initialValue when arr is empty");
    }
    return initialValue;
  }
  const hasInitialValue = initialValue !== undefined;
  const startIndex = hasInitialValue ? 0 : 1;
  let accumulator = hasInitialValue ? initialValue : arr[0];
  for (let i = startIndex; i < arr.length; i++) {
    accumulator = callbackFn(accumulator, arr[i], i);
  }
  return accumulator;
};

export const findMaxReduce = (numberList) => {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;
  // let max = numberList[0];
  // numberList.forEach((number) => {
  //   if (number > max) {
  //     max = number;
  //   }
  // });
  // return numberList.reduce((max, number) => {
  // if (number > max) return number;
  // return max;
  // });
  // return numberList.reduce((max, number) => {
  // return number > max ? number : max;
  // });
  return numberList.reduce((max, number) => (number > max ? number : max));
};

export const findLongestWordReduce = (wordList) => {
  if (!Array.isArray(wordList) || wordList.length === 0) return undefined;
  return wordList.reduce((longestWord, currentWord) =>
    currentWord.length > longestWord.length ? currentWord : longestWord
  );
};
