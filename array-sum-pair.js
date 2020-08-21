const array = [1, 2, 3, 5, 6]

const checkSumPair = (arr, sum) => {
    let table = new Set()
    for (let i = 0; i < arr.length; i++) {
        if (table.has(sum - arr[i])) {
            return true
        }
        table.add(arr[i])
    }
    return false;
}

const checkSumPair1 = (arr, sum) => {
    let table = new Set()
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === sum) {
                return true
            }
        }
    }
    return false;
}

//console.log(checkSumPair1(array, 6))
