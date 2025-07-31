// reduce the iven array into a single value
/*
arr.reduce((accumulator, item, index, array)=>{

}, initialValue)

*/

const arr = [1, 2, 3, 4];

Array.prototype.myReduce = function (cb, initialValue) {
  var accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

const sum = arr.myReduce((acc, item, index, array) => {
  return acc + item;
}, 0);

console.log(sum);
