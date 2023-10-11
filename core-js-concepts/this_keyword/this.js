/*

- The this keyword in JS refers to the object of which the function is a property of
- By default the value of the "this" keyword is set to the global object, which is the window object in the browser and the global object in node.js.
- If the "this" keyword is called inside a function which is a property of a custom user defined object then the this keyword refers to that user defined object.

*/

console.log(this) // global object (window in browser/ global object in nodejs)


// example 1
const obj = {
  name: "John",
  getName: function() {
    console.log(this) // obj
  }
}
obj.getName()

// example 2
const obj2 = {
  name: "john",
  sing() {
    console.log("a", this) // prints the obj2 object
    var anotherFunc = function() {
      console.log("b", this) // prints the global/window object even though it is written inside a object
    }
    anotherFunc()
  }
}
obj2.sing()

/* 
- As seen in example 2, the "anotherFunc" function is defined inside the obj2 object still its this refers to the global object
- This is because as we discussed earlier, In javascript our lexical scope (available data + variables where the data was defined) determines our available variables and not the dynamic scope i.e. where the function was called
- This is true for everything except the this keyword; the "this" keyword is dynamically scoped so it doesnt matter where the function was written it matters how the function was called.

*/

// example 3
const obj3 = {
  name: "John",
  sing() {
    console.log("a", this) // prints the obj3 object
    var anotherFunc = () => {
      console.log("b", this) // prints the obj3 object
    }
    anotherFunc()
  }
}
obj3.sing()


/*
- Arrow functions lexically bind "this" i.e "this" will refer to the object that surrounds "this"

- Difference of "this" keyword in normal function and arrow function is that in normal functions, this is dynamically scoped(how it is called) and in arrow functions, it is lexically scoped(where it was written)
*/
  