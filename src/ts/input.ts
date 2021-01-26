import { println } from './buffer';

let ti = document.querySelector('.terminal-interface') as HTMLElement
let tieb = document.querySelector('.terminal-interface--prefix') as HTMLElement
let tie = document.querySelector('.terminal-interface--input') as HTMLInputElement

console.log({
  ti, tieb, tie
})

document.getElementsByTagName('body')[0].addEventListener('click', (event) => {
  tie.focus()
});

ti.addEventListener('focusout', (event) => {
  // console.log('losing focus')
});

tie.addEventListener('input', (event) => {
  // console.log(tie.value.length, 'ch')
  // tie.style.width = tie.value.length + 'ch';
})

tie.addEventListener('keypress', (event) => {
  if (event.key == 'Enter') {
    println(tieb.innerText + tie.value)
    config.onEnter(tie.value)
    tie.value = ''
    tie.dispatchEvent(new InputEvent('input'))
  }
})

tie.dispatchEvent(new InputEvent('input'))

function onEnter (input: string): void {
  println(input)
}

var config = {
  onEnter: onEnter
}

export { config }