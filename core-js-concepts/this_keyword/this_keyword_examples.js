const obj1 = {
    name: "John",
    sayName() {
      console.log(this)
    }
  }
  
  const obj2 = {
    name: "Jane",
    sayName() {
      return function() {
        console.log(this) //obj2.sayName()()
      }
    }
  }
  
  const obj3 = {
    name: "Joe",
    sayName() {
      return () => console.log(this) //
    }
  }
  
  obj1.sayName() // prints the "obj1" object 
  
  obj2.sayName()() // here, the obj2.sayName() function returns another function
  // this returned function is then called again but not by the "obj2" and the "this" keyword in traditional functions is                     dyanmically scoped(how and who calls the func) so the "this" keyword in this returned function refers to global obj
  // prints the global object
  
  obj3.sayName()() // in this case, the returned function is a arraw function and as arrow functions lexically scope the "this " keyword i.e bind the "this" keyword to the object that surrounds the arrow function
  // prints the "obj3" object
  
  const character = {
    name: 'Simon',
    getCharacter() {
      return () => this.name;
    }
  };
  const giveMeTheCharacterNOW = character.getCharacter();
  
  //How Would you fix this?
  console.log('?', giveMeTheCharacterNOW()); //this should return 'Simon' bud doesn't
  
  
  
  