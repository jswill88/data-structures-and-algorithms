module.exports = function(nums) {
  let i = 0;
  while(i < nums.length) {
    let j = nums[i] - 1;
    if(nums[i] === nums[j] && j !== i) return nums[i];
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
  }
  return -1;
};
