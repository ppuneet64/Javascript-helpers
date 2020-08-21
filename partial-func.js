"use strict"
function __partialFunc(func, ...args) {
    return function (...argsI) {
        return func.apply(this, [...args, ...argsI]);
    }
}
function getAdd(a, b) {
    return 'hello'
}

// let partialFunc = __partialFunc(getAdd, 10)
// console.log(partialFunc(10));

// const obj = {
//     fName: "Puneet",
//     getData(time) {
//         console.log(`Hello ${this.fName} your file created at ${time}`);
//     }
// }

// obj.getPartial = __partialFunc(obj.getData)
// obj.getPartial(new Date().toDateString())
// let user = {
//     name: {
//         test: "John"
//     }
// };

// Object.defineProperties(user, {
//     name: {
//         writable: false,
//         enumerable: false,
//         configurable: false,
//         test: {
//             //value: "John",
//             writable: false,
//             enumerable: false,
//             configurable: false,
//         }
//     }
// });
// user.name.test = "puneet"
// //delete user.name.test;
// console.log(user);
// for (val in user) {
//     console.log(val);
// }

// let arr = new Array(5).fill(1)
// console.log(arr);
// var human = { mortal: true }
// var socrates = Object.create(human);
// console.log(human.isPrototypeOf(socrates));

class Animal {
    showName() {  // instead of this.name = 'animal'
        console.log('animal');
    }

    constructor() {
        this.showName(); // instead of console.log(this.name);
    }
}

class Rabbit extends Animal {
    // showName() {
    //     console.log('rabbit');
    // }
}

new Animal(); // animal
new Rabbit(); // rabbit