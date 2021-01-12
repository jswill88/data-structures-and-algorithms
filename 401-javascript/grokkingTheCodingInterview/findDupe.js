const findDupe = function(nums) {
  let i = 0;
  while(i < nums.length) {
    let j = nums[i] - 1;
    if(nums[i] === nums[j] && j !== i) return nums[i];
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
  }
  return -1;
};

const find_all_duplicates = function(nums) {
  const duplicateNumbers = [];
  let i = 0;
  while (i < nums.length) {
    let j = nums[i] - 1;
    if (nums[i] === nums[j]) i++
    else [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  for(i = 0; i < nums.length; i++) {
    if(nums[i] - 1 !== i) duplicateNumbers.push(nums[i]);
  }
  return duplicateNumbers;
};

module.exports = { findDupe, find_all_duplicates };

