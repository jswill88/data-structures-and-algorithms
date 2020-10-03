'use strict';

module.exports = ll => {

  let initialHead = ll.head;

  while(initialHead.next) {

    let oldHead = ll.head;
    let newHead = initialHead.next;
    let temp = newHead.next;
    ll.head = newHead;
    ll.head.next = oldHead;
    initialHead.next = temp;

  }

  return ll;
}


