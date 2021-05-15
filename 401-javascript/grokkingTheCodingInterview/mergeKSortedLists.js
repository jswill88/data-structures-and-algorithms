class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const Heap = require('./collections/heap')

const merge_lists = function (lists) {

  const minHeap = new Heap([], null, (a, b) => b.value - a.value)

  for (let list of lists) minHeap.push(list)

  let head = null, curr = null;

  while (minHeap.length) { // nlogk
    const nextNode = minHeap.pop();
    if (!head) head = curr = nextNode;
    else {
      curr.next = nextNode;
      curr = curr.next;
    }
    if (nextNode.next) minHeap.push(nextNode.next)
  }

  return head;
};



const l1 = new ListNode(2)
l1.next = new ListNode(6)
l1.next.next = new ListNode(8)

const l2 = new ListNode(3)
l2.next = new ListNode(6)
l2.next.next = new ListNode(7)

const l3 = new ListNode(1)
l3.next = new ListNode(3)
l3.next.next = new ListNode(4)

let result = merge_lists([l1, l2, l3])
let output = 'Here are the elements form the merged list: ';
while (result) {
  output += result.value + ' ';
  result = result.next;
}
console.log(output);
