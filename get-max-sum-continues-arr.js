let arr = [-1, 2, 3, -4, 10]

// Brute Force

function getMaxSubSum(arr) {
  let maxSum = 0; // if we take no elements, zero will be returned
  for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;
    for (let j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }

  return maxSum;
}
//Fast Solution

function getMaxSubSum1(arr) {
  let maxSum = 0;
  let partialSum = 0;
  for (let item of arr) { // for each item of arr
    partialSum += item; // add it to partialSum
    maxSum = Math.max(maxSum, partialSum); // remember the maximum
    if (partialSum < 0) partialSum = 0; // zero if negative
  }
  return maxSum;
}


function getMaxSubSum(arr)
{
let subArr=[];
let sum=0;
for(let val of arr)
{
if(val < 0) continue;
subArr.push(val);
}
for(let val of subArr)
{
sum+= val;
}
console.log(sum);
}

console.log(getMaxSubSum1(arr))