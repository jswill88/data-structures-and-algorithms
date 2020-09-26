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

### [Multi Bracket Validation](./401-javascript/multiBracketValidation/multi-bracket-validation.js)
#### Challenge
Write a function that accepts a string as an argument. The function will check if all the brackets are properly paired up by returning `true` or `false`

#### Approach and Efficiency
I used the stack class to hold onto the latest opening bracket. When a closing bracket showed up, I compared it to the opening bracket to make sure it was the correct match. If they all matched, the function returns true, otherwise false. This function has a time efficiency of O(n) and a space efficiency of O(1).

### [Trees](./401-javascript/Data-Structures/tree/tree.js)
#### Challenge
Write a binary tree class with `preOrder()`, `inOrder()`, and `postOrder()` methods. Write a binary search tree class with add() and contains() methods.

#### Approach and Efficiency
I used recursion for the methods on the binary tree. I used recursion for the `add()` method. I was able to to the `contains()` method with a while loop.

- preOrder() - Takes no arguments. Makes and returns an array of the tree items in the order center, left, right.
- inOrder() - Takes no arguments. Makes and returns an array of the tree items in the order left, center, right
- postOrder() - Takes no arguments. Makes and returns an array of the tree items in the order left, right, center
- add() - Takes one value as an argument. Adds that value at the correct node in a binary search tree
- contains() - Takes one value as an argument. Returns true if the value is in the tree, and false if not.

### [Trees](./401-javascript/Data-Structures/tree/tree.js)
#### Challenge
Write a tree method called `findMaximumValue()` that will search through a binary tree full of numbers and find the largest value. 
#### Approach and Efficiency
We used recursion to traverse the tree, and compared each value. This is inefficient, but since the tree is not sorted, I do not believe there is a better way.


### [FizzBuzz Tree](./401-javascript/Data-Structures/fizzBuzzTree/fizzbuzz-tree.js)
#### Challenge
Write a function that will traverse a tree and replace the values divisible by 3 with 'Fizz', the values divisible by 5 with 'Buzz', those divisible by both with 'FizzBuzz', and everything else with a string.
#### Approach and Efficiency
I used recursion to make sure I went to every node of the tree, then I checked the value of each node and compared it against 3 and 5 and reassigned 'Fizz' and 'Buzz' as needed.

### 9/2/2020
### [Breadth First](./401-javascript/Data-Structures/tree/tree.js)
#### Challenge
Write a method in the tree class that will traverse the tree breadth first and return an array of all the values in the tree.  
#### Approach and Efficiency
I used a queue to store the nodes as I went along, and when the queue was empty I returned the array. My partner also found a clever way to just use one array and return it, which is what the whiteboard is based on.
#### Testing
npm test breadth-first.test.js

### 9/14/2020
### [Sort Blog](./BLOG.md)
#### Challenge
Write a blog and function that will sort an array.
#### Approach and Efficiency
I went through the pseudo code one line at a time and kept track of all the variables to see how it works. I then translated the pseudocode to javascript.
#### Testing
npm test sort.test.js

### 9/15/2020
### [Sort Blog](401-javascript/mergeSort/merge-sort-blog.md)
#### Challenge
Write a blog and function that will sort an array using merge sort technique.
#### Approach and Efficiency
I went through the pseudo code one line at a time and kept track of all the variables to see how it works. I then translated the pseudocode to javascript. This is a super clever solution, but with all the recursion and creating new arrays, this does not seem very efficient.
#### Testing
npm test merge-sort.test.js

### 9/16/2020
### [Quick Sort Blog](./401-javascript/quickSort/quick-sort-blog.md)
#### Challenge
Write a blog and function that will sort an array using quicksort.
#### Approach and Efficiency

#### Testing
npm test sort.test.js


### 9/18/2020
### [Hashtables](./401-javascript/Data-Structures/hashtable/hashtable.js)
```
npm test hashtable
```
#### Challenge
The challenge was to implement a hash table class that can add and show items from a Hash Table. It makes a hash for each key, and stores the value.

#### Approach & Efficiency
I used an array to deal with collisions. I used the simple hash algorithm of multiplying by 599 and moduloing by the length of the hash table.  

#### API
 - `add(key, value)` - Takes in a key value pair and adds it to the hash table.
 - `get(key)` - Returns a value from the hashtable based on the key passed in. If there is nothing at the key, it returns `null`.
 - `contains(key)` - Takes in a key, and returns true is that index has a value and false if it does not.
 - `hash(key)` - Takes a key as an argument and returns a hashed version of the key to place it at that index in the hash table.
 
### 9/21/2020
### [Repeated Word](./401-javascript/repeatedWord/repeated-word.js)
#### Challenge
Write a function that will return the first repeated word of a given string. This needs to account for upper and lowercase letters and to account for non word characters.  
#### Approach and Efficiency
We accomplished this by putting each word into a hashtable, and then checking if each following word had already been entered into that hash table. Once there was a match, we returned that value.
#### Testing
npm test repeated-word  
The test passes with all the example input.

### 9/22/2020
### [Tree Intersection](./401-javascript/treeIntersection/tree-intersection.js)
#### Challenge
Find the shared values between two trees, and return them as an array.
  
#### Approach and Efficiency
We put all the values from the first tree into a hash table. Then we checked each value in the second tree to see if it was already in the hash table. If it was, we added it to an array. Each value will only appear once in the array, even if it appears more than one time in the tree.

#### Testing
npm test tree-intersection  

### 9/23/2020
### [Left Join](./401-javascript/leftJoin/left-join.js)
#### Challenge
Perform a left join on two given hash tables.
  
#### Approach and Efficiency
We looped through all the values in the first hash table, and added them to a subarray, and we checked if the second hash table also had a value for the key, and if it did we added it to that subarray. We push all these arrays into a larger array.

#### Testing
npm test left-join

### 9/25/2020
### [Graphs](./401-javascript/Data-Structures/graph/graph.js)
```
npm test graph
```
## Challenge
Write a graph class with a variety of methods.

## Approach & Efficiency
I used objects to store the nodes, edges, and the neighbors for each node so that I could easily access all of them. I have a graph class and a Node class, and the edges are stored in the neighbors object in each node, and in the edges object in the constructor. 

## API
`addNode(value)` - Takes in a value and creates a node in the graph with that value. It returns the node.  
`addEdge(node1, node2, weight = null)` - Takes in two nodes and a number as arguments. Creates an edge between the two nodes with the given weight, and adds the other node to each nodes neighbor list.  
`getNodes()` - Returns the object will all the nodes in the graph. If there are no nodes in the graph, this returns `null`.  
`getNeighbors(node)` - Takes a node as an argument, and returns the object with all the neighbors of the node. 
`size()` - Returns a number representing how many nodes are in the graph.
