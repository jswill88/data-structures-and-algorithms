'use strict';

const llDupes = require('./ll-dupes');
const LinkedList = require('../Data-Structures/linkedList/linked-list')

const linkedList = new LinkedList();
const D = linkedList.insert('D')
const B = linkedList.insert('B');
linkedList.insert('F');
linkedList.insert('D');
linkedList.insert('B');
linkedList.insert('A');


describe('ll dupes tests', () => {
  // const ll = makeList();
  it('should ', () => {

    expect(llDupes(linkedList)).toEqual(['B', 'D'])
  });
});


