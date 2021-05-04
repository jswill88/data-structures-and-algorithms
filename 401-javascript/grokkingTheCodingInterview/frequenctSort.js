const Heap = require('collections/heap')

const sort_character_by_frequency = function (str) {
  const charMap = {}
  for (let char of str) {
    if (!(char in charMap)) charMap[char] = 0;
    charMap[char]++
  }

  const maxHeap = new Heap([], null, (a, b) => {
    if (a[0] === b[0]) {
      return b[2] - a[2]
    }
    return a[0] - b[0]
  })

  Object.entries(charMap).map(([character, num], i) => {
    maxHeap.push([num, character, i])
  })
  let result = ''
  while(maxHeap.length) {
    let currChar = maxHeap.pop();
    for(let i = 0; i < currChar[0]; i++) {
      result += currChar[1]
    }
  }
  return result;
};


console.log(`String after sorting characters by frequency: ${sort_character_by_frequency('Programming')}`)
console.log(`String after sorting characters by frequency: ${sort_character_by_frequency('abcbab')}`)
