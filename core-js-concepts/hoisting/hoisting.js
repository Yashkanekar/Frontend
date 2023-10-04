/*  "var" is partially hoisted in JS (memory is allocated for "var" but it is initialized to "undefined" which is an actual type in JS)
    "function" are completed hoisted (memory is allocated in the creation phase and the funtion definition is also stored in that memory)

    "let" and "const" are also hoisted but they are not initialized to "undefined" like var so if you try to access any 'let' or "const" before defining or initializing it, JS will throw error as "cannot access before initialization"
  */ 



/* here, first we have defined favFood = maggi in the global scope
so when JS engine goes inside the showFavFood function, the var favFood is partially hoisted;
so inside the "showFavFood" function scope, the Js engine will know in the creation phase that favFood variable exists and it is initialized to "undefined" due to partial hoisting of "var " and hence the first console.log will print "undefined"

before the second console.log, we assign value to favFood as sushi so second console log will display "sushi".
*/

var favFood = "maggi";

function showFavFood() {
    console.log("My fav food is"+ favFood);

    var favFood = "fried rice"

    console.log("new fav food is"+ favFood)
}

showFavFood()
