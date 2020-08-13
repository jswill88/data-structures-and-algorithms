# data-structures-and-algorithms
This repository is for daily coding challenges in Code 301. Each day, make a new pull request to the master branch, and submit the PR URL in Canvas. Add solutions to the challenges, but do not modify the tests.

### [Reverse an Array](./401-javascript/arrayReverse/array-reverse.js)
#### Challenge
A function that will reverse the order of an array without using built in functions.

#### Approach & Efficiency
I worked out two seperate solutions. One using a for loop and one using recursion.

### [Array Shift](./401-javascript/arrayShift/array-shift.js)
#### Challenge
A function that will add a value to the middle of a given array.

#### Approach & Efficiency
I found the middle point of the array, then split the array with slice, pushed in the given value, and concatted the rest of the array.  

test with `npm test arrayShift`

### [Array Binary Search](./401-javascript/arrayBinarySearch/array-binary-search.js)
#### Challenge
This function finds the index of a value in a sorted array. It returns that index. If the value is not in the array, the function will return -1.

#### Approach & Efficiency
We found the middle index of the array, checked if the value matched, was higher, or was lower, than the number at that index. Then we only tested the half that contained the number. We split the array in half until we matched the number or found out that the number was not in the array.

test with `npm test arrayBinarySearch`