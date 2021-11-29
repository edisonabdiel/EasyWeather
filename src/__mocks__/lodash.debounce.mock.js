//Timeout custom config for the debounce lodash method 
export default (fn, ms) => {
  let timeoutId = 0;

  return (...args) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => fn(...args), ms);
  };
};
