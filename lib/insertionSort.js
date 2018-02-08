function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let num = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > num) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = num;
  }
  return array;
}




export default insertionSort;