// implement a function which can do sum(1)(2)(3)
function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// console.log(sum(1)(2)(3));

/**
 * implement a function which can do evaluate("sum")(1)(2)
                                  evaluate("subtract")(1)(2)
                                  evaluate("divide")(1)(2)
                                  evaluate("product")(1)(2)
 * 
 * 
 * 
 */

function sum(operation) {
  return function (a) {
    return function (b) {
      switch (operation) {
        case "sum":
          return a + b;
        case "subtract":
          return a + b;
        case "multiply":
          return a + b;
        case "divide":
          return a + b;
        default:
          return "invalid operation";
      }
    };
  };
}

console.log(sum("sum")(1)(2));
