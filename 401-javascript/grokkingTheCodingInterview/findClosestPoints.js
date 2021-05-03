const Heap = require('./collections/heap')

class Point {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  distFromOrigin() {
    return Math.sqrt((this.x * this.x) + (this.y * this.y))
  }

  get_point() {
    return '[' + this.x + ', ' + this.y + '] ';
  }
}

const find_closest_points = function(points, k) {
  const heap = new Heap([], null, (a,b) => {
    return a.distFromOrigin() - b.distFromOrigin;
  })

  for(let i = 0; i < k; i++) {
    heap.push(points[i]) // O(KlogK) - time, O(k) - space
  }

  for(let j = k; j < points.length; j++) { // O ((n - k)log(n - k))
    if(points[j].distFromOrigin() < heap.peek().distFromOrigin()) {
      heap.pop();
      heap.push(points[j])
    }
  }

  return heap.toArray();
};
// k log k + (n - k)log(k)
// n Log k

const points = find_closest_points([new Point(1, 3), new Point(3, 4), new Point(2, -1)], 2)
let result = 'Here are the k points closest the origin: ';
for (let i=0; i < points.length; i++)
  result += points[i].get_point();
console.log(result);
