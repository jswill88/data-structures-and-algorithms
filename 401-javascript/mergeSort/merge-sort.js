'use strict';

module.exports = arr => {
  const n = arr.length;
  if (n < 2) { return; }

  const mid = Math.floor(n / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, n);

  module.exports(left);
  module.exports(right);

  const _merge = () => {
    let [i, j, k] = [0,0,0];
    while (i < left.length && j < right.length) {
      arr[k++] = left[i] <= right[j] ? left[i++] : right[j++];
    }
    const _endOfArr = (LR, idx) => { while (k < n) { arr[k++] = LR[idx++]; } }
    i === left.length ? _endOfArr(right, j) : _endOfArr(left, i);
  }

  _merge();
}

