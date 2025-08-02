function myMemoize(fn, context) {
  const res = {};
  return function (...args) {
    // rest operator combine all the rest parameters into an array
    const argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args); // spread operator so individual elems get passed
    }
    return res[argsCache];
  };
}

const memoizedProduct = myMemoize(function product(a, b) {
  return a * b;
});

console.time("one");
memoizedProduct(2, 3);
console.timeEnd("one");
console.time("two");
memoizedProduct(2, 3);
console.timeEnd("two");
