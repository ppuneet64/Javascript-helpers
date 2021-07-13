let arrayObj = [{ id: 1, value: 'Puneet' }, { id: 2, value: 'Vibhay' }, { id: 3, value: 'Puneet' }, { id: 4, value: 'Puneet' }]

const getUniqueObjShort = (array = []) => array.filter((data, index, arr) => arr.findIndex(el => el.value === data.value) === index)

const getUniqueObj = (array = []) => {
    let unique = []
    for (let i = 0; i < array.length; i++) {
        if (unique.findIndex(el => el.value === array[i].value) === -1) {
            unique.push(array[i])
        }
    }
    return unique
}

const getUniqueObj1 = (array = []) => {
    let unique = []
    let store = new Set()
    for (let i = 0; i < array.length; i++) {
        if (!store.has(array[i].value)) {
            unique.push(array[i])
            store.add(array[i].value)
        }
    }
    return unique
}

console.log(getUniqueObj1(arrayObj));
