export const insertionSort = () => {};

export const selectionSort = (numberList) => {
  if (!Array.isArray(numberList) || numberList.length === 0) return numberList;

  for (let i = numberList.length; i > 0; i--) {
    let max = numberList[0];
    let index = 0;
    for (let j = 1; j < i; j++) {
      if (numberList[j] > max) {
        max = numberList[j];
        index = j;
      }
    }
    numberList.splice(index, 1);
    numberList.push(max)
  }

  return numberList
};

export const buddleSort = (numberList) => {
  // Idea: Put the biggest element to the top of the array in each loop

  if (!Array.isArray(numberList) || numberList.length === 0) return numberList;
  // for (let i = 0; i < numberList.length; i++) {
  //   for (let j = 0; j < numberList.length - i; j++) {
  //     if (numberList[j] > numberList[j + 1]) {
  //       const temp = numberList[j];
  //       numberList[j] = numberList[j + 1];
  //       numberList[j + 1] = temp;
  //     }
  //   }
  // }

  for (let i = numberList.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (numberList[j] > numberList[j + 1]) {
        // [numberList[j], numberList[j + 1]] = [numberList[j + 1], numberList[j]];
        const temp = numberList[j];
        numberList[j] = numberList[j + 1];
        numberList[j + 1] = temp;
      }
    }
  }

  return numberList;
};

export const quickSort = () => {};
