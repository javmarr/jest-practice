
jest.unmock('../List');

import List from '../List';

describe('List', () => {
  it('finding min value in the list', () => {
    const listTest = new List([1, 20, -32, 60, 5, 6]);
    // remove and add your expectations
    expect(listTest.min()).toBe(-32);
    listTest.items = null;
    expect(listTest.min()).toBe(Infinity);
  });
  it('finding min value in empty', () => {
    const listTest = new List([]);
    expect(listTest.min()).toBe(Infinity);
  });
  it('finding max value in list', () => {
    const listTest = new List([1, -10, 32, 60, 5, 6]);
    expect(listTest.max()).toBe(60);
    listTest.items = null;
    expect(listTest.max()).toBe(-Infinity);
  });
  it('finding max value in empty', () => {
    const listTest = new List([]);
    expect(listTest.max()).toBe(-Infinity);
  });
  it('finding sum value with and without numbers', () => {
    const listTest = new List([1, 20, 32, 60, 5, 6]);
    const expectedResult = 21 + 32 + 60 + 11;
    expect(listTest.sum()).toBe(expectedResult);
    listTest.items = [];
    expect(listTest.sum()).toBe(0);
  });
  it('finding avg value with and without numbers', () => {
    const listTest = new List([1, 20, 32, 60, 5, 6]);
    const expectedResult = 124 / 6;
    expect(listTest.average()).toBe(expectedResult);
    listTest.items = [];
    expect(listTest.average()).toBe(0);
    listTest.items = [null];
    expect(listTest.average()).toBe(0);
    listTest.items = ['jdf', 'sdjklds', 1, 3, 5];
    expect(listTest.average()).toBeNaN();
  });
});
