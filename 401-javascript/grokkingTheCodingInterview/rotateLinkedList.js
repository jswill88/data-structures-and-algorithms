module.exports = function (head, rotations) {
  head = reverse(head);
  let curr = head,
    previous = null,
    i = 0;
  while (i < rotations) {
    previous = curr;
    curr = curr.next;
    if (!curr) curr = head;
    i++
  }

  previous.next = null;
  let newHead = curr;
  while (curr) {
    previous = curr;
    curr = curr.next;
  }
  previous.next = head;

  head = reverse(newHead)


  return head;
};

const reverse = head => {
  let curr = head,
    prev = null;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
};

