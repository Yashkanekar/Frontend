const a = () => {
    let grandpa = 'grandpa'
    return b = () => {
      let randomVar = "random" // this variable will not be stored in memory as this variable is not being referenced any of the inner functions.
      let father = 'father'
      return c = () => {
        let son = 'son'
        return `${grandpa} > ${father} > ${son}`
      }
    }
  }
  
  /** 
  - Here, when we invoke the function and assign it to a variable, the function a is run by the JS engine and returns another function b.
  - Now we know that function when it is getting invoked or executed, it will create a execution environment and also a variable envinronment which specifies what all variables we have access to.
  - So when function "a" is run and assign it to "one" grandpa variable is created and then it should get popped of the stack as it has finished running.
  
  - However if you have a function which has another function inside of and that inner function is referencing a variable in the outer function then , the JS engine will recognize the closure and save that variable inside the memory heap which we call as closure(closed over variable environment)
  
  - Now when the function "c" that references the value of "grandpa" variable is run, it first looks for the grandpa variable inside its own function scope, then it looks in the closure scope(lexical scope)and then it looks inside the global scope through the scoping chain.
  
  - NOTE:-- If a variable in the outer function is not being referenced by the innner functions, then JS engine will not save that variable inside the memory heap or in the closure.
  */
  
  const one = a()
  const two = one()
  const three = two()
  
  
  /** ############################## ANOTHER EXAMPLE ###################################### */
  
  function sayHello(){
    const say = "hey i am here"
    setTimeout(function(){
      console.log(say)
    }, 5000)
  }
  
  sayHello() // logs "hey i am here to the console"
  
  /** 
  - In this above example, when we invoke the sayHello func, the const say is initialized and then the setTimeout is called which references the "say" variable
  - setTimeout as we know when invoked gets sent to the browser/web API world and the JS thread continues to run the further code so, the sayHello function is getting invoked
  - So technically we would expect that the say variable when referenced inside the setTimeout's callback function should be undefined but it prints the correct value of say
  - This is becoz it doesnt matter even if the inner function which is referencing a variable of the outer func is going to the web API world, the variable will still be stored in closure.
  */
  
  function sayHello(){
    setTimeout(function(){
      console.log(say)
    }, 5000)
    const say = "hey i am here"
  }
  
  sayHello() // logs "hey i am here to the console"
  
  /** 
  -even if we do the above change ie declaring the say variable after the setTImeout call which references the say variable, it will not print undefined instead it will print the correct value of say
  - This is because, when the setTImeout function is sent to the web browser API, the Js engine will then add the setTImeout's callback function to the callback queue in the event loop when it returns back from the  browser API, but by that time , JS engine has finished running the further code and the value of "say" variable is available.
  */