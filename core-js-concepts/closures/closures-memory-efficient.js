const heavyDuty = (index) => {
    const bigArray = new Array(7000).fill('labad')
    console.log('created!');
    return bigArray[index]
  }
  
  // here every time we call the heavyduty function, the bigarray is being created for each and every execution of the heavy duty function
  // this is not memory efficient
  
  const heavyDuty2 = (index) => {
    const bigArray = new Array(7000).fill('sham')
    console.log('created Again!')
    return () => bigArray[index]
  }
  
  // here we use closures and reference the bigarray variable inside the heavyDuty2 function so due to lexical scope or closures, the bigArray variable is stored by the JS engine in the memory as it is referenced in the inner function 
  // so here the bigArray variable is not being created and destroyed again and again  
  
  
  heavyDuty(688)
  heavyDuty(688)
  heavyDuty(688)
  const getHeavyDuty = heavyDuty2()
  getHeavyDuty(688)
  getHeavyDuty(700)
  getHeavyDuty(800)
        