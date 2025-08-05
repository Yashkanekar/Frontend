/*
arr.filter((item, index, array)=>{
    return some condition which if the item satisfies then it is kept in the output array else it is removed 
})

*/

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, arr)) temp.push(this[i]);
  }
  return temp;
};

const arr = [1, 2, 3, 4];
const newArr = arr.myFilter((item, i, array) => {
  return item > 2;
});

console.log(newArr);
console.log("this", this);

function fn1(value) {
  let a = [];
  for (let i = 0; i < 100000; i++) {
    a[i] = i * i;
  }

  return function () {
    console.log(value);
  };
}
