function once(func, context) {
  let ran;
  return function () {
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null;
    }
    return ran;
  };
}

const sayHello = once(function (a, b) {
  return console.log("hello", a, b);
});

sayHello();
sayHello();
sayHello();
sayHello();
sayHello();
