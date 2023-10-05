function test1(){
    for(var i = 0; i < 5; i++){
        console.log(i)
    }
    console.log(i) // as i is defined as a "var", it is function scoped so it will also be accessible outside the for block
}

function test2(){
    for(let i = 0; i < 5; i++){
        console.log(i)
    }
    console.log(i) // as i is defined as a "let", it is block scoped so it will not be accessible outside the for block.
}

// var is function scoped
//"let" and "const" are block scoped
// test change
