const arr = [1, 2, 1, 2, 1, 3, 2, 3]
let sorted = arr.sort();
let pairs = 0;
for (let i = 0; i < arr.length; i++) {
    if (sorted[i] === sorted[i + 1]) {
        pairs = pairs + 1;
        i++;
    }
}
console.log(pairs);

const arr = ['puneet', 'vibhay', 'sameer', 'sameer', 'vibhay']
let pairs = 0
arr.forEach((el, i) => {
    if (arr.indexOf(el, i + 1) > 0 && arr.indexOf(el, i + 1) !== i) {
        pairs = pairs + 1
    }
})
console.log(pairs);

let pairs = 0;
const arr = ['puneet', 'vibhay', 'sameer', 'sameer', 'vibhay', 'sameer', 'vibhay', 'nisu', 'vibhay']
let store = {}
arr.forEach(el => {
    store[el] = (store[el]) ? store[el] + 1 : 1
})

console.log(store);
Object.values(store).forEach(val => {
    pairs = pairs + Math.floor(val / 2)
})
console.log(pairs);
