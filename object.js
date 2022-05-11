export const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

export const isEqual = (obj1, obj2) => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
}