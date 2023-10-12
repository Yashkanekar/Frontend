const wizard = {
    name: 'Merlin',
    health: 80,
    heal() {
      return this.health = 100;
    }
  }
  
  console.log(wizard.health) // logs 80
  wizard.heal()
  console.log(wizard.health) // logs 100
  
  const archer = {
    name: "mary",
    health: 50,
  }
  
  console.log(archer.health) // logs 50
  // how to borrow method of wizard to use in archer object
  
  wizard.heal.call(archer)
  wizard.heal.apply(archer)
  console.log(archer.health) // logs 100 (updated the archer health by using the heal function of wizard on archer object)
  
  /** 
  - First parameter of call is what the function should be bound to 
  - In the above example we pass the first paramter as "archer" so the "heal" function is bound to the "archer" object
  */
  
  // call() can also recieve arguments
  const wizard2 = {
    name: 'Merlin',
    health: 80,
    heal(num1, num2) {
      return this.health += num1 + num2;
    }
  }
  
  const archer2 = {
    name: "mary",
    health: 50,
  }
  
  console.log(archer2.health) // logs 50
  wizard2.heal.call(archer2, 50, 30) //pass arguments 50 and 30 to heal which accepts two numbers.
  console.log(archer2.health) // logs 80 (updated the archer health by using the heal function of wizard on archer object)
  
  /** 
  - Difference between call and apply is that "apply" passes params as an array and "call" passes params seperated by commmas.
  */
  
  wizard2.heal.apply(archer2, [50, 30]) //pass arguments 50 and 30 to heal which accepts two numbers.
  
  /** 
  - difference between "call", "apply" vs "bind" is that "bind" returns a new function that can be called later with a cartain tpye of context or certain type of this keyword, while "call" and "apply" invoke the function immediately
  */
  
  const healArcher = wizard2.heal.bind(archer, 50, 30) // binds the heal function to the archer object
  healArcher() // invokes the function
  
  
  
  
  
  
  
  