function calculate_bitwise_complement(n) {

  let inverse = 1;
  let count = 1;

  while(inverse < n) {
    inverse += (Math.pow(2, count));
    count++;
  }

  return inverse ^ n;
}

console.log(`Bitwise complement is: ${calculate_bitwise_complement(8)}`);
console.log(`Bitwise complement is: ${calculate_bitwise_complement(10)}`);
