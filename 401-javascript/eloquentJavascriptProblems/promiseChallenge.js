function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    let counter = promises.length;
    if (counter === 0) resolve(promises)
    promises.forEach((prom, i) => {
      prom.then(res => {
        promises[i] = res;
        counter--;
        if (counter === 0) resolve(promises)
      })
        .catch(e => reject(e))
    });
  });
}

// Test code.
promiseAll([]).then(array => {
  console.log('This should be []:', array);
});
function soon(val) {
  return new Promise(resolve => {
    setTimeout(() => resolve(val), Math.random() * 500);
  });
}
promiseAll([soon(1), soon(2), soon(3)]).then(array => {
  console.log('This should be [1, 2, 3]:', array);
});
promiseAll([soon(1), Promise.reject('X'), soon(3)])
  .then(() => {
    console.log('We should not get here');
  })
  .catch(error => {
    if (error !== 'X') {
      console.log('Unexpected failure:', error);
    }
  });
