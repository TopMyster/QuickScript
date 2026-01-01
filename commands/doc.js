function log(x) {
    console.log(x)
}

function alert(x) {
    alert(x)
}

function event(event, result) {
    document.addEventListener(event, result)
}



const doc = {
    log,
    alert,
    event
}

export default doc
