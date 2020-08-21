//Polyfil bind
Function.prototype.bind = function(thisArgs, ...args){
    var caller = this//current this on execution context should be kept
    return function (...newArgs) {
         return caller.apply(thisArgs, [...args, ...newArgs])
    }
}
function test(name, lname){
    return this.age + name + lname
}
let obj = {
    age : "my name is 20"
}
//debugger
let newFunc = test.bind(obj)
console.log(newFunc("puneet", "pandey"))

//pollyfil bind new

Function.prototype.bind = function(thisArgs, ...args){
	//current this on execution context kept automatically by arrow func
    return (...newArgs) => this.apply(thisArgs, [...args, ...newArgs])
}
function test(name, lname){
    return this.age + name + lname
}
let obj = {
    age : "my name is 20"
}

let newFunc = test.bind(obj)
console.log(newFunc("puneet", "pandey"))