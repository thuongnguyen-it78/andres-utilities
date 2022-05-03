// call after a period of time receiving no trigger
export const debounce = (callback, ms) => {
  let timeoutId;
  return () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback();
    }, ms);
  };
};

// trigger max 1 call in a period of time
export const throttle = (callback, ms) => {
  let isThrotting = false;
  return () => {
    if (isThrotting) return
    isThrotting = true
    setTimeout(() => {
        callback()
        isThrotting = false
    }, ms)
  };
};
