const find_string_anagrams = function (str, pattern) {
  const frequencyMap = {};
  const result_indexes = [];
  let left = 0;
  let matches = 0;

  for (let char of pattern) {
    if (!(char in frequencyMap)) {
      frequencyMap[char] = 0;
    }
    frequencyMap[char]++;
  }

  for (let right = 0; right < str.length; right++) {
    if (str[right] in frequencyMap) {
      frequencyMap[str[right]]--;
      if (frequencyMap[str[right]] === 0) {
        matches++;
      }
    }
    if (matches === Object.keys(frequencyMap).length) {
      result_indexes.push(left);
    }
    if (right - left + 1 >= pattern.length) {
      if (str[left] in frequencyMap) {
        if (frequencyMap[str[left]] === 0) {
          matches--;
        }
        frequencyMap[str[left]]++;
      }
      left++;
    }
  }
  return result_indexes;
};

console.log(find_string_anagrams('ppqp','pq'), 'should be [1,2]');

