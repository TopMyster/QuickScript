//FuncScript Library

// Math
const mathState = {
    total: 0,
}

function add(number) {
    mathState.total += number;
    return mathState.total;
}

function sub(number) {
    mathState.total -= number;
    return mathState.total;
}

function mul(number) {
    mathState.total *= number;
    return mathState.total;
}

function div(number) {
    mathState.total /= number;
    return mathState.total;
}

function clear() {
    mathState.total = 0;
    return mathState.total;
}

const math = {
    add,
    sub,
    mul,
    div,
    clear
};

// Document

function log(x) {
    console.log(x)
}

function alertManual(x) {
    alert(x)
}

function event(event, result) {
    document.addEventListener(event, result)
}

const doc = {
    log,
    alert: alertManual,
    event
}

// Variables

const variables = {};

function addV(varName, value) {
    variables[varName] = value;
}

function decl(varName) {
    variables[varName] = undefined;
}

function set(varName, value) {
    variables[varName] = value;
}

function get(varName) {
    return variables[varName];
}


const vars = {
    decl,
    set,
    get,
    addV
}

// Markup

function newEl(el, id, props, content) {
    let element = document.createElement(el)
    element.id = id
    if (props) {
        Object.entries(props).forEach(([key, value]) => {
            element.setAttribute(key, value)
        })
    }
    element.textContent = content
    return element
}

function appendEl(id, content) {
    document.getElementById(id).appendChild(content)
}

function prependEl(id, content) {
    document.getElementById(id).prepend(content)
}

function delEl(id) {
    document.getElementById(id).remove()
}

function updateEl(id, props, content) {
    const element = document.getElementById(id);
    if (props) {
        Object.entries(props).forEach(([key, value]) => {
            element.setAttribute(key, value);
        });
    }
    if (content !== undefined) element.textContent = content;
}

function replaceEl(id, content) {
    const oldEl = document.getElementById(id);
    oldEl.replaceWith(content);
}

const markup = {
    newEl,
    delEl,
    updateEl,
    appendEl,
    prependEl,
    replaceEl
}

// Export

export { math, doc, vars, markup };