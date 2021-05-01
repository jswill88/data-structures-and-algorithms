function flip_and_invert_image(matrix) {
  const lineLength = matrix[0].length

  for (let i = 0; i < matrix.length; i++) {
    const arr = matrix[i]
    let left = 0, right = lineLength - 1;
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      arr[left] ^= 1;
      arr[right] ^= 1;
      left++;
      right--;
    }
    if (arr.length % 2) arr[left] ^= 1;
  }
  return matrix
}

console.log(flip_and_invert_image([[1, 0, 1], [1, 1, 1], [0, 1, 1]]))
console.log(flip_and_invert_image([[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]]));
