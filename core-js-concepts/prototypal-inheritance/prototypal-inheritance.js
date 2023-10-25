/** 
- Everything in JS is an object.
- This line means that every type in JS inherits from a single base object
- Every JavaScript, objects have a special hidden property [[Prototype]]  that is either null or references another object. That object is called “a prototype”
- When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype
- The property [[Prototype]] is internal and hidden, but there are many ways to set it.
- One of them is to use the special name __proto__
*/

//example:-

let animal = {
    eats: true
  };
  let rabbit = {
    jumps: true
  };
  
  rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal
  // Now if we read a property from rabbit, and it’s missing, JavaScript will automatically take it from animal.
  
  /** 
  - If we call obj.method(), and the method is taken from the prototype, this still references obj. So methods always work with the current object even if they are inherited.
  - No matter where the method is found: in an object or its prototype. In a method call, this is always the object before the dot.  
  */
  

  // resources : https://javascript.info/prototype-inheritance