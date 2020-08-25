# data-structures-and-algorithms
This repository is for daily coding challenges in Code 301. Each day, make a new pull request to the master branch, and submit the PR URL in Canvas. Add solutions to the challenges, but do not modify the tests.

### [Reverse an Array](./401-javascript/arrayReverse/array-reverse.js)
#### Challenge
A function that will reverse the order of an array without using built in functions.

#### Approach & Efficiency
I worked out two seperate solutions. One using a for loop and one using recursion.

### [Array Shift](./401-javascript/arrayShift/array-shift.js)
#### Challenge
A function that will add a value to the middle of a given array.

#### Approach & Efficiency
I found the middle point of the array, then split the array with slice, pushed in the given value, and concatted the rest of the array.  

test with `npm test arrayShift`

### [Array Binary Search](./401-javascript/arrayBinarySearch/array-binary-search.js)
#### Challenge
This function finds the index of a value in a sorted array. It returns that index. If the value is not in the array, the function will return -1.

#### Approach & Efficiency
We found the middle index of the array, checked if the value matched, was higher, or was lower, than the number at that index. Then we only tested the half that contained the number. We split the array in half until we matched the number or found out that the number was not in the array.

test with `npm test arrayBinarySearch`  

### [Linked List](./401-javascript/Data-Structures/linkedList/linked-list.js)
#### Challenge
The goal was to make a Linked List class with the ability to add nodes to the beginning, check if a value exists in the node, and return a string with the values of all the nodes in the list.
#### Approach & Efficiency
To go through the list for the includes() and toString() methods I used `while(currentNode)` because at the end of the loop, currentNode would equal `null`.

### [Linked List - Insert](./401-javascript/Data-Structures/linkedList/linked-list.js)
#### Challenge
The goal was to expand on our linked list class to all to append to the end of the list, and insert before or after a given value in the list.
#### Approach & Efficiency
I searched through the list to see where the value of a node matched the given value and inserted the new value before or after based on what function was called. I searched for the next of null at the end of the list to append an item.

### [Linked List - Kth From End](./401-javascript/Data-Structures/linkedList/linked-list.js)

#### Challenge
Make a method for the linked list that will find the value of an element in the kth from the end node.

#### Approach and Efficiency
I had to go through the linked list to find out how long the list is. From there, I went through the list again, up to the node that the correct value was in, and returned that value.

### [Linked List - Zip](./401-javascript/llZip/ll-zip.js)

#### Challenge
Make a function that will take two linked lists, zip them together, and return a variable pointing at the new linked list.

#### Approach and Efficiency
We made a new linked list, and we started with the heads of both lists. We then added the values of each list as we traversed them, and ended up with all the values from both lists.

### [Stacks and Queues](./401-javascript/Data-Structures/stacksAndQueues/stacks-and-queues.js)

#### Challenge
Write a stack and queue class with working methods.

#### Approach and Efficiency
It was specified to use a Linked List type of class to make the new classes. All the methods were done in a way to keep Big O at O(1).

#### API
__Stack__  
- push() - Takes a value as an argument and adds it to the top of the stack
- pop() - Takes no arguments. Removes the top item from the stack and returns the value
- peek() - Takes no arguments. Returns the top value
- isEmpty() - Takes no arguments. Returns true if the stack is empty and false if it is no empty

__Queue__
- enqueue() - Takes a value as an argument and adds it the the end of the queue.
- dequeue() - Takes no arguments. Removes the item from the front of the queue and returns the value
- peek() - Takes no arguments. Returns the value of the item in the front of the queue
- isEmpty() - Takes no arguments. Returns true if the queue is empty and false if it is no empty

### [Queue with Stacks](./401-javascript/queueWithStacks/queue-with-stacks.js)
#### Challenge
Write a queue with only enqueue and dequeue methods that only uses two stacks to store the data.
#### Approach and Efficiency
I put all the items on one stack, and flipped it to get to the bottom by putting everything on the other stack.   
  
- enqueue() - Takes a value as an argument, ands it to the end of the queue, and returns an array of all the items in the queue, as per the Code Challenge specifications.
- dequeue() - Takes no arguments. Removes the node at the front of the queue, and returns its value

### [Animal Shelter](./401-javascript/fifoAnimalShelter/fifo-animal-shelter.js)
#### Challenge
Write a queue that will only store cats and dogs, and will return the animal closest to the front of the list that is requested in the dequeue.
#### Approach and Efficiency  
I used the two stack method as a storage technique again, so that I could put all the mismatches on the second stack while I searched for the first matching animal type. The animals are stored as objects with a type of either 'dog' or 'cat.
- enqueue() - Takes an object as an argument with a type of either 'dog' or 'cat' and adds it to the queue
- dequeue() - Takes a type as an argument, either 'cat' or 'dog' and will return the object with that type cloesest to the front of the queue.

