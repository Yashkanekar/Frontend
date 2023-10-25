const dragon = {
    health: 100,
    breathFire() {
      console.log("fireeeeeeeeeee")
    }
  }
  
  const lizard = {
    health: 50,
    eat() {
      console.log("eat!!!!!!!")
    }
  }
  
  lizard.__proto__ = dragon
  
  for (let property in lizard){
    console.log(property) // will log health eat and breathFire as it has inherited that from the dragon  
  // it doesnt copy the properties from the prototype it just points to the same function in memory (in this way it is more memory efficient)
  }
  
  for (let property in lizard){
    if(lizard.hasOwnProperty(property){
    console.log(property) // will only log health and eat  as these are two properties which belong to the lizard object.
    }
  }
  
  