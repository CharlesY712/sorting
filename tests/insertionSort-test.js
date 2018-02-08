import { expect } from 'chai';
import insertionSort from '../lib/insertionSort.js';

function sortCheck (array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    } else {
      return array;
    }
  }
}

describe('insertionSort', () => {
  it('should sort a small array of numbers', () => {
    let array = [2, 8, 4, 3, 6, 1, 5, 7];
    let sortedArray = insertionSort(array);

    expect(sortedArray).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('should sort letters alphabetically', () => {
    let array = ['c', 'h', 'a', 'e', 'b', 'f', 'd', 'g'];
    let sortedArray = insertionSort(array);

    expect(sortedArray).to.deep.equal(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']);
  });

  it('should sort positive and negative numbers', () => {
    let array = [-2, 3, 6, -4, 1, -8, 5, 7];
    let sortedArray = insertionSort(array);

    expect(sortedArray).to.deep.equal([-8, -4, -2, 1, 3, 5, 6, 7]);
  });

  it('should sort a large array of numbers', () => {
    let array = [];
    let min = -100;
    let max = 27000;
    // let max = 60,000

    for (let i = 0; i < Math.abs(min) + max; i++) {
      let number = Math.floor(Math.random() * (max - min)) + min;

      array.push(number);
    }
    
    let sortedArray = insertionSort(array);

    expect(sortedArray).to.deep.equal(sortCheck(sortedArray));
  });
});

