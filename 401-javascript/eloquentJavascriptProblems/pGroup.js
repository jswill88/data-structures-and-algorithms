class PGroup {
  constructor(set = null) {
    this.group = new Set(set);
  }
  static empty() {
    return new PGroup();
  }
  add(val) {
    const setWithNewVal = new Set();
    this.group.forEach(value => setWithNewVal.add(value))
    setWithNewVal.add(val);
    return new PGroup(setWithNewVal);
  }
  delete(val) {
    const setToDeleteFrom = new Set(this.group);
    setToDeleteFrom.delete(val);
    return new PGroup(setToDeleteFrom)
  }
  has(val) {
    return this.group.has(val);
  }
}
const emptyGroup = PGroup.empty();
console.log(emptyGroup);
const newGroup = emptyGroup.add(1)
const group2 = newGroup.add(2);
const deleted = group2.delete(1);
console.log('should be false',deleted.has(1))
console.log('should be true', group2.has(1))
console.log('group', emptyGroup);
console.log('with 1 hopefully', newGroup)
console.log('group 2', group2);
console.log('deleted should be 2', deleted)
console.log('empty group', emptyGroup)
console.log('new empty', PGroup.empty())