const find_subsets = function(nums) {
  const subsets = [[]];
  for (let i = 0; i < nums.length; i++)
    for(let j = 0, k = subsets.length; j < k; j++)
      subsets.push([...subsets[j], nums[i]]);
  return subsets;
};


console.log(`Here is the list of subsets:`, find_subsets([1, 3]))
console.log(`Here is the list of subsets:`, find_subsets([1, 5, 3]));

