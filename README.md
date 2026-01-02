# FuncScript
A JS Framework for a <b>FUNCy</b> experience

## Phrases 

### math
##### The start phrase for all math related functions

```math.add(number1, number2)```

```math.sub(number1, number2)```

```math.mul(number1, number2)```

```math.div(number1, number2)```

### doc
##### The start phrase for all document related functions

```doc.log(text)```

```doc.cond(statement, condition, result)```

```doc.event(id, event, result)```

### markup
##### The start phrase for all markup related functions (or import directly)

```markup.newEl(el, id, props, content)```

```markup.replaceEl(id, content)```

```markup.updateEl(id, content)```

```markup.appendEl(id, content)```

```markup.removeEl(id)```

### vars
##### The start phrase for all variable related functions

```vars.decl(name)```

```vars.set(name, value)```

```vars.get(name)```

```vars.addVar(name, value)```

### Installation
1. Install node.js from https://nodejs.org/en/download/
2. Run `npm install` to install dependencies
3. Download the funcscript.js file and import functions in your ```index.js``` 
4. Open `src/index.html` to see the FUNCky