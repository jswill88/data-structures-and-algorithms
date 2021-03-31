const find_subsets = function(nums) {
  const subsets = [[]];
  const usedNums = new Set()
  for(let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const k = subsets.length;
    for(let j = 0; j < k; j++) {
      if(!usedNums.has(currentNum) || subsets[j].includes(currentNum)) {
        subsets.push([...subsets[j], currentNum]);
      }
    }
    usedNums.add(currentNum);
  }
  console.log(subsets)
  return subsets;
};


console.log(`Here is the list of subsets: ${find_subsets([1, 3, 3])}`)
console.log(`Here is the list of subsets: ${find_subsets([1, 5, 3, 3])}`);
