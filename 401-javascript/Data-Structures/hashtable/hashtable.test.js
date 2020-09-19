'use strict';

const Hashtable = require('./hashtable');

describe('hashtable tests', () => {

  it('adds to the hashtable and retreives the value with the key', () => {
    const table = new Hashtable(256);
    table.add('john','fogerty');
    expect(table.get('john')).toBe('fogerty');
  })

  it('returns null for a key not in the table', () => {
    const table = new Hashtable();
    expect(table.get('nope')).toBe(null);
  })

  it('can handle a collision', () => {
    const table = new Hashtable();
    table.add('act', 'now');
    table.add('cat','hat');
    expect(table.hash('act')).toBe(table.hash('cat'));
    expect(table.get('act')).toBe('now');
    expect(table.get('act')).not.toBe('hat');
    expect(table.get('cat')).toBe('hat');
  });

  it('can hash keys to an in-range value', () => {
    const table = new Hashtable();
    const hashZZ = table.hash('ZZZZZZZYYYYYYYXXXX');
    expect(hashZZ >= 0 && hashZZ < 1024).toBeTruthy();
  })
  it('can use the contains method', () => {
    const table = new Hashtable();
    table.add('act', 'now');
    table.add('cat','hat');
    expect(table.contains('act')).toBeTruthy();
    expect(table.contains('cat')).toBeTruthy();
    expect(table.contains('tan')).toBeFalsy();
  })

})
