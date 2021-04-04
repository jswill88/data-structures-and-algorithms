const find_permutations = function (nums) {
  const result = [];
  if (nums.length < 2) return nums;
  if (nums.length === 2) {
    return [nums, [nums[1], nums[0]]];
  }
  for (let i = 0; i < nums.length; i++) {
    const filtered = nums.filter(num => num !== nums[i]);
    let subPerms = find_permutations(filtered);
    for (let permutation of subPerms) {
      result.push([nums[i], ...permutation]);
    }
  }

  return result;
};


console.log(`Here are all the permutations:`, find_permutations([1, 3, 5, 4]));
