module.exports = function(arr) {
  // TODO: Write your code here
  let sorted = [...arr];
  sorted.sort((a,b) => a - b);
  let left = 0;
  let right = arr.length - 1;
  let min = -1, max = -2;

  while ((min < 0 || max < 0) && right > left){
    if (arr[right] !== sorted[right]) {
      max = right;
    } else {
      right--;
    }
    if(arr[left] !== sorted[left]) {
      min = left;
    } else {
      left++;
    }
  }

  return max - min + 1;
};
