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

function getIntersectionSet(set1, set2) {
  const intersectionSet = new Set();
  for (const item of set1) {
    if (set2.has(item)) intersectionSet.add(item);
  }
  return intersectionSet;
}

function uniqueNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  const uniqueNumberSet = new Set(numberList);
  // return Array.from(uniqueNumberSet);
  return [...uniqueNumberSet];
}

const cityList = [
  { id: 1, name: "TP. Hồ Chí Minh" },
  { id: 2, name: "TP. Phan Thiết" },
];

const studentList = [
  { id: 123, name: "Alice", cityId: 1 },
  { id: 321, name: "Bob", cityId: 2 },
];

// Question: how to show city name for each student?
// using forEach
// const cityMap = new Map();
// cityList.forEach((city) => {
//   cityMap.set(city.id, city);
// });

// or using reduce
const cityMap = cityList.reduce((map, city) => {
  map.set(city.id, city);
  return map;
}, new Map());

cityMap.get(1).name; // TP. Hồ Chí Minh
cityMap.get(2).name; // TP. Phan Thiết

// ============================================================================

export function findMostFrequentNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return;
  undefined;
  const statistics = {};
  let maxKey = undefined;
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    // update statistics
    statistics[number] =
      statistics[number] === undefined ? 1 : statistics[number] + 1;
    // check maxKey
    if (maxKey === undefined || statistics[number] > statistics[maxKey]) {
      maxKey = number;
    }
  }
  return Number.parseInt(maxKey);
}

// ============================================================================

const statisticList = [
  { name: "name1", count: 1 },
  { name: "name1", count: 1 },
  { name: "name2", count: 2 },
  { name: "name2", count: 2 },
  { name: "name3", count: 1 },
];

function groupStatisticList(statisticList) {
  if (!Array.isArray(statisticList) || statisticList.length === 0) return [];

  const count = statisticList.reduce((map, statistic) => {
    map[statistic.name] = (map[statistic.name] || 0) + statistic.count;
    return map;
  }, {});

  return Object.keys(count).reduce((result, key) => {
    result.push({
      name: key,
      count: count[key],
    });
    return result;
  }, []);
}

// ==============================================================================
function nextBiggest(arr) {
  let max1 = -Infinity,
    max2 = -Infinity;
  for (const value of arr) {
    if (value > max1) {
      [max2, max1] = [max1, value];
    }
    if (value < max1 && value > max2) {
      max2 = value;
    }
  }
  return max2;
}
const arr = [220, 220, 121, 215, 54, 78];
console.log(nextBiggest(arr));

// ==============================================================================

// (numberList [2,3,4,5,6,2], target 5) => [0, 1]
export const getPositionOne = (numberList, target) => {
  for (let i = 0; i < numberList.length; i++) {
    for (let j = i + 1; j < numberList.length; j++) {
      if (numberList[i] + numberList[j] === target) {
        return [i, j];
      }
    }
  }
};

export const getPositionTwo = (numberList, target) => {
  const visited = {};
  for (let i = 0; i < numberList.length; i++) {
    const currentValue = numberList[i];
    const remainValue = target - numberList[i];
    if (visited[remainValue] !== undefined) {
      return [i, visited[remainValue]];
    }

    visited[currentValue] = i;
  }
};

// ==============================================================================
// const list = [1, 2, 3, 4, 1, 2, 5, 2]

// const newList = [[1, 1], [2, 2, 2], [3], [4], [5]]

export const transformList = (list) => {
  const newList = list.reduce((result, item) => {
    result[item] ? result[item].push(item) : (result[item] = [item]);
    return result;
  }, {});

  return Object.values(newList);
};
