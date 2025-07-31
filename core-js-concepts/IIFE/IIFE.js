/*
- An IIFE is a immediately invoked function expression
- IIFE is used to wrap private data and avoid polluting the global namespace or avoiding the use of global variables
- IIFE isolates the variables defined within themselves from the surroundings.
- Another usecase of IIFE is when you have to initialize some functionality or state IIFE will help because it is executed immediately
- Since the introduction of block scoped variables like "let" & "const" in ES6, and the module pattern, the popularity of IIFE has decreased.
*/

(function myIIFE(msg){
    console.log(msg)
  })("hello")
  
  // traditional functions:-
  
  const myTradFunc = () => {
    const num = 10; // this var will be scoped to the function i.e only accessible within the function
                    // however by using techniques like closures, we can still be able to access this variable outside of the function
  }
  
  //IIFE:-
  
  (function newIIFE (){
    const num = 10; // this variable is a private data which is only available within the scope of the IIFE
                    // we cannot even access it outside of the IIFE using closures as the function is immediately being executed.
  }())
  
  
  //ChatGPT QnA:-
  /*
  Traditional functions are not invoked immediately upon declaration. They require an explicit function call using their name followed by parentheses. This means that the variables and functions defined within a traditional function are isolated within the scope of that function, but they can still be accessed and executed later when the function is called.
  
  On the other hand, IIFEs are immediately invoked as soon as they are encountered in the code. This immediate execution creates a self-contained scope for the variables and functions defined within the IIFE. Once the IIFE is executed, the variables and functions are no longer accessible from the surrounding code.
  
  In traditional functions, variables can be accessed at a later stage when the function is invoked by using closures. Closures allow inner functions to access variables from their outer function even after the outer function has finished executing. This mechanism enables traditional functions to maintain access to variables even outside their scope.
  
  However, with IIFEs, the variables defined within them are not accessible from the surrounding code, even with closures. This is because IIFEs are immediately invoked and their execution completes before the surrounding code continues. As a result, the variables defined within an IIFE are not accessible from the outer scope, including through closures.
  
  This behavior of IIFEs is one of the ways they help isolate variables defined within themselves from the surrounding code. By executing immediately and creating their own scope, IIFEs prevent access to their variables outside of that scope, thereby providing a higher level of encapsulation and isolation. This can be useful for creating private variables or avoiding naming conflicts with variables in the surrounding code.
  
  */