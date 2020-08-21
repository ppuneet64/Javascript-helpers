//Three way of reversing string
const reverseStr = (str) => {
    if (!str || str.length <= 1) {
        throw new Error("String is not valid")
    }
    let res = []
    for (let i = str.length - 1; i >= 0; i--) {
        res.push(str[i])
    }
    return res.join('')
}
const reverseStr1 = (str) => {
    if (!str || str.length <= 1) {
        throw new Error("String is not valid")
    }
    let strArr = str.split('')
    return strArr.reverse().join('')
}
function reverseString2(str) {
    if (str === "") {
        return "";
    } else {
        return reverseString2(str.substr(1)) + str.charAt(0);
    }
}
//console.log(reverseString2("puneet pandey"))