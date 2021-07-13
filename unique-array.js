function uniqueArray(arr){
  let unique = []
  for(let i = 0; i < arr.length; i++){
      if(unique.indexOf(arr[i]) === -1){
        unique.push(arr[i])
      }
  }
  return unique;
}

const uniqueArray1 = (arr) => arr.filter((el, index) => arr.indexOf(el) === index)

function uniqueArray2(arr){
  let store = new Set()
  for(let i = 0; i < arr.length; i++){
      if(!store.has(arr[i])){
        store.add(arr[i])
      }
  }
  return [...store];
}
