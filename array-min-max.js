
const arr = [40, 10, 15, 25]
//For Max numbers
let maxNum = 0
for (let index = 0; index < arr.length; index++) {
    if (maxNum < arr[index]) {
        maxNum = arr[index]
    }
}
console.log(maxNum);

let sorted = arr.sort()
for (let index = 0; index < sorted.length; index++) {
    maxNum = (sorted[index] < sorted[index + 1]) ? sorted[index + 1] : sorted[index]
}
console.log(maxNum);

console.log(Math.max(...arr));


//For Min numbers
let sorted = arr.sort()
let minNum = parseInt(sorted[0])

console.log(minNum);

console.log(Math.min(...arr));
