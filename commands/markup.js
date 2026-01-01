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

const elements = {
    newEl,
    delEl,
    updateEl,
    appendEl,
    prependEl,
    replaceEl
}

export default elements