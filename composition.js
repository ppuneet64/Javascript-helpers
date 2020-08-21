const user = {
  name: 'Kim',
  active: true,
  cart: [],
  purchases: []
}
const history = [];
const addItems = ([user, item]) => {
    history.push(user)
    return { ...user,cart: [...user.cart, item]}
}
 
const addTaxes = user => {
    history.push(user)
    const activeUser = { 
        ...user,
        cart: [...user.cart].map(item => {
        return {
            produce: item.produce, 
            price: item.price * 1.05}
        })
    }
    return activeUser
}
 
const makePurchase = user => {
    history.push(user)
    const activeUser = {
        ...user,
        purchases: [...user.cart]
    }
    return activeUser
}
 
const clearCart = user => {
    history.push(user)
    const activeUser = {
        ...user,
        cart: []
    }
    return activeUser
}
 
const composeNew = (...fns) => (...args) => {
    return fns.reduce((val, g) => g(val), args)
}
let data = composeNew(addItems, makePurchase, addTaxes, clearCart)(user, { produce: 'gummies', price:10 })
console.log(history)