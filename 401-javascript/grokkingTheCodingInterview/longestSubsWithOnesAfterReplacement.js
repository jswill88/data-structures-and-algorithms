const length_of_longest_substring = function (arr, k) {
  let frequencyMap = [0, 0],
    left = 0,
    maxLength = 0;

  for (let right = 0; right < arr.length; right++) {
    frequencyMap[arr[right]]++;

    if (frequencyMap[0] > k) {
      frequencyMap[arr[left]]--;
      left++;
    }
    maxLength = Math.max(right - left + 1, maxLength);
  }

  return maxLength;
};

console.log(length_of_longest_substring([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2), 'should be 6');


console.log(length_of_longest_substring([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3), 'should be 9')