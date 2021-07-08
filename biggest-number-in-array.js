function methodOne (arr) {
    // The largest number at first should be the first element or null for empty array
    var largest = arr[0] || null;
    // Current number, handled by the loop
    var number = null;
    for (var i = 0; i < arr.length; i++) {
        // Update current number
        number = arr[i];
        // Compares stored largest number with current number, stores the largest one
        largest = Math.max(largest, number);
    }

    return largest;
}
function methodTwo(arr) {
  const max = Math.max(...arr);
  return max;
}

function methodThree(arr){
  return arr.reduce((max,element) => max > element ? max : element, 0)
}

function methodFour(array) {
  let maxNumber = 0;
  array.forEach(number => { maxNumber =  number > maxNumber ? number :  maxNumber; })
  return maxNumber
}

function methodFive(arr) {
  let max = 0
  for (let i=0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
