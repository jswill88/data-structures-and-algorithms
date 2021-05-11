const Heap = require('collections/heap')

const rearrange_string = function(str) {
  const charFreqMap = {}
  for (let char of str) {
    if(!(char in charFreqMap)) charFreqMap[char] = 0;
    charFreqMap[char]++;
  }

  const maxHeap = new Heap([],null, ([a],[b]) => a - b)

  for(let char in charFreqMap) maxHeap.push([charFreqMap[char], char])

  const sorted = [];
  let prevChar = null, prevFreq = 0;

  while(maxHeap.length) {
    const [num, char] = maxHeap.pop();

    if(prevChar && prevFreq) {
      maxHeap.push([prevFreq, prevChar])
    }
    sorted.push(char)


    prevChar = char;
    prevFreq = num - 1;
  }

  return sorted.join('');
};


console.log(`Rearranged string: ${rearrange_string('aappp')}`)
console.log(`Rearranged string: ${rearrange_string('Programming')}`)
console.log(`Rearranged string: ${rearrange_string('aapra')}`)
