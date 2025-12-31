const variables = {

};


function decl(varName){
    variables[`${varName}`] = undefined
}

function set(varName, value) {
    variables[`${varName}`] = value
}


const vars = {
    decl,
    set,
}

export default vars