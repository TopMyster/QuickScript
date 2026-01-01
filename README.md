# FuncScript
A JS Framework for a <b>FUNCy</b> experience

## Phrases 

### math
##### The start phrase for all math related functions

```math.add(number1, number2)```

### doc
##### The start phrase for all document related functions

```doc.log(text)```

### var
##### The start phrase for all variable related functions

```var.add(name, value)```

```var.get(name)```

```var.remove(name)```

### markup
##### The start phrase for all markup related functions (or import directly)

```javascript
import { appendEl, newEl } from 'funcscript';
appendEl('id', newEl('h5', 'name', {}, 'Content'));
```

```markup.newEl(el, id, props, content)```
...
```markup.replaceEl(id, content)```

### Installation
1. Install node.js from https://nodejs.org/en/download/
2. Run `npm install` to install dependencies
3. Open `src/index.html` to see the FUNCky