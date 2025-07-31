// - The "prototype" property is only available on functions


Function.prototype // refers to the base function object
Function.prototype.__proto__ //refers to the base object above which is null

function myFunc () {
  console.log("hey")
}
myFunc.prototype // refers to the base function object

Object.prototype // this might be confusing but yes "Object" also has a prototype property
typeof Object // prints "function" (since it has a prototype property, "Object" is a function)

const obj = {} // when we do something like this underneath the hood js has to create an object it uses the Object constructor.

obj.__proto__ // refers to the base object
Object // this is a function as it has a prototype property and also it is a constructor for creating a object wrapper
Object.prototype // refers to the base object.