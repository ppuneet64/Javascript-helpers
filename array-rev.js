//Reverse an array
function reverseArray() {
    if (arr.length <= 0) {
        return [];
    }
    let reversed = []
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i])
    }
    return reversed
}

function reverseArr(arr) {
    if (arr.length <= 0) {
        return [];
    }
    let reversed = [], j = 0
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed[j] = arr[i]
        j++
    }
    return reversed
}

//console.log(reverseArr([1, 2, 3]))