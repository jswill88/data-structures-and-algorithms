'use strict';

const shift = (arr,val) => {
  let index = Math.ceil(arr.length/2);
  let newArr = arr.slice(0,index);
  newArr.push(val);
  return newArr.concat(arr.slice(index));
}

module.exports = shift;
