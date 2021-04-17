class ArrayReader {

  constructor(arr) {
    this.arr = arr;
  }

  get(index) {
    if (index >= this.arr.length)
      return Number.MAX_SAFE_INTEGER;
    return this.arr[index]
  }
}


const search_in_infinite_array = function(reader, key) {
  let min = 0,
    max = 1;
  while(reader.get(max) < key) {
    max *= 2;
  }
  while(max >= min) {
    const mid = Math.floor(min + (max - min)/2);
    const curr = reader.get(mid)
    if (curr === key) return mid;
    if (curr > key) max = mid - 1;
    else min = mid + 1;
  }
  return -1;
};

var reader = new ArrayReader([4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]);
console.log(search_in_infinite_array(reader, 16))
console.log(search_in_infinite_array(reader, 11))
reader = new ArrayReader([1, 3, 8, 10, 15])
console.log(search_in_infinite_array(reader, 15))
console.log(search_in_infinite_array(reader, 200))
