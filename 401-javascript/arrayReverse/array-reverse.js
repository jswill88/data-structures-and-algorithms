'use strict';

let testArrayOne = [1, 2, 3, 4, 5, 6];
let testArrayTwo = [89, 2354, 3546, 23, 10, -923, 823, -12];
let testArrayThree = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199];

const arrayReverse = (arr) => {
  let reversedArray = [];
  for(let i = 0; i < arr.length; i++) {
    reversedArray.unshift(arr[i])
  }
  return reversedArray;
}

console.log('1st VERSION - FOR LOOP')
console.log('Original', testArrayOne);
console.log('Reversed', arrayReverse(testArrayOne));
console.log('Original', testArrayTwo);
console.log('Reversed', arrayReverse(testArrayTwo));
console.log('Original', testArrayThree);
console.log('Reversed', arrayReverse(testArrayThree));

// Stretch Goal - Recursive version

const recursiveReverse = (arr, reverse = []) => {
  if (arr.length === 0) {
    return reverse;
  } else {
    reverse.unshift(arr[0])
    return arrayReverse(arr.slice(1), reverse);
  }
}
console.log('2nd VERSION - RECURSIVE')
console.log('Original', testArrayOne);
console.log('Reversed', recursiveReverse(testArrayOne));
console.log('Original', testArrayTwo);
console.log('Reversed', recursiveReverse(testArrayTwo));
console.log('Original', testArrayThree);
console.log('Reversed', recursiveReverse(testArrayThree));

