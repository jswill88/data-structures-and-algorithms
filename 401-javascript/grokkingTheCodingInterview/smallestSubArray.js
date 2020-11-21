const smallest_subarray_with_given_sum = function (arr, s) {

  let smallestSubArrayLength = Infinity;
  let currentArrayLength = 0;
  let currentSum = 0;
  let left = 0;
  let right = 0;

  for (right; right < arr.length; right++) {
    currentSum += arr[right];
    currentArrayLength++;

    while (currentSum >= s) {
      if (currentArrayLength < smallestSubArrayLength) {
        smallestSubArrayLength = currentArrayLength;
      }
      currentSum -= arr[left];
      left++;
      currentArrayLength--;

    }
  }

  return smallestSubArrayLength === Infinity ? 0 : smallestSubArrayLength;
};


console.log(smallest_subarray_with_given_sum([2, 1, 5, 2, 3, 2], 7), 'should be 2')
console.log(smallest_subarray_with_given_sum([2, 1, 5, 2, 8], 7), 'should be 1')
console.log(smallest_subarray_with_given_sum([3, 4, 1, 1, 6], 8), 'should be 3')
console.log(smallest_subarray_with_given_sum([4, 5, 3, 7, 8, 1, 10, 12], 20));

