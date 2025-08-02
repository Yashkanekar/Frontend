// implement a func which can sum(1)(2)(3)...(n)

function sum(a) {
  return function (b) {
    if (b) return sum(a + b);
    return a;
  };
}

console.log(sum(1)(2)(3)(4)());
