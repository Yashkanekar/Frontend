function woohoo() {
    console.log('woohoo')
  }
  
  /** 
  - Functions in Javascript are objects
  - Under the hood the above function "woohoo" will look something like:-
  
    const spclObj = {
      name: (optional)
      code(): the function code,
      arguments: 
      some other properties like : call(), apply(), bind() etc 
    }
  */
  
  console.log(woohoo.prototype)
  
  const dataFunction = () => {
    console.log("hey there!")
  }
  
  function a(fn){
    fn()
  }
  
  a(dataFunction)