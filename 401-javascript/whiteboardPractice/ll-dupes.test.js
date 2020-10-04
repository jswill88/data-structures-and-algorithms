'use strict';

const llDupes = require('./ll-dupes');
const LinkedList = require('../Data-Structures/linkedList/linked-list')

const linkedList = new LinkedList();
linkedList.insert('F');
linkedList.insert('D');
linkedList.insert('B');
linkedList.insert('A');


describe('ll dupes tests', () => {
  it('should ', () => {

    expect(llDupes(linkedList)).toEqual(['B', 'D'])
  });
});


