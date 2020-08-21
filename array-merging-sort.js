const mergeArray = (...arrays) => {
    let res = []
    for (let i = 0; i < arrays.length; i++) {
        res.push(...arrays[i])
    }
    for (let j = 0; j < res.length; j++) {
        for (let k = 0; k < res.length - 1; k++) {
            if (res[k] > res[k + 1]) {
                let temp = res[k]
                res[k] = res[k + 1]
                res[k + 1] = temp
            }
        }
    }
    return res
}
//console.log(mergeArray([10, 5], [2, 0], [3,2,1]))