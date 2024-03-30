/**
 * Return an array of indexes of occurences of a value x in array arr.
 * 
 * @param {Array} arr - the source array 
 * @param {Number} x - the element of the array to be found
 */    

function findAll(arr,x) {
    let indexes = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      indexes.push(i);
    }
  }

  return indexes;
}

let array1 = [1, 9, 2, 3, 9, 7, 3, 8, 9, 9]
let targetValue = 9;

let indices = findAll(array1, targetValue);

console.log(`Indexes of ${targetValue} in the array:`, indices);

