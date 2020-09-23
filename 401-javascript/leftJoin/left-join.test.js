'use strict';

// const Hashtable = require('../Data-Structures/hashtable');
const leftJoin = require('./left-join');

const synonymHashtable = {
  fond: 'enamored',
  wrath: 'anger',
  diligent: 'employed',
  outfit: 'garb',
  guide: 'usher'
}

const antonymHashtable = {
  fond: 'averse',
  wrath: 'delight',
  diligent: 'idle',
  guide: 'follow',
  flow: 'jam'
}

it('can handle a happy path left-join', () => {
  const joinedTable = leftJoin(synonymHashtable, antonymHashtable);
  expect(joinedTable[0]).toEqual(['fond', 'enamored', 'averse']);
  expect(joinedTable[3]).toEqual(['outfit','garb', null]);
})

it('throws errors', () => {
  expect(() => leftJoin(synonymHashtable)).toThrowError();
  expect(() => leftJoin(antonymHashtable)).toThrowError();
});

it('flow not to be in the final hashtable', () => {
  const joinedTable = leftJoin(synonymHashtable, antonymHashtable);
  const mappedTable = joinedTable.filter(arr => arr[0] === 'flow');
  expect(mappedTable).toEqual([]);
})



