const Heap = require('./collections/heap');

const find_maximum_capital = function(capital, profits, numberOfProjects, initialCapital) {
  let totalCapital = initialCapital;

  const profitsMaxHeap = new Heap([], null, (a,b) => a[0] - b[0])
  const capitalMinHeap = new Heap([], null, (a,b) => b[0] - a[0])

  for(let i = 0; i < capital.length; i++) {
    capitalMinHeap.push([capital[i], i])
  }

  for (let j = 0; j < numberOfProjects; j++) {
    while(capitalMinHeap.peek() && capitalMinHeap.peek()[0] <= totalCapital) {
      const k = capitalMinHeap.pop()[1];
      profitsMaxHeap.push([profits[k], k]);
    }

    if(!profitsMaxHeap.peek()) break;

    totalCapital += profitsMaxHeap.pop()[0];
  }

  return totalCapital;
};


console.log(`Maximum capital: ${find_maximum_capital([0, 1, 2], [1, 2, 3], 2, 1)}`);
console.log(`Maximum capital: ${find_maximum_capital([0, 1, 2, 3], [1, 2, 3, 5], 3, 0)}`);
