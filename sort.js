export const insertionSort = () => {};

export const selectionSort = () => {};

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
