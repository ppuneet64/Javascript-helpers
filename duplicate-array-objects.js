let arrayObj = [{ id: 1, value: 'Puneet' }, { id: 2, value: 'Vibhay' }, { id: 3, value: 'Puneet' }, { id: 4, value: 'Puneet' }]

const getDuplicateObjShort = (array = []) => array.filter((data, index, arr) => arr.findIndex(el => el.value === data.value) !== index)

const getDuplicateObj = (array = []) => {
    let duplicates = []
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i].value === array[j].value && duplicates.findIndex(el => el.value === array[j].value) === -1) {
                duplicates.push(array[j])
            }
        }
    }
    return duplicates
}

const getDuplicateObj1 = (array = []) => {
    let duplicates = []
    let store = new Set()
    for (let i = 0; i < array.length; i++) {
        if (store.has(array[i].value)) {
            duplicates.push(array[i])
        } else {
            store.add(array[i].value)
        }
    }
    return duplicates
}

console.log(getDuplicateObj1(arrayObj));
