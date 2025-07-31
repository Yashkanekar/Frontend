//map
/**
arr.map((item, index, arr)=>{
 
}) 
 */
 

Array.prototype.myMap = function (cb){
    let temp = []
    for(let i =0; i< this.length; i++){
        temp.push(cb(this[i], i, this))
    }

    return temp
}

const arr = [1,2,3,4]
const newArr = arr.myMap((item, index, array)=>{
    return item+1
})

console.log(newArr)