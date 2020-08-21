const getDuplicates = (arr) => {
    let duplicates = []
    arr.sort()
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            duplicates.push(arr[i])
        }
    }
    return duplicates
}

const getDuplicatesStrings = (arr) => {
    let duplicates = []
    let store = new Set()
    for (let i = 0; i < arr.length; i++) {
        if (store.has(arr[i])) {
            duplicates.push(arr[i])
        } else {
            store.add(arr[i])
        }
    }
    return duplicates
}
//console.log(getDuplicatesStrings(["Pun", "eet","nisu", "Pun", "nisu"]))