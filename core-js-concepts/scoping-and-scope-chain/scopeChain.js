const d = "d";

function first() {
  const a = "a";
  console.log(a); // will print "a"
  console.log(b); // will throw error as b is undefined
  console.log(c); // will throw error as c is undefined

  function second() {
    const b = "b";

    console.log(a); // will print a 
    console.log(b); // will print b
    console.log(c); // will throw error

    function third() {
      const c = "c";

      console.log(a);
      console.log(b);
      console.log(c);
    }
  }
}

/*
 Whenever a function is executed, a new execution context is created along with its variable environments (includes the variables defined inside the function) and also the variables it has access to according to its lexical (where the function is written) scope. 

 Every function also forms a link to its parent scope until it reaches the global scope.
 So it has access to all the variables defined in its parent scopes.

*/

/*
    #####---------------------------IMPORTANT---------------------------------#####
    What variables a certain function has access to is dependent on where the function is defined or written (lexical scope) rather than where it is being invoked/called/executed (dynamic scope) 
*/ 