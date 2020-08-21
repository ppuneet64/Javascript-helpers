const sumData = (a) => (b) => (b !== undefined) ? sumData(a + b) : a
//console.log(sumData(10)(15)(0)())

function curry(func) {
    return function pass(...args) {
        if (args.length >= func.length) {
            return func.apply(null, args)
        } else {
            return function (...argsN) {
                return pass.apply(null, args.concat(argsN))
            }
        }
    }
}

function sum(a, b, c, d) {
    return a + b + c + d;
}
//let curriedSum = curry(sum);
//console.log(curriedSum(1)(2)(3)())
