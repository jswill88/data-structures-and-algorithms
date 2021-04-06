const Deque = require('./collections/deque')

const find_letter_case_string_permutations = function(str) {
  const permutations = new Deque(['']);

  for (let i = 0; i < str.length; i++) {
    let j = permutations.length;
    for (let k = 0; k < j; k++) {
      let currentPerm = permutations.shift();
      if(/[A-Z]/i.test(str[i])) {
        permutations.push(currentPerm + str[i].toLowerCase());
        permutations.push(currentPerm + str[i].toUpperCase());
      }
      else permutations.push(currentPerm + str[i]);
    }

  }
  return permutations.toArray();
};


console.log(`String permutations are: ${find_letter_case_string_permutations('ad52')}`)
console.log(`String permutations are: ${find_letter_case_string_permutations('ab7c')}`);
