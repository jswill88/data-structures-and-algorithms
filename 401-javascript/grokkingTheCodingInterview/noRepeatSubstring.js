const non_repeat_substring = function (str) {
  let maxLength = 0,
    currentLength = 0,
    currentLetters = new Set(),
    left = 0,
    right = 0;


  for (right; right < str.length; right++) {
    currentLength++;
    if (!currentLetters.has(str[right])) {
      currentLetters.add(str[right])
    } else {
      while (str[left] !== str[right]) {
        currentLetters.delete(str[left])
        left++
        currentLength--;
      }
      left++;
      currentLength--;
    }
    maxLength = Math.max(currentLength, maxLength);
  }
  return maxLength;
};

console.log(non_repeat_substring('axxyuippy'), 'should be 5');
