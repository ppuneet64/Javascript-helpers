const getDuplicates1 = (arr) => {
    let duplicates = []
    arr.sort()
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1] && !duplicates.includes(arr[i])) {
            duplicates.push(arr[i])
        }
    }
    return duplicates
}

const getDuplicates2 = (arr) => {
    let duplicates = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
                duplicates.push(arr[j])
            }
        }
    }
    return duplicates
}

const getDuplicates3 = (arr) => arr.filter((el, index) => arr.indexOf(el) !== index)

const getDuplicates4 = (arr) => {
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
