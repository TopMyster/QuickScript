import { doc, vars, markup } from "../funcscript.js";

vars.set('counter', 0)

markup.appendEl('content', markup.newEl('h1', 'counter', { class: 'title' }, vars.get('counter')))
markup.appendEl('content', markup.newEl('button', 'counter-add-btn', { class: 'button' }, '+'))
markup.appendEl('content', markup.newEl('button', 'counter-sub-btn', { class: 'button' }, '-'))
markup.appendEl('content', markup.newEl('button', 'counter-reset', { class: 'button' }, '↻'))

doc.event('counter-add-btn', 'click', () => {
    vars.addVar('counter', 1)
    markup.updateEl('counter', null, vars.get('counter'))
})

doc.event('counter-sub-btn', 'click', () => {
    vars.addVar('counter', -1)
    doc.cond('if', vars.get('counter') < 0, () => vars.set('counter', 0))
    markup.updateEl('counter', null, vars.get('counter'))
})

doc.event('counter-reset', 'click', () => {
    vars.set('counter', 0)
    markup.updateEl('counter', null, vars.get('counter'))
})
