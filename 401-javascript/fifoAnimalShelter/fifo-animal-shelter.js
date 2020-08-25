const Stack = require('../Data-Structures/stacksAndQueues/stacks-and-queues').stack;

class AnimalShelter {
  constructor() {
    this.stackOne = new Stack();
    this.stackTwo = new Stack();
  }
  enqueue(petObject) {
    if (!/^cat$|^dog$/i.test(petObject.type)) {
      throw Error('animal type must be cat or dog')
    }
    while (this.stackOne.top) {
      this.stackTwo.push(this.stackOne.pop());
    }
    this.stackOne.push(petObject);
    while (this.stackTwo.top) {
      this.stackOne.push(this.stackTwo.pop());
    }
  }
  dequeue(pref) {

    let returnAnimal = null;

    if(!this.stackOne.top) { throw Error('cannont dequeue an empty shelter') }

    if(!/^cat$|^dog$/i.test(pref)) { return null }

    while (this.stackOne.top && !returnAnimal) {
      if (this.stackOne.top.value.type === pref) {
        returnAnimal = this.stackOne.pop();
      }
      else { this.stackTwo.push(this.stackOne.pop()) }
    }

    while (this.stackTwo.top) {
      this.stackOne.push(this.stackTwo.pop());
    }

    return returnAnimal;
  }
}

module.exports = AnimalShelter;
