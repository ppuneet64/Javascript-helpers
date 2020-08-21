function debounce(func, latency, thisArgs = window) {
    let timer = null
    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(func.bind(this, ...args), latency)
    }
}
function throwttle(func, latency) {
    let last = 0
    return function (...args) {
        let now = new Date().getTime()
        if ((now - last) >= latency) {
            last = now
            func(...args)
        }
    }
}

function throwttleSet(func, latency) {
    let canClick = true
    return function (...args) {
        if (canClick) {
            canClick = false
            func(...args)
            setTimeout(() => {
                canClick = true
            }, latency);
        }
    }
}

class HtmlDom {
    getInput = ({ target }) => {
        //console.log(this, target);
        console.log(`Your input value is ${target.value}`)
    }
    handleClick = () => {
        console.log('You clicked it')
    }
    renderHtml() {
        let div = document.createElement("div")
        let input = document.createElement("input")
        let button = document.createElement("button")
        document.body.appendChild(div)
        div.appendChild(button).setAttribute("id", "src-btn")
        button.innerText = "Save"
        div.appendChild(input).setAttribute("id", "src-input")
        input.addEventListener("keypress", debounce(this.getInput, 1000))
        button.addEventListener("click", throwttle(this.handleClick, 1000))
    }
}
let obj = new HtmlDom
obj.renderHtml()
