module.exports = function(head){
  // TODO: Write your code here
  let tortoise = head;
  let hare = head.next;

  while (tortoise !== hare) {
    tortoise = tortoise.next;
    hare = hare.next.next;
  }
  // tortoise = head;
  let loopLength = 1;
  hare = tortoise.next;
  while (tortoise !== hare) {
    hare = hare.next;
    loopLength++;
  }
  tortoise = head;
  hare = head;
  for(let i = 0; i < loopLength; i++) {
    hare = hare.next;
  }

  while(tortoise !== hare){
    hare = hare.next;
    tortoise = tortoise.next;
  }
  return hare;
};
