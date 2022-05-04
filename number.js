export const randomNumber = (min, max) => {
  return min + Math.trunc(Math.random() * (max - min));
};

// 12356787469 => 123,567,874,6
export const formatNumber = (number, split) => {
  return number.replace(/(\d{3})/g, `$1${split}`);
  // const numberList = number.match(/.{1,3}/g);
  // return numberList.join(split);
};
