const array1 = [1, [2, [3, [4, [5, [6, [7, 20, 18, [0, 99]], 8], 9], 10]]], 12];
const flatternArray = (arr) => {
    let res = []
    arr.forEach(el => {
        if (Array.isArray(el)) {
            res = res.concat(flatternArray(el))
        } else {
            res = res.concat(el)
        }
    })
    return res
}
let result = flatternArray(array1).sort((a, b) => a - b)
console.log(result);
const flatten = arr => arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);
console.log(flatten(array1))