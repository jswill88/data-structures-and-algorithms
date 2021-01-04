const Heap = require('./heap');


describe('Heap tests', () => {
  it('can create a new heap with insert', () => {
    const heap = new Heap()
    heap.insert(5);
    expect(heap.getMax()).toBe(5);
  })
  it('will bring the max to the front', () => {
    const heap = makeHeap()
    expect(heap.getMax()).toBe(9);
  })
  it('will delete the max', () => {
    const heap = makeHeap()
    expect(heap.removeMax()).toBe(9);
    expect(heap.getMax()).toBe(6);
    expect(heap.size).toBe(4)
  })
});


const makeHeap = () => {
  const heap = new Heap();
  heap.insert(5);
  heap.insert(3);
  heap.insert(2);
  heap.insert(9);
  heap.insert(6);
  return heap;
};
