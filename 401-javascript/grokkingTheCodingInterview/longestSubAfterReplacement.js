const length_of_longest_substring = function (str, k) {
  let left = 0,
    currentLetters = {},
    longestString = 0,
    currentString = 0,
    maxRepeatingChar = 0;

  for (let right = 0; right < str.length; right++) {
    let rightChar = str[right];
    if (!(rightChar in currentLetters)) {
      currentLetters[rightChar] = 0;
    }
    currentLetters[rightChar]++;
    currentString++;
    maxRepeatingChar = Math.max(maxRepeatingChar, currentLetters[rightChar])

    if (currentString - maxRepeatingChar > k) {
      let leftChar = str[left]
      currentLetters[leftChar]--;
      currentString--;
      left++;

    }
    longestString = Math.max(longestString, currentString);
  }
  return Math.max(longestString, currentString);
};

console.log(length_of_longest_substring('sjhhhwwwiiwiwwshhihjh', 3), 'should be 9');

